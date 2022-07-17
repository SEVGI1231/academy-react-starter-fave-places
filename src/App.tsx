import { greet } from "./utils/greet";
import "./App.css"  
import "./components/AppHeader";
import AppHeader from "./components/AppHeader";
import MainContent from "./components/MainContent";

function App(): JSX.Element {

  return (
    <>
      <AppHeader />
      <MainContent />
    
    </>
  )
}

export default App;
