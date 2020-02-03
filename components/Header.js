import { Menu, Container } from "semantic-ui-react"

const Header = () => (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item href='/' as='a'>Home</Menu.Item>
      <Menu.Item href='/form' as='a'>Form</Menu.Item>
    </Container>
  </Menu>
)

export default Header