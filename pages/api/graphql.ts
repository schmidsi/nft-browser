import { ApolloServer } from 'apollo-server-micro'

import createMesh from '../../mesh/createMesh'

const createApolloServer = async () => {
  const { schema, contextBuilder } = await createMesh()
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
