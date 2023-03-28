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
import acc from './components/accordian'
import form from './components/form'
// import Button from '@mui/material/Button';


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
         
       
      </div>

      <div className='App-header'>
  <div className='card-container'>
    <Card
      image={arsa}
      header='Elliot Baker'
      meta={'Friend'}
      description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
      extra={extra}
    />
    <Card
      image={arsa}
      header='John Doe'
      meta={'Colleague'}
      description='John is a software developer who loves coding and playing video games in his free time.'
      extra={extra}
    />
     <Card
      image={arsa}
      header='John Doe'
      meta={'Colleague'}
      description='John is a software developer who loves coding and playing video games in his free time.'
      extra={extra}
    />
    
  </div>
</div>
      <div className='accordian' style={{ 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}}>


<Card
          meta={form}></Card>
          
      </div>

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
