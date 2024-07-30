import Logo from '@/assets/logo.png';

export default function Navbar() {
  return (
    <nav className="w-full h-16 top-0 z-50 sticky">
      <div className="bg-slate-700 backdrop-blur-xl bg-opacity-80 h-16 left-4 right-4 box-border absolute top-4 rounded-lg flex items-center px-5 py-2">
        <img src={Logo} alt="Logo" className="h-10" />
        <ul className="text-white font-bold text-xl">
          <li className="inline-block px-4 py-2 ">
            <a href="#">Warcraft</a>
          </li>
          <li className="inline-block px-4 py-2 ">
            <a href="#">Diablo</a>
          </li>
          <li className="inline-block px-4 py-2 ">
            <a href="#">Overwatch</a>
          </li>
          <li className="inline-block px-4 py-2 ">
            <a href="#">StartCraft</a>
          </li>
          <li className="inline-block px-4 py-2 ">
            <a href="#">Heroes of the Storm</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
