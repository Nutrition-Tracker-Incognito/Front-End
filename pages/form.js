import { Container, Segment, Form } from "semantic-ui-react"
import { useState } from "react"
import Link from 'next/link'

const GithubForm = () => {

  const [handle, setHandle] = useState()

  const handleChange = e => setHandle(e.target.value)

  return (
    <Container>
      <Segment>
        <Form>
          <Form.Input
            label='Enter your GitHub handle'
            placeholder="GitHub Handle"
            onChange={handleChange}
          />
          <Link
            href='/p/[handle]'
            as={`/p/${handle}`}>
              Submit
            </Link>
        </Form>
      </Segment>
    </Container>
  )   
}

export default GithubForm