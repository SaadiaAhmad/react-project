import './App.css';
import 'bulma/css/bulma.css';
import PersonalDigitalAssistant from './components/PersonalDigitalAssistants/PersonalDigitalAssistants';
import AnimalsShow from './components/AnimalsShow/AnimalsShow';
import PictureSearchEngine from './components/PictureSearchEngine/PictureSearchEngine';
import ReadingList from './components/ReadingList/ReadingList';
import { BooksProvider } from './context/booksReadingList';
import MultiComponents from './components/MultiComponents/MultiComponents';
import Link from './components/Link/Link';

function App() {
  return (
    <div>
      <Link to={'/application'}>Click Me</Link>
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
