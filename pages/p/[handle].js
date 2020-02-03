import { GraphQLClient } from 'graphql-request'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { Card, Icon } from 'semantic-ui-react'
import { token } from '../../secrets'

function fetcher(url) {
  return fetch(url).then(r => r.json());
}


const ProfilePage = () => {
  const { query } = useRouter()
  // const initialData = {
  //   handle: query.handle
  // }
  const { data, error } = useSWR(`/api/${query.handle}`,
    fetcher)

  if (error) return <div>{`${query.handle} Failed to load: ${error}`}</div>
  if (!data) return <div>Loading...</div>

  // const { login, name, bio, avatarUrl, followers } = data.user

  // const extra = (
  //   <a>
  //     <Icon name='user' />
  //     {`${followers.totalCount} Followers`}
  //   </a>
  // )
console.log(data)

  return (
    <Card
      // image={avatarUrl}
      header='Header'
      // meta={name}
      // description={bio}
      // extra={extra}
    />
  )

}

// 

export default ProfilePage