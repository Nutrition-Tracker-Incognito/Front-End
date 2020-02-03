import { GraphQLClient } from 'graphql-request';

export default async (req, res) => {
  const { query: { character } } = req

  const API = `https://rickandmortyapi.com/graphql`

  const graphQLClient = new GraphQLClient(API)

  const query = `
    query getCharacter($id: ID!) {
      character(id: $id) {
        name
        image
        episode {
          id
          name
        }
      }
    }
  `

  const variables = { id: `${character}`}
  const data = await graphQLClient.request(query, variables)

  res.json(data)
}
