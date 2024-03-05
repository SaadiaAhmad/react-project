import './App.css';
import 'bulma/css/bulma.css';
import PersonalDigitalAssistant from './components/PersonalDigitalAssistants/PersonalDigitalAssistants';
import AnimalsShow from './components/AnimalsShow/AnimalsShow';
import PictureSearchEngine from './components/PictureSearchEngine/PictureSearchEngine';
import ReadingList from './components/ReadingList/ReadingList';

function App() {
  return (
    <div>
      <PersonalDigitalAssistant></PersonalDigitalAssistant>
      <AnimalsShow></AnimalsShow>
      <PictureSearchEngine></PictureSearchEngine>
      <ReadingList></ReadingList>
    </div>
  );
}

export default App;
