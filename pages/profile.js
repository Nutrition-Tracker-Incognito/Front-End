import React from 'react';

import Layout from '../components/MainLayout';
import { useFetchUser } from '../lib/user';
import { Card, Header, Segment } from 'semantic-ui-react';

export default function Profile() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <Header as='h1'>Profile</Header>

      {loading && <p>Loading profile...</p>}

      {!loading && user && (
        <Segment>
          <Header as='h3'>This page is rendered client side</Header>
          <p></p>
          <Card
            image={user.picture}
            header={user.nickname}
            description='When this page is loaded, user data is retrieved through the useFetchUser hook at the top of the component'
          />
        </Segment>
      )}
    </Layout>
  );
}
