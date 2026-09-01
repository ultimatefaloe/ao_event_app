import GreetingCard from "./components/GreetingCard";

function App() {

  const name = "John Doe";


  return (
    <div className="flex justify-center items-center h-screen">
      <GreetingCard name={name} message="Welcome to my new first react app" />
    </div>
  );
}

export default App;
