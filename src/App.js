import './App.css';
import AppHeader from './Component/Header';
import AppFooter from './Component/Footer';
import PageContent from './Component/PageContent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <PageContent />
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
