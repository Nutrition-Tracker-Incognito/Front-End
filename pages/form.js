import { Container, Segment, Form } from "semantic-ui-react"
import { useState } from "react"
import Link from 'next/link'

const GithubForm = () => {

  const [values, setValues] = useState({ handle: '', character: ''})

  const handleHandleChange = e => setValues({ ...values, handle: e.target.value })
  const handleCharacterChange = e => setValues({ ...values, character: e.target.value })

  return (
    <Container>
      <Segment>
        <Form>
          <Form.Input
            label='Enter your GitHub handle'
            placeholder="GitHub Handle"
            value={values.handle}
            onChange={handleHandleChange}
          />
          <Link
            href='/p/h/[handler]'
            as={`/p/h/${values.handle}`}>
              <a>Submit</a>
            </Link>
        </Form>
      </Segment>
      <Segment>
        <Form>
          <Form.Input
            label='Enter a charater ID'
            placeholder="Character ID"
            value={values.character}
            onChange={handleCharacterChange}
          />
          <Link
            href='/character/[character]'
            as={`/character/${values.character}`}>
              Submit
            </Link>
        </Form>
      </Segment>
    </Container>
  )   
}

export default GithubForm