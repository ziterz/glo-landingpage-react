import Logo from '@/assets/logo.png';

export default function Navbar() {
  return (
    <nav className="w-100 z-50 sticky top-0">
      <div className="bg-slate-800 backdrop-blur-xl bg-opacity-80 h-16 left-4 right-4 box-border absolute top-4 rounded-lg flex items-center justify-between">
        <div className="flex text-xl font-semibold items-center">
          <img src={Logo} alt="GameLevelOne" className="h-10 pl-3 pr-2" />
          <div className="uppercase text-2xl">
            Game<span className="text-red-500">Level</span>One
          </div>
        </div>
        <ul className="text-white font-bold text-lg pr-3">
          <li className="inline-block">
            <a
              href="#"
              className="px-5 py-3 hover:rounded-md hover:bg-slate-700 hover:bg-opacity-50 transtiion-all duration-100"
            >
              Warcraft
            </a>
          </li>
          <li className="inline-block">
            <a
              href="#"
              className="px-5 py-3 hover:rounded-md hover:bg-slate-700 hover:bg-opacity-50 transtiion-all duration-100"
            >
              Diablo
            </a>
          </li>
          <li className="inline-block">
            <a
              href="#"
              className="px-5 py-3 hover:rounded-md hover:bg-slate-700 hover:bg-opacity-50 transtiion-all duration-100"
            >
              Overwatch
            </a>
          </li>
          <li className="inline-block">
            <a
              href="#"
              className="px-5 py-3 hover:rounded-md hover:bg-slate-700 hover:bg-opacity-50 transtiion-all duration-100"
            >
              StartCraft
            </a>
          </li>
          <li className="inline-block">
            <a
              href="https://glogames.biz/direct/samplehighstack"
              className="px-5 py-3 ml-5 rounded-md bg-black hover:bg-slate-900"
            >
              Try our games
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
