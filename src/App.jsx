import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './Main/Main';
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <>
   <Header></Header>
   <Main></Main>
   <Footer></Footer>
   </>
  );
}

export default App;
