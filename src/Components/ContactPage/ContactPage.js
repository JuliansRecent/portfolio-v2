import './ContactPage.css'
import { useForm, ValidationError } from '@formspree/react';

function ContactPage(props) {
    const [state, handleSubmit] = useForm('mbjwvrww');
		if (state.succeeded) {
			return <p>Thanks for joining!</p>;
		}
    return (
        <section className='contact-page-container container-fluid d-flex flex-column justify-content-center'>
			<h2 className='skills-title pb-4'>Contact</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">
            Email Address
        </label>
        <input
            id="email"
            type="email" 
            name="email"
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        <textarea
            id="message"
            name="message"
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
            Submit
        </button>
        </form>
        </section>
    );
}

export default ContactPage;