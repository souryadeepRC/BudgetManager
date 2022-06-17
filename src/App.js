import './App.css';
import { AuthContextProvider } from './context/AuthContext'; 
import Header from './components/Layout/Header/Header';
import PageRoute from './Routes/PageRoute';
//import Spinner from './components/Generic/Spinner/Spinner';
function App() {
  return (
    <AuthContextProvider>
      <Header />
       
      <PageRoute/>
    </AuthContextProvider>
  );
}

export default App;
