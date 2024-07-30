import '@/App.css';
import Background from '@/assets/background.webp';
import Slider from '@/components/Slider';
import Navbar from '@/components/Navbar';
import Featured from '@/components/Featured';

function App() {
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
        <Featured />
      </section>
    </>
  );
}

export default App;
