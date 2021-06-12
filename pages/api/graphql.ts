import path from 'path'
import { validateConfig, processConfig } from '@graphql-mesh/config'
import { getMesh } from '@graphql-mesh/runtime'
import { ApolloServer } from 'apollo-server-micro'

import meshConfigYaml from '../../meshrc.yaml'

const preImports = {
  'ts-node/register/transpile-only': require('ts-node/register/transpile-only'),
  [`${process.cwd()}/mesh/additionalResolvers.ts`]: require('../../mesh/additionalResolvers'),
  // [`${process.cwd()}/namingConvention`]: require('@graphql-mesh/transform-naming-convention'),
}

console.log(meshConfigYaml)

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
  validateConfig(meshConfigYaml)
  console.log(process.cwd(), __dirname, path.join(__dirname, '../..'))
  const meshConfig = await processConfig(meshConfigYaml, {
    dir: process.cwd(),
    importFn,
    // dir: path.join(__dirname, '../..'),
  })
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
