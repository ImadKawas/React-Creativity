
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Card  } from 'semantic-ui-react';
import arsa from './images/elliot.jpg';
// import CardRow1 from './CardRow';
import './App.css';
import Nav from 'react-bootstrap/Nav';
// import modal from './modal'
import nav123 from './nav'
import pag from './components/pagination'
import acc from './components/accordian'
import form from './components/form'
import { Carousel } from 'bootstrap';
// import Button from '@mui/material/Button';
import carousel123 from './components/carousel'
import textare123 from './components/areatext'


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
          header={nav123}></Card>



      </div>
      <div className='card-container'>
        <Card
          meta={carousel123}></Card>
      </div>

      <div className='Areatext'>
        <Card
          meta={textare123}></Card>
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


       <h1>{textare123}</h1>

      </div>

      <div className='footer'>
     


      </div>



    </div>
  );
}




export default App;
