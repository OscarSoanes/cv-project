import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="page h-full">
      <h1 className="text-center text-3xl font-medium tw mt-3">CV Builder</h1>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
