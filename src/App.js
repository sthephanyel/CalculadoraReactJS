import ProjectCalculeta from "./componets/calculadora";
import { FunctionClicks } from "./context/FunctionsClick";
function App() {

  return (
    <FunctionClicks.Provider value={''}>
    <div className='container'>
      <ProjectCalculeta></ProjectCalculeta>
    </div>
    </FunctionClicks.Provider>
  );
}

export default App;
