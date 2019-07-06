import React,{Component} from 'react';
import './App.css';
import Navbar from './Navbar';
import Carousel from './Carousel.js';
import Header from './Header.js';
import Maincontent from './mainContent.js'
import Sources from './bbc-news.js'


class App extends Component{ 
        render(){
          return(
            <div>
                <Navbar /> 
                <div>
                  <Carousel />
                </div>
                <div>
                  <Header />
                </div>
                <Maincontent />
                <Sources />
              <footer>
                <p className='footer'>© Copyright 2019</p>
              </footer>
            </div>
          )
        }
}        
export default App ;
