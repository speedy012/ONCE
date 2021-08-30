import './App.css';
import './index.css'

import Footer from './components/Footer'
import Header from './components/Header';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContainer />
      <Footer/>
    </div>
  );
}

export default App;
