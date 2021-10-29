import { QueryClient, QueryClientProvider } from 'react-query';
import { APIProvider } from '../../api/APIProvider';
import BackgroundImage from '../../assets/library.jpeg';
import { UserProvider } from '../../provider/userProvider';
import { Routes } from '../../router/routers.router';
import './App.css';

export function App() {
  const queryClient = new QueryClient()
  return (
    <div style={{
      backgroundImage: `url(${BackgroundImage})`
    }} className="App" >
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <APIProvider>
            <Routes />
          </APIProvider>
        </UserProvider>
      </QueryClientProvider>
    </div>
  );
}