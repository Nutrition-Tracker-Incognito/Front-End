import React, { useState } from 'react';
import { Segment, Header, Card, Grid, Divider, Form } from 'semantic-ui-react';
import Link from 'next/link'

import withAuth from '../lib/withAuth';
import Layout from '../components/MainLayout';


const Profile = ({ user }) => {

  const [handle, setHandle] = useState()

  const handleChange = e => setHandle(e.target.value)

  const GitLink = props => (
    <Link href='/p/[handle]' as={`/p/${props.handle}`}>
      Submit
    </Link>
  )

  

  return (
    <Layout user={user}>
      <Header as='h1'>{`${user.nickname}'s Profile`}</Header>
      <Segment>
        <Grid columns={2} relaxed='very'>
          <Grid.Column>
            <Header as='h3'>This page is rendered server side</Header>
            <Card
              image={user.picture}
              header={user.nickname}
              description='This page is pre-rendered server side by means of wrapping the exported component in the withAuth HOC in order to get the user data'
              />
          </Grid.Column>
          <Grid.Column>
            <Header as='h3'>Enter your github handle</Header>
            <Form>
              <Form.Input
                label="GitHub Handle"
                placeholder="GitHub Handle"
                onChange={handleChange}
              />
            </Form>
            <GitLink
              handle={handle}
            />
          </Grid.Column>
        </Grid>
        <Divider vertical />
      </Segment>
    </Layout>
  )
};

export default withAuth(Profile)
