import ColoredCard from '../ColoredCard';

function SubmitEmail() {
    return (
        <ColoredCard>
            <div className="max-w-[770px] mx-auto px-6">
                <h2 className="font-bold text-2xl md:text-[40px] leading-tight mb-10"
                >
                Reach out to me!
                </h2>
                <form className="relative max-w-[480px] mx-auto">
                    <input type="email" placeholder="Enter your email" className="w-full rounded-full border border-white border-opacity-[13%] bg-white bg-opacity-[15%] px-8 py-4 placeholder-white placeholder-opacity-70 outline-none focus-visible:shadow-none focus:border-opacity-100 transition text-center sm:text-left mb-5 sm:mb-0"
                    />
                    <button className="bg-white text-primary rounded-full font-semibold text-base py-4 sm:py-[10px] px-5 w-full sm:w-auto sm:absolute right-2 top-2"
                    >
                        Send
                    </button>
                </form>
            </div>
        </ColoredCard>
    );
}

export default SubmitEmail;