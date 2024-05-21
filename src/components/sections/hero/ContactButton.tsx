import { EMAIL_LINK } from '../../../config/constants';

function ContactButton() {
    
    return (
        <a
            href={EMAIL_LINK}
            className={`bg-black py-4 px-10 lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-white text-basehover:bg-opacity-90 font-normal rounded-lg`}
        >
            Contact
        </a>
    );
}

export default ContactButton;