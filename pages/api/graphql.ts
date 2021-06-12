import { validateConfig, processConfig } from '@graphql-mesh/config'
import { getMesh } from '@graphql-mesh/runtime'
import { ApolloServer } from 'apollo-server-micro'

import rawMeshConfig from '../../mesh.config'

const preImports = {
  '@graphql-mesh/transform-naming-convention': require('@graphql-mesh/transform-naming-convention'),
  '@graphql-mesh/graphql': require('@graphql-mesh/graphql'),
  [`${process.cwd()}/mesh/additionalResolvers`]: require('../../mesh/additionalResolvers'),
}

const importFn = (moduleId: string) => {
  if (preImports[moduleId]) {
    console.log('importFn pre imported', moduleId)
    return preImports[moduleId]
  } else {
    console.log('importFn not pre imported', moduleId)
    return import(moduleId)
  }
}

const createApolloServer = async () => {
  validateConfig(rawMeshConfig)
  const meshConfig = await processConfig(rawMeshConfig, { dir: process.cwd(), importFn })
  const { schema, contextBuilder } = await getMesh(meshConfig)
  const apolloServer = new ApolloServer({
    schema,
    context: contextBuilder,
    introspection: true,
    playground: true,
  })
  return apolloServer
}

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async (req, res) => {
  const apolloServer = await createApolloServer()
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}
