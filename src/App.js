import './App.css';
import 'bulma/css/bulma.css';
import PersonalDigitalAssistant from './components/PersonalDigitalAssistants/PersonalDigitalAssistants';
import AnimalsShow from './components/AnimalsShow/AnimalsShow';
import PictureSearchEngine from './components/PictureSearchEngine/PictureSearchEngine';
import ReadingList from './components/ReadingList/ReadingList';
import { BooksProvider } from './context/booksReadingList';
import MultiComponents from './components/MultiComponents/MultiComponents';

import Route from './components/Route/Route';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='app-container'>
      <Sidebar></Sidebar>
    
      <div className='main-content'>
        <Route path="/">
          <section className='hero is-primary'>
              <div className='hero-body'>
                <p className='title'>Welcome to My React App</p>
              </div>
            </section>
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
