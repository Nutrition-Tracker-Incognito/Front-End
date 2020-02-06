import { GraphQLClient } from 'graphql-request'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { Card, Icon, Segment } from 'semantic-ui-react'
import fetch from 'isomorphic-unfetch'


const fetcher = url => fetch(url).then(r => r.json())

const CharacterPage = (props) => {
  const { query } = useRouter()
  const initialData = props.data
  const { data, error } = useSWR(`/api/character/${query.character}`, fetcher, { initialData })
// 
  if (error) return <div>{`${query.character} Failed to load: ${error}`}</div>
  if (!props.data) return <div>Loading...</div>

  const { name, image, episode } = data.character

  const extra = (
    <a>
      <Icon name='user' />
      {`${episode.length} Episodes`}
    </a>
  )

  return (
    <Segment>
      <Card
        image={image}
        header={name}
        // meta={name}
        // description={bio}
        extra={extra}
      />
    </Segment>
  )

}

CharacterPage.getInitialProps = async ({ req, res, query }) => {
  // const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  // const r = await fetch(baseUrl + `/api/character/${query.character}`)
  const r = await fetch(`http://localhost:3000/api/character/${query.character}`)
  const data = await r.json()

  if (data.error && res) {
    res.statusCode = 404
  }

  return {
    data
  }
}



export default CharacterPage