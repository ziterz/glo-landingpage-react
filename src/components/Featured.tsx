import Card from '@/components/Card';

export default function Featured() {
  return (
    <div className="container mx-auto relative">
      <div className="flex justify-between items-center pt-12">
        <h2 className="text-4xl uppercase font-semibold">Featured Games</h2>
        <ul className="flex gap-3">
          <li>
            <a
              href="#"
              className="px-5 py-1.5 rounded-full bg-white bg-opacity-15 uppercase text-md font-semibold hover:bg-opacity-25"
            >
              PC
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-5 py-1.5 rounded-full bg-white bg-opacity-15 uppercase text-md font-semibold hover:bg-opacity-25"
            >
              Console
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-5 py-1.5 rounded-full bg-white bg-opacity-15 uppercase text-md font-semibold hover:bg-opacity-25"
            >
              Mobile
            </a>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-5 gap-8 mt-12">
        {Array.from({ length: 1 }).map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
}
