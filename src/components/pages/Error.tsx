import { Link } from '@tanstack/react-router';
import { COLORS } from '../../config/constants';
import ColoredCard from '../ColoredCard';

function ErrorPage() {

    return (
        <main className='min-h-[60vh] flex flex-col justify-center items-center pt-32'>
            <ColoredCard color={COLORS.ERROR}>
                <div className='mx-20 sm:mx-32 flex flex-col justify-center items-center'>
                    <h2 className='font-bold text-2xl md:text-[40px] leading-tight mb-10'>
                        Looks like you're lost
                    </h2>
                    <Link to='/' style={{ color: COLORS.ERROR }} className="bg-white max-w-fit rounded-full font-semibold text-base py-4 sm:py-[10px] px-5 w-full sm:w-auto">
                        Home
                    </Link>
                </div>
            </ColoredCard>
        </main>
    );
}

export default ErrorPage;