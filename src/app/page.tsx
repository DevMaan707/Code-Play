export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <h1 className="text-4xl">Lets Educate</h1>
      <h1 className="text-4xl">While Enjoying</h1>
      <div className="flex gap-6">
        <button className="bg-yellow-500 p-2 rounded text-black">
          contact us
        </button>
        <button className="bg-yellow-500 p-2 rounded text-black">
          play now
        </button>
      </div>
    </div>
  );
}
