import logo from './logo.svg';
import './App.css';
import ProfileCard from './ProfileCard';

function App() {
  let message = 'Bye there!';
  if(Math.random() > 0.5) message = 'Hello there';

  return (
    <div>
      <h1>Personal Digital Assistants</h1>
      <ProfileCard title="Alexa" handle="alexa99"></ProfileCard>
      <ProfileCard title="Cortana" handle="cortana32"></ProfileCard>
      <ProfileCard title="Siri" handle="siri01"></ProfileCard>
    </div>
  );
}

export default App;
