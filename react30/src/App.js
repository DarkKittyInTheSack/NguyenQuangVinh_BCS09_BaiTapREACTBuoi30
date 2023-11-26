import logo from './logo.svg';
import './App.css';
import Header from './components/BaiTapThucHanhLayout/Header';
import Footer from './components/BaiTapThucHanhLayout/Footer';
import Banner from './components/BaiTapThucHanhLayout/Banner';
import Item from './components/BaiTapThucHanhLayout/Item';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="my-3">
        <Banner/>
        <Item/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
