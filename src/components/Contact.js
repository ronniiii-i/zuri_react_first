import Input from './Parts/Input'
import Textarea from './Parts/Textarea'

function Contact() {
    return (
        <section>
            <form>
                <div className="header">
                    <h2>Contact Me</h2>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </div>
                <div className="row flex justify-between align-center full-width">
                    <div className="input-block">
                        <Input
                            text='First name'
                            name='first_name'
                            type='text'
                            placeholder='Enter your first name'
                            value=''
                        />
                    </div>
                    <div className="input-block">
                        <Input
                            text='Last name'
                            name='last_name'
                            type='text'
                            placeholder='Enter your last name'
                            value=''
                        />
                    </div>
                </div>
                <div className="row flex justify-between align-center full-width">
                    <div className="input-block email">
                        <Input
                            text='Email'
                            name='email'
                            type='text'
                            placeholder='yourname@email.com'
                            value=''
                        />
                    </div>
                </div>
                <div className="row flex justify-between align-center full-width">
                    <div className="input-block message">
                        <Textarea
                            text='Message'
                            name='message'
                            placeholder="Send me a message and I'll reply you as soon as possible..."
                        />
                    </div>
                </div>
                <div className="row flex justify-center align-center full-width">
                    <input type="checkbox" id="agree" />
                    <p>You agree to providing your data to Roni who may contact you</p>
                </div>
                <div className="row flex justify-between align-center full-width">
                    <div className="input-block button">
                        <button id='btn__submit'>Send message</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Contact
