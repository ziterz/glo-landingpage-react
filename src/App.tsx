import '@/App.css';
import Background from '@/assets/background.webp';
import Slider from '@/components/Slider';
import Navbar from '@/components/Navbar';
import Featured from '@/components/Featured';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Game from '@/types/game.type';

function App() {
  const [games, setGames] = useState<Game[]>([]);

  const fetchGames = async () => {
    const { data } = await axios.get('http://localhost:3000/v1/games');
    setGames(data.games);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <>
      <Navbar />
      <section className="absolute top-0 left-0 right-0 h-100 w-100">
        <img
          src={Background}
          alt=""
          className="absolute top-0 left-0 right-0 h-100 w-100"
        />
        <Slider />
        <Featured games={games} />
      </section>
    </>
  );
}

export default App;
