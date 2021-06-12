import path from 'path'
import { validateConfig, processConfig } from '@graphql-mesh/config'
import { getMesh } from '@graphql-mesh/runtime'
import { ApolloServer } from 'apollo-server-micro'

import meshConfigYaml from '../../meshrc.yaml'

console.log(meshConfigYaml)

const createApolloServer = async () => {
  validateConfig(meshConfigYaml)
  console.log(process.cwd(), __dirname, path.join(__dirname, '../..'))
  const meshConfig = await processConfig(meshConfigYaml, {
    dir: process.cwd(),
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
