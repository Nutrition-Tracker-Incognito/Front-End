import { GraphQLClient } from 'graphql-request'
import token from '../../../secrets'

console.log(token)

export default async (req, res) => {
  const { query: { handle } } = req
  // console.log(handle)
  const API = `https://api.github.com/graphql`

  const graphQLClient = new GraphQLClient(API, {
    header: {
      authorization: `Bearer process.env.ACCESS_TOKEN`,
    }
  })

  const query = `{ 
        user(login: "DoubleBridges") {
          id
          login
          name
          bio
          avatarUrl
          followers(first: 10) {
            totalCount
          }
        }
      }`
  const data = await graphQLClient.request(query)
  console.log('api/data', JSON.stringify(data, undefined, 2))

  res.json({ data })
}