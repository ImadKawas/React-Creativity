import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Card, Header } from 'semantic-ui-react';
import arsa from './images/elliot.jpg';
// import CardRow1 from './CardRow';
import './App.css';
import Nav from 'react-bootstrap/Nav';
// import modal from './modal'
import nav123 from './nav'
import pag from './components/pagination'


const extra = (
  <p>
    <Icon name='user' />
    16 Friends
  </p>
)


function App() {
  return (

    
    <div className="App">
       
      <div className='nav22'>
      <Card
          meta={nav123}></Card>
         
        {/* <Card
          description={CardRow1}></Card> */}
      </div>


      <header className="App-header">
      <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
     
    </Nav>
        <Header size='huge'>React Creativity</Header>
        <Card
          image={arsa}
          header='Elliot Baker'
          meta={'Friend'}
          description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
          extra={extra}

        />

        
        <div>
        </div>
      </header>


      <div className='footer'>
      <Card
          meta={pag}></Card>
         
        {/* <Card
          description={CardRow1}></Card> */}

      </div>

    </div>
  );
}




export default App;
