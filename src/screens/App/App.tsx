import React from 'react';
import { Home } from '../home/home';
import './App.css';
import BackgroundImage from '../../assets/library.jpeg'
import { Routes } from '../../router/routers.router';
import { Login } from '../Auth/login/login';
import { SingIn } from '../Auth/singin/singin';


export function App() {
  return (
    <div style={{
      backgroundImage: `url(${BackgroundImage})`
    }} className="App" >
      <Routes />
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <SingIn /> */}
    </div>
  );
}