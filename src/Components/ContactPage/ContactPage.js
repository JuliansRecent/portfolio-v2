import './ContactPage.css';
import { useForm, ValidationError } from '@formspree/react';

function ContactPage(props) {
	const [state, handleSubmit] = useForm('mbjwvrww');
	if (state.succeeded) {
		return <p>Thank you, I will get back to you ASAP!</p>;
	}
	return (
		<section className='contact-page-container container-fluid d-flex flex-column justify-content-center' id='contact'>
			<h2 className='contact-title pb-4'>Contact</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor='email'>Email</label>
				<input id='email' type='email' name='email' className='mb-2'
                placeholder='Your Email'/>
				<ValidationError prefix='Email' field='email' errors={state.errors} />
				<label htmlFor='message'>Message</label>
				<textarea id='message' name='message' className='mb-1' placeholder='Your message here'/>
				<ValidationError
					prefix='Message'
					field='message'
					errors={state.errors}
				/>
				<button type='submit' disabled={state.submitting} className='btn'>
					Submit
				</button>
			</form>
		</section>
	);
}

export default ContactPage;
