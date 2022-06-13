
import './App.css'; 
import { AuthContextProvider } from './components/context/AuthContext';
import Header from './components/Layout/header';

function App() {
  console.log('App LOADED')
  return (
    <AuthContextProvider>
        <Header />
    </AuthContextProvider>
  );
}

export default App;
