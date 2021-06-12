const { findAndParseConfig } = require('@graphql-mesh/config')
const { getMesh } = require('@graphql-mesh/runtime')
import { ApolloServer } from 'apollo-server-micro'

const createApolloServer = async () => {
  const meshConfig = await findAndParseConfig()
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
