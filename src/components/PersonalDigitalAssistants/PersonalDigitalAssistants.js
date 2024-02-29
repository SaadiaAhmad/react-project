import AlexaImage from '../../images/digital_assistant/alexa.png';
import CortanaImage from '../../images/digital_assistant/cortana.png';
import SiriImage from '../../images/digital_assistant/siri.png';
import ProfileCard from './ProfileCard';

function PersonalDigitalAssistants() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                <p className='title'> Personal Digital Assistants</p>
                </div>
            </section>

            <div className="container">
                <div className='section'>
                <div className='columns'>
                    <div className='column is-3'>
                    <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} description="Alexa was created by Amazon"></ProfileCard>
                    </div>
                    <div className='column is-3'>
                    <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} description="Cortana was created by Microsoft"></ProfileCard>
                    </div>
                    <div className='column is-3'>
                    <ProfileCard title="Siri" handle="@siri01" image={SiriImage} description="Siri was made by Apple"></ProfileCard>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalDigitalAssistants;