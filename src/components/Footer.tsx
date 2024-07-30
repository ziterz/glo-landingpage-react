import Logo from '@/assets/logo.png';

export default function Footer() {
  return (
    <section className="container mx-auto relative mb-16">
      <img
        src="https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/bltb1b55d28d4835ac9/64c007d6a4648b44a076cd13/Desktop.jpg?format=webply&quality=80&auto=webp"
        alt="Background"
        className="rounded-3xl"
      />
      <div className="absolute top-0 left-0 w-full">
        <div className="flex flex-col justify-center w-1/2 my-12 lg:my-24 ml-2 lg:ml-16 text-center">
          <img src={Logo} alt="Logo" className="w-12 lg:w-32 mx-auto" />
          <h1 className="text-2xl lg:text-4xl font-semibold mt-4 uppercase">
            Game<span className="text-red-500">Level</span>One
          </h1>
          <span className="text-xl font-semibold mt-5 hidden lg:block">
            GLO is a digital-based technology company that focuses on branding,
            promotion and advertising using the games method. <br />
            <br />
            We develop games, provide gamification solutions to clients through
            gamification systems, in-games advertising.
          </span>
        </div>
      </div>
      <div className="text-center mt-12">
        <span>Game Level One &copy; 2024 All Rights Reserved</span>
      </div>
    </section>
  );
}
