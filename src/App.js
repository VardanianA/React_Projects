import './App.css';
import { useLocation, Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Page1 } from './sections/page1/Page1';
import { Page2 } from './sections/page2/Page2';
import { Page3 } from './sections/page3/Page3';
import { Page4 } from './sections/page4/Page4';
import { Page5 } from './sections/page5/Page5';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      {location.pathname === '/' ?
        (<div>
          <section className='sections'>
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
          </section>
          <Footer />
        </div>)
        :
        <Outlet />
      }
    </div>
  );
}

export default App;
