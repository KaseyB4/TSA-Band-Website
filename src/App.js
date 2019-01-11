import React, { Component } from 'react';
import band from './band.png';
import './App.css';
import Play from './play.png';
import ProductOne from './productone.png';
import ProductTwo from './producttwo.png';
import ProductThree from './productthree.png';
import Popup from "reactjs-popup";
import { HashRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom'

const App = () => (
      <div className="App">
      <img src={band} className="band" alt="band" />
        <header className="App-header">
          <h1 className="App-title">Bartch Trees</h1>
          <p className="App-intro"> #1 Rock Band in the Country</p>
        </header>


        <h2>LATEST HITS</h2>

      <Popup trigger={<div className="songone">
        <img className="play" src={Play}/>
        <h3>The Middle</h3>
        </div>} position="bottom center" on="hover">
      <div>
        <br/>
        <a href="https://open.spotify.com/artist/2tKdnNrll3phfqxSva3qdj" target="_black"><img className="spotify" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png"/></a>
        <br/>
        <img className="apple" src="https://cdn.dribbble.com/users/124355/screenshots/2129607/itunes.png"/>
      </div>
      </Popup>

      
      <Popup trigger={<div className="songtwo">
        <img className="play" src={Play}/>
        <h3>Flexbit</h3>
        </div>} position="bottom center" on="hover">
      <div>
      <br/>
        <a href="https://open.spotify.com/artist/2tKdnNrll3phfqxSva3qdj" target="_black"><img className="spotify" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png"/></a>
        <br/>
        <img className="apple" src="https://cdn.dribbble.com/users/124355/screenshots/2129607/itunes.png"/>
      </div>
      </Popup>
      
        <h2>NEWS</h2>
      <div className="blog">
      <ul>
  <li>We Have a Facebook Page.</li>
  <p>By Mark Bruckert on Nov. 13th</p>
  <li>New Album on Spotify.</li>
  <p>By Kasey Bartholemew on Dec. 19th</p>
  <li>We Have new Tour Dates.</li>
  <p>By Timothy Sheehan on Jan. 5th</p>
</ul>
      </div>

      <h2>SHOP</h2>

      <div className="productone">
        <img src={ProductOne} className="product"/>
        <h4>Bartch Trees Shirt</h4>
      </div>

       <div className="producttwo">
        <img src={ProductTwo} className="product"/>
        <h4>Bartch Trees Hat</h4>
      </div>

       <div className="productthree">
        <img src={ProductThree} className="productimagethree"/>
        <h4>Bartch Trees Shirt</h4>
      </div>
      
      <div className="footer">
        <h5>&copy; Copyright Bartch Trees</h5>
      </div>

      </div>
    );

    const Blog = () => (
      <div className="App">
      <h1>Hello!</h1>
      </div>
    );

const BasicExample = () => (
  <HashRouter>
    <Route exact path="/" component={App}/>
    <Route path="/blog" component={Blog}/>
  </HashRouter>
);

export default App;