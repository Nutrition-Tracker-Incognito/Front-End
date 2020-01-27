import { Menu, Container, Image } from 'semantic-ui-react'

const Header = ({ user, loading }) => {
 
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
          Test App
        </Menu.Item>
        <Menu.Item href='/' as='a'>Home</Menu.Item>        
        <Menu.Item href='/about' as='a'>About</Menu.Item>        
        {!loading && user && (
          <>
            <Menu.Item href='/profile' as='a'>Profile</Menu.Item>
            <Menu.Item href='/profile-ssr' as='a'>Profile (SSR)</Menu.Item>
            <Menu.Item href='/api/logout' as='a'>Log Out</Menu.Item>
          </>
        )}
        {!loading && !user &&          
          <Menu.Item href='/api/login' as='a'>Log In</Menu.Item>
        }
      </Container>
    </Menu>
  )
}

export default Header