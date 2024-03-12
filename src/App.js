import './App.css';
import 'bulma/css/bulma.css';
import PersonalDigitalAssistant from './components/PersonalDigitalAssistants/PersonalDigitalAssistants';
import AnimalsShow from './components/AnimalsShow/AnimalsShow';
import PictureSearchEngine from './components/PictureSearchEngine/PictureSearchEngine';
import ReadingList from './components/ReadingList/ReadingList';
import { BooksProvider } from './context/booksReadingList';

function App() {
  return (
    <div>
      <PersonalDigitalAssistant></PersonalDigitalAssistant>
      <AnimalsShow></AnimalsShow>
      <PictureSearchEngine></PictureSearchEngine>
      <BooksProvider>
        <ReadingList></ReadingList>
      </BooksProvider>
    </div>
  );
}

export default App;
