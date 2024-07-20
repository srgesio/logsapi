import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { LogsResolver } from './resolvers/LogsResolver'
import { CollectionsResolver } from './resolvers/CollectionResolver'

async function main() {
    const schema = await buildSchema({
        resolvers: [LogsResolver, CollectionsResolver]
    })

    const server = new ApolloServer({
        schema,
    })

    const { url } = await server.listen()

    console.log(`Server is running, GraphQL Playground available at ${url}`)
}

main()