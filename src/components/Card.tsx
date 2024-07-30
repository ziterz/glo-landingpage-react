import BattleNet from '@/assets/svg/battlenet.svg';
import Xbox from '@/assets/svg/xbox.svg';
import PlayStation from '@/assets/svg/playstation.svg';
import Steam from '@/assets/svg/steam.svg';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
import Game from '@/types/game.type';

export default function Card({ game }: { game: Game }) {
  const [hover, setHover] = useState(false);
  const [play, setPlay] = useState(false);

  const transition =
    'transition ease-in-out delay-0 -translate-y-1 scale-110 duration-300';

  useEffect(() => {
    if (hover) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  }, [hover]);
  return (
    <a
      href="#"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={hover ? transition : ''} style={{ position: 'relative' }}>
        <picture className="relative left-0 top-0 z-50">
          <source srcSet={game?.posterLogo} />
          <img src={game?.posterLogo} alt="Poster" />
        </picture>
        {hover ? (
          <ReactPlayer
            className="absolute left-0 top-0 z-30 inline-block object-cover w-100 h-100 object-center"
            width=""
            height=""
            url={game?.video}
            loop
            playing={play}
            config={{
              file: {
                attributes: {
                  style: {
                    borderRadius: '6px',
                  },
                },
              },
            }}
          />
        ) : (
          <picture className="absolute left-0 top-0 w-100 h-100 z-40">
            <source srcSet={game?.poster} />
            <img
              src={game?.poster}
              alt="Game Poster"
              className="rounded-md aspect-3/4 inline-block object-cover relative w-100"
            />
          </picture>
        )}
      </div>
      <h4 className="text-xl font-semibold mt-4">{game?.title}</h4>
      <span className="uppercase font-semibold text-sm text-slate-400">
        {game?.genre}
      </span>
      <div className="flex gap-1 mt-2">
        {game?.platforms.filter((platform) => platform === 'Battle.net')
          .length > 0 && (
          <img src={BattleNet} alt="Battle.net" className="h-6 w-6 mr-2" />
        )}
        {game?.platforms.filter((platform) => platform === 'Xbox').length >
          0 && <img src={Xbox} alt="Xbox" className="h-6 w-6 mr-2 " />}
        {game?.platforms.filter((platform) => platform === 'PlayStation')
          .length > 0 && (
          <img src={PlayStation} alt="PlayStation" className="h-6 w-6 mr-2 " />
        )}
        {game?.platforms.filter((platform) => platform === 'Steam').length >
          0 && <img src={Steam} alt="Steam" className="h-6 w-6 mr-2 " />}
      </div>
    </a>
  );
}
