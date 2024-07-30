import Background from '@/assets/background.webp';
import Slider from '@/components/Slider';
import Navbar from '@/components/Navbar';
import Featured from '@/components/Featured';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Game from '@/types/game.type';
import Footer from '@/components/Footer';

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
      <div
        className="relative inset-0 overflow-hidden"
        style={{ background: `url(${Background})` }}
      >
        <Slider />
        <Featured games={games} />
        <Footer />
      </div>
    </>
  );
}

export default App;
