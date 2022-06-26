import './LandingPage.css'

function LandingPage(props) {
    return (
        <section className='landing-page-container d-flex flex-column justify-content-center'>
            <h1 className='hi-statement'>Hi, my name is Julian.</h1>
            <h2 className='im-statement'>I'm a Software Engineer</h2>
            <p className='i-have-statement'>I have a fous in font-end development and I am currently based in Las Vegas, Nevada.</p>
        </section>
    );
}

export default LandingPage;