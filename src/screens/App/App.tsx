import React from 'react';
import { Home } from '../home/home';
import './App.css';
import BackgroundImage from '../../assets/library.jpeg'


export function App() {
  return (
    <div style={{
      backgroundImage: `url(${BackgroundImage})`
    }} className="App" >
      <Home />
    </div>
  );
}