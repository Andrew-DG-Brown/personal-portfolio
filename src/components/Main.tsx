import Experience from './Experience';
import Hero from './Hero';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Projects from './Projects';

export default function Main() {
    return (
        <>
            <Navbar />
            <Hero />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
            <ScrollToTop />
        </>
    )
}