import React from 'react';
import BackgroundImage from '../../assets/library.jpeg';
import './App.css';
import { Home } from '../home/home';
import { Login } from '../Auth/login/login';
import { SingIn } from '../Auth/singin/singin';
import { Routes } from '../../router/routers.router';


export function App() {
  return (
    <div style={{
      backgroundImage: `url(${BackgroundImage})`
    }} className="App" >
      <Routes />
      {/* <Home />
      <Login />
      <SingIn /> */}
    </div>
  );
}