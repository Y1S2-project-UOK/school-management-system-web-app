import  NavBar  from "./components/NavBar";
import ResultsPage from "./pages/ResultsPage";


function App() {
  return (
<div className="gradient-bg-welcome min-h-screen">
  <NavBar />
  <div className="pt-12 flex justify-center items-center h-screen">
 <ResultsPage/>
  </div>
</div>

  );
}

export default App;
