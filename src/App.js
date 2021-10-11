
import './App.css';
import Profilepicture from "./components/Profile/ProfilePhoto";
import Name from "./components/Profile/FullName";
import Adress from "./components/Profile/Adress";

function App() {
  return (
    <div className="App">
      <Profilepicture/>
      <Name/>
      <Adress/>
    </div>
  );
}

export default App;
