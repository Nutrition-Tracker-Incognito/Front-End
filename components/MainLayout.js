import Header from './Header'
import Footer from './Footer'
import { Container } from 'semantic-ui-react'


const Layout = props => {
  return (
    <>
      <Header {...props}/>
        <Container style={{ marginTop: '8em', height: '55vh' }}>
          {props.children}
        </Container>
      <Footer />
    </>
  )
}

export default Layout