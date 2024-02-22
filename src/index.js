// 1. Import the React and ReactDom Libraries
import ReactDOM from 'react-dom/client';

// 2. Get a reference to the div with Id root
const el = document.getElementById('root');

// 3. Tell React to take control of that element and create a root
const root = ReactDOM.createRoot(el);

// 4. Create a component
function App() {
  let message = 'Bye there!';
  if(Math.random() > 0.5) message = 'Hello there';

  return (
    <div>
      <h1>{message} at {new Date().toLocaleTimeString()}</h1>
      <input type="number" min={3} placeholder="hi there" />
      <textarea autoFocus={true}></textarea>
    </div>
  );
}

// 5. Show the component on the screen
root.render(<App></App>);