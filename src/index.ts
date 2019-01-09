import { GraphQLServer } from 'graphql-yoga'
import * as GraphQLJSON from 'graphql-type-json'

const typeDefs = [`schema.graphql`]

const port = process.env.PORT || 4000

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    hello: (_, { name }) => {
      const returnValue = `Hello ${name || 'World!'}`
      return returnValue
    }
  },

  Mutation: {
    async transform(root, args, context, info) {
      return await {
        results: []
      }
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start({ port }, () => console.log(`Server is running on http://localhost:${port}`))
