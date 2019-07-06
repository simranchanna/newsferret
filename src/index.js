import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import One from './one.js';
import TimesOfIndia from './times-of-india.js';
import FoxNews from './fox-news.js';
import GoogleNews from './google-news.js';
import TechCrunch from './techcrunch.js';

import IndexPage from './indexPage';
import './App.css';
import { Route,  BrowserRouter  } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

const routing = (
    <BrowserRouter>
    <div>
    <Route path="/" exact component={IndexPage}/>
    <Route path='/one' exact component={One} />
    <Route path='/times-of-india' exact component={TimesOfIndia} />
    <Route path='/fox-news' exact component={FoxNews} />
    <Route path='/google-news' exact component={GoogleNews} />
    <Route path='/techcrunch' exact component={TechCrunch} />
    </div>
        
  
     
  </BrowserRouter>

)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();


