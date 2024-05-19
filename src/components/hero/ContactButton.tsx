import useSmoothScrollTo from '../../hooks/useSmoothScrollTo';

function ContactButton() {
    const scrollTo = useSmoothScrollTo()
    
    return (
        <button
            onClick={() => scrollTo('contact')}
            className={`bg-black py-4 px-10 lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-white text-basehover:bg-opacity-90 font-normal rounded-lg`}
        >
            Contact
        </button>
    );
}

export default ContactButton;