
import './App.css';
import { AuthContextProvider } from './components/context/AuthContext';
import Header from './components/Layout/Header';

function App() {
  return (
    <AuthContextProvider>
      <Header />
    </AuthContextProvider>
  );
}

export default App;
