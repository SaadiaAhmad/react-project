// 1. Import the React and ReactDom Libraries
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { NavigationProvider } from './context/navigation';

// 2. Get a reference to the div with Id root
const el = document.getElementById('root');

// 3. Tell React to take control of that element and create a root
const root = ReactDOM.createRoot(el);

// 4. Create a component
// Not here, we will use the App.js component

// 5. Show the component on the screen
root.render(
    <NavigationProvider>
        <App></App>
    </NavigationProvider>
);