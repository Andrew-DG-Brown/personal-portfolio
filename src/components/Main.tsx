import Experience from './Experience';
import Hero from './Hero';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';
// import Blog from './archive/Blog';

export default function Main() {
    return (
        <>
            <Navbar />
            <Hero />
            <Experience />
            {/* <Blog /> */}
            <Contact />
            <Footer />
        </>
    )
}