import './App.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  let message = 'Bye there!';
  if(Math.random() > 0.5) message = 'Hello there';

  return (
    <div>
      <h1>Personal Digital Assistants</h1>
      <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage}></ProfileCard>
      <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage}></ProfileCard>
      <ProfileCard title="Siri" handle="@siri01" image={SiriImage}></ProfileCard>
    </div>
  );
}

export default App;
