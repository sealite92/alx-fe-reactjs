export default function HomePage({ title, summary, image }) {
  return (
    <div className="flex bg-red-400 w-full mb-5 shadow-sm rounded-lg overflow-hidden">
      <div
        className="w-5/12 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="w-7/12 p-4">
        <h1 className="text-red-700 font-bold text-xl">{title}</h1>
        <p className="text-gray-800">{summary}</p>
      </div>
    </div>
  );
}
