export default function Profile({ params }: any) {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-2 text-center">
        Hello!
        <span className="bg-orange-600 p-2 m-2 rounded-xl">{params.id}</span>
      </h1>
      <h1 className="text-2xl font-bold mb-2 text-center">
        Welcome to Profiel
      </h1>
    </div>
  );
}
