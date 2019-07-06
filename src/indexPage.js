import React from 'react';
import Navbar from './Navbar.js';
import {Link  } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default  () =>(
    <div>
    <Navbar /> 
        <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                         <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                         <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                         <img src="https://images.unsplash.com/photo-1508612761958-e931d843bdd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"  className="d-block w-100" alt="..." />
                        </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"  className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src='https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80' className="d-block w-100" alt='...' />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            </div>
            <h1 className='heading'>Get latest news from various news channels.</h1>
    <div>
    <div className='btn-row'>
    
      <Link to="/one"><Button className="btn btn-dark btn-lg"><img className='brand-img' src='https://icon-locator.herokuapp.com/lettericons/B-120-3091b8.png' alt='BBC-NEWS'/>BBC News</Button></Link>

      <Link to="/times-of-india"><Button className="btn btn-dark btn-lg" ><img className='brand-img' src='https://icon-locator.herokuapp.com/lettericons/I-120-000000.png' alt='TOI' />The Times of India</Button></Link>

      <Link to="/fox-news"><Button className="btn btn-dark btn-lg" ><img className='brand-img' src='https://static.foxnews.com/static/orion/styles/img/fox-news/favicons/apple-touch-icon-120x120.png' alt='FOX-NEWS' />Fox News</Button></Link>

      <Link to="/google-news"><Button className="btn btn-dark btn-lg" ><img className='brand-img' src='https://icon-locator.herokuapp.com/lettericons/G-120-4285f4.png' alt='google-news' />Google News</Button></Link>

      <Link to="./techcrunch"><Button className="btn btn-dark btn-lg"><img className='brand-img' src='https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=180' alt='TECH_CRUNCH' />TechCrunch</Button></Link>

    </div>  
    </div> 
    <footer>
                <p className='footer'>© Copyright 2019</p>
              </footer>
              </div>
)