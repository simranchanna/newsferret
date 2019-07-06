import React,{Component} from 'react'
import { Card,CardDeck } from 'react-bootstrap'
import './App.css'

class TimesOfIndia extends Component{
    constructor(properties){
        super(properties);
        this.state = {
          articles:[]
        }
      }
      componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=d2e0631056324fcbad6ee8d0c3f665ac')
        .then((response) => {
            return response.json();
        })  
       
      .then((myJson) => {
        this.setState({
          articles: myJson.articles
        });
      });
      } 
    render(){
        return(
            <div className='App'>
            {this.state.articles.map((item,index)=>{
              return(
                     <div>
                            <CardDeck>
                            <div class='col-lg-3'></div>
                              <div class='col-lg-6'>
                              <Card border="secondary" className='cards'>
                                <Card.Img className='cards-img' variant="top" src={item.urlToImage} />
                                <Card.Body>
                                  <Card.Title>{item.title}</Card.Title>
                                  <br />
                                  <Card.Text>{item.description}</Card.Text>
                                </Card.Body>
                              </Card>
                              </div>
                              <div class='col-lg-3'></div>
                            </CardDeck>               
                     </div>
                )
            })}
            </div>
        ) 
    }
}

export default TimesOfIndia