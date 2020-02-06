import { GraphQLClient } from 'graphql-request'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { Card, Icon, Segment } from 'semantic-ui-react'
import { token } from '../../secrets'

function fetcher(url) {
  return fetch(url).then(r => r.json());
}


const ProfilePage = () => {
  const { query } = useRouter()

  const API = `https://api.github.com/graphql`

  const graphQLClient = new GraphQLClient(API, {
    header: {
      Authorization: `bearer a2660fec70a4775b1f2ccb3424defb717635dcd2`,
    }
  })
  const { data, error } = useSWR(
    `{ 
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
      }`,
    query => graphQLClient.request(query)

  )

  if (error) return <div>{`${query.handler} Failed to load: ${error}`}</div>
  if (!data) return <div>Loading...</div>

  const { login, name, bio, avatarUrl, followers } = data.user

  const extra = (
    <a>
      <Icon name='user' />
      {`${followers.totalCount} Followers`}
    </a>
  )
console.log(data)

  return (
    <Segment>
      <Card
        image={avatarUrl}
        header={login}
        meta={name}
        description={bio}
        extra={extra}
      />
    </Segment>
  )

}

// 

export default ProfilePage