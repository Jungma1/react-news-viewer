import './App.css';
import { Route } from 'react-router';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <>
      <Route path='/:category?' component={NewsPage} />
    </>
  );
}

export default App;
