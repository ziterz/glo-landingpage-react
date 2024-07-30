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
  const [isLoading, setIsLoading] = useState(true);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);

  const fetchGames = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get('http://localhost:3000/v1/games');
      setGames(data.games);
      setFilteredGames(data.games);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const filterGames = (platform: string) => {
    let filteredGames = [...games];

    if (platform === 'All') {
      filteredGames = games;
    } else if (platform === 'PC') {
      filteredGames = games.filter((game) =>
        game.platforms.includes('Battle.net')
      );
    } else if (platform === 'Console') {
      filteredGames = games.filter(
        (game) =>
          game.platforms.includes('Xbox') ||
          game.platforms.includes('PlayStation') ||
          game.platforms.includes('NintendoSwitch')
      );
    } else if (platform === 'Mobile') {
      filteredGames = games.filter(
        (game) =>
          game.platforms.includes('AppStore') ||
          game.platforms.includes('GooglePlay')
      );
    }

    setFilteredGames(filteredGames);
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
        {isLoading && (
          <div className="flex justify-center items-center ">
            <span className="text-white text-2xl font-semibold my-32">
              Fetching games...
            </span>
          </div>
        )}
        {games.length >= 0 && !isLoading && (
          <Featured games={filteredGames} filterGames={filterGames} />
        )}

        <Footer />
      </div>
    </>
  );
}

export default App;
