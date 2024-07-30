import BattleNet from '@/assets/svg/battlenet.svg';
import Xbox from '@/assets/svg/xbox.svg';
import PlayStation from '@/assets/svg/playstation.svg';
import Steam from '@/assets/svg/steam.svg';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';

export default function Card() {
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
          <source srcSet="https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt73d7c39a43451baf/66660e01418a08296a1ef807/DIV_X1_logo_EN.png?format=webply&quality=80&auto=webp" />
          <img
            src="https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt73d7c39a43451baf/66660e01418a08296a1ef807/DIV_X1_logo_EN.png?format=webply&quality=80&auto=webp"
            alt="Poster"
          />
        </picture>
        {hover ? (
          <ReactPlayer
            className="absolute left-0 top-0 z-30 inline-block object-cover w-100 h-100 object-center"
            width=""
            height=""
            url="https://blz-contentstack-assets.akamaized.net/v3/assets/blta8f9a8e092360c6c/blteb6e50a22d978a93/6642a2a3afde859e8c84a45d/D4_DesktopAppS4_600x800_30.webm"
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
            <source srcSet="https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/bltf34c631cd1c8dbf7/66660dd2e039601ffb609aa0/Diablo_D4_X1_600x800.jpg?format=webply&quality=80&auto=webp" />
            <img
              src="https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/bltf34c631cd1c8dbf7/66660dd2e039601ffb609aa0/Diablo_D4_X1_600x800.jpg?format=webply&quality=80&auto=webp"
              alt="Poster"
              className="rounded-md aspect-3/4 inline-block object-cover relative w-100"
            />
          </picture>
        )}
      </div>
      <h4 className="text-xl font-semibold mt-4">
        Diablo IV: Vessel of Hatred
      </h4>
      <span className="uppercase font-semibold text-sm text-slate-400">
        Action RPG
      </span>
      <div className="flex gap-1 mt-2">
        <img src={BattleNet} alt="BattleNet" className="h-6 w-6 mr-2 " />
        <img src={Xbox} alt="BattleNet" className="h-6 w-6 mr-2 " />
        <img src={PlayStation} alt="BattleNet" className="h-6 w-6 mr-2 " />
        <img src={Steam} alt="BattleNet" className="h-6 w-6 mr-2 " />
      </div>
    </a>
  );
}
