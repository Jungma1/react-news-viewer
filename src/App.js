import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=e54e52a9729542a189d67f24a16fda87'
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <NewsList />
  );
}

export default App;
