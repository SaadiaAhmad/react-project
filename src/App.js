import './App.css';
import 'bulma/css/bulma.css';
import PersonalDigitalAssistant from './components/PersonalDigitalAssistants/PersonalDigitalAssistants';
import AnimalsShow from './components/AnimalsShow/AnimalsShow';
import PictureSearchEngine from './components/PictureSearchEngine/PictureSearchEngine';
import ReadingList from './components/ReadingList/ReadingList';
import { BooksProvider } from './context/booksReadingList';
import MultiComponents from './components/MultiComponents/MultiComponents';

function App() {
  return (
    <div>
      <PersonalDigitalAssistant></PersonalDigitalAssistant>
      <AnimalsShow></AnimalsShow>
      <PictureSearchEngine></PictureSearchEngine>
      <BooksProvider>
        <ReadingList></ReadingList>
      </BooksProvider>
      <MultiComponents></MultiComponents>
    </div>
  );
}

export default App;
