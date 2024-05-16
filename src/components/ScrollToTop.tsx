import useScrolledFromTop from '../hooks/useScrolledFromTop';

function ScrollToTop() {

    const scrolled = useScrolledFromTop()
    if (!scrolled) return null;
    
    return (
        <button onClick={() => scrollTo({ top: 0, behavior: 'smooth'})}
        className="flex items-center justify-center bg-primary text-white w-10 h-10 rounded-md fixed bottom-8 right-8 left-auto z-[999] hover:shadow-signUp transition duration-300"
            >
            <span
                className="w-3 h-3 border-t border-l border-white rotate-45 mt-[6px]"
            ></span>
        </button>
    );
}

export default ScrollToTop;