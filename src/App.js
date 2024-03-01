import './App.css';
import 'bulma/css/bulma.css';
import PersonalDigitalAssistant from './components/PersonalDigitalAssistants/PersonalDigitalAssistants';
import AnimalsShow from './components/AnimalsShow/AnimalsShow';
import PictureSearchEngine from './components/PictureSearchEngine/PictureSearchEngine'

function App() {
  return (
    <div>
      <PersonalDigitalAssistant></PersonalDigitalAssistant>
      <AnimalsShow></AnimalsShow>
      <PictureSearchEngine></PictureSearchEngine>
    </div>
  );
}

export default App;
