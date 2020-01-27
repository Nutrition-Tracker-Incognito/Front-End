import React from 'react'

import Layout from '../components/MainLayout';
import { Header, Placeholder } from 'semantic-ui-react';
import { useFetchUser } from '../lib/user';

const Index = () => {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <Header as='h1'>Test App</Header>
      
      {loading && 
        <Placeholder>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
      }

      {!loading && !user && (
        <>
          <p>To test the login click <i>Log In</i></p>
          <p>Once logged in, you should be able to click <i>Profile</i> and <i>Log Out</i></p>
        </>
      )}

      {user && (
        <>
          <Header as='h4'>Rendered user info on the client</Header>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </Layout>
  )
};

export default Index;

