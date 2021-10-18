import BackgroundImage from '../../assets/library.jpeg';
import './App.css';
import { Home } from '../home/home';
import { Login } from '../Auth/login/login';
import { SingIn } from '../Auth/singin/singin';
import { Routes } from '../../router/routers.router';
import { APIProvider } from '../../api/APIProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

export function App() {
  const queryClient = new QueryClient()
  return (
    <div style={{
      backgroundImage: `url(${BackgroundImage})`
    }} className="App" >
      <QueryClientProvider client={queryClient}>
        <APIProvider>
          {/* <Routes /> */}
          {/* <Home /> */}
          {/* <Login /> */}
          <SingIn />
        </APIProvider>

      </QueryClientProvider>
    </div>
  );
}