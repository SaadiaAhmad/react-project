import './App.css';
import 'bulma/css/bulma.css';
import PersonalDigitalAssistant from './components/PersonalDigitalAssistants/PersonalDigitalAssistants';
import AnimalsShow from './components/AnimalsShow/AnimalsShow';
import PictureSearchEngine from './components/PictureSearchEngine/PictureSearchEngine';
import ReadingList from './components/ReadingList/ReadingList';
import { BooksProvider } from './context/booksReadingList';
import MultiComponents from './components/MultiComponents/MultiComponents';
import Link from './components/Link/Link';
import Route from './components/Route/Route';

function App() {
  return (
    <div className='app-container'>
      <div className='side-navigation'>
        <Link to={'/'}>Home</Link>
        <Link to={'/personal-digital-assistant'}>Personal Digital Assistant</Link>
        <Link to={'/animals-show'}>Animals Show</Link>
        <Link to={'/picture-search-engine'}>Picture Search Engine</Link>
        <Link to={'/reading-list'}>Reading List</Link>
        <Link to={'/multi-components'}>Multi Components</Link>
      </div>
    
      <div className='main-content'>
        <Route path="/">
          <h1 className='home-text'>Welcome to My React App</h1>
        </Route>
        <Route path="/personal-digital-assistant">
          <PersonalDigitalAssistant></PersonalDigitalAssistant>
        </Route>
        <Route path="/animals-show">
          <AnimalsShow></AnimalsShow>
        </Route>
        <Route path="/picture-search-engine">
          <PictureSearchEngine></PictureSearchEngine>
        </Route>
        <Route path="/reading-list">
          <BooksProvider>
            <ReadingList></ReadingList>
          </BooksProvider>
        </Route>
        <Route path="/multi-components">
          <MultiComponents></MultiComponents>
        </Route>
      </div>
    </div>
  );
}

export default App;
