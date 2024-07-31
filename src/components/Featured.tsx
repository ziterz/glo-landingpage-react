import Card from '@/components/Card';
import Game from '@/types/game.type';
import Button from './Button';

export default function Featured({
  games,
  filterGames,
}: {
  games: Game[];
  filterGames: (platform: string) => void;
}) {
  return (
    <div className="container mx-auto relative box-content overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center pt-12">
        <h2 className="text-4xl uppercase font-semibold">Featured Games</h2>
        <ul className="flex gap-3 mt-5 md:mt-0">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                filterGames('All');
              }}
              className="px-5 py-1.5 rounded-full bg-white bg-opacity-15 uppercase text-md font-semibold hover:bg-opacity-25 focus:bg-blue-500"
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                filterGames('PC');
              }}
              className="px-5 py-1.5 rounded-full bg-white bg-opacity-15 uppercase text-md font-semibold hover:bg-opacity-25 focus:bg-blue-500"
            >
              PC
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                filterGames('Console');
              }}
              className="px-5 py-1.5 rounded-full bg-white bg-opacity-15 uppercase text-md font-semibold hover:bg-opacity-25 focus:bg-blue-500"
            >
              Console
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                filterGames('Mobile');
              }}
              className="px-5 py-1.5 rounded-full bg-white bg-opacity-15 uppercase text-md font-semibold hover:bg-opacity-25 focus:bg-blue-500"
            >
              Mobile
            </a>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-12 mx-4 lg:mx-0">
        {games.map((game) => (
          <Card key={game._id} game={game} />
        ))}
      </div>
      <div className="mx-auto text-center my-20">
        <Button />
      </div>
    </div>
  );
}
