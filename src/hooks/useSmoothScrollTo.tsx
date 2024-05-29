function useSmoothScrollTo() {
    
    return (id: string, headroom: number = 0, behavior: 'smooth' | 'instant' = 'smooth') => {
        const element = document.getElementById(id);
        if (!element) return;
    
        scrollTo({
            top: element.offsetTop + headroom, behavior
        });
    }
}

export default useSmoothScrollTo;