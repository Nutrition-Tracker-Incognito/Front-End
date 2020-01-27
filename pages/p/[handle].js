import { Segment, Header, Card } from 'semantic-ui-react';
import { useRouter } from 'next/router'

import Layout from '../../components/MainLayout';
import withAuth from '../../lib/withAuth';
import withApollo from '../../lib/withApollo';
import { useFetchUser } from '../../lib/user';

const GitPage = () => {
  const { user, loading } = useFetchUser;
  const router = useRouter()

  return (
    <Layout user={user} loading={loading}>
      <Header as='h1'>Git Page</Header>
      <p>{router.query.handle}</p>
    </Layout>
  )

}


export default withApollo(GitPage);