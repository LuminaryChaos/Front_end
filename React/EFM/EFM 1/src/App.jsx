import Data from "./data";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 p-8 shadow-lg">
        EFF (front-end)
      </h1>
      <div className="container mx-auto px-4">
        <Data />
      </div>
    </div>
  );
}

export default App;