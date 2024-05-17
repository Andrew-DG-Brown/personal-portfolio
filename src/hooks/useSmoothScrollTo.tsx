function useSmoothScrollTo() {
    
    return (id: string, headroom: number = 0) => {
        const element = document.getElementById(id);
        if (!element) return;
    
        scrollTo({
            top: element.offsetTop + headroom,
            behavior: 'smooth'
        });
    }
}

export default useSmoothScrollTo;