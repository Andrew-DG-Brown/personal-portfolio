function ProjectDetails() {
    return (
        <>    
                <header className="
                    header
                    bg-transparent
                    absolute
                    top-0
                    left-0
                    z-40
                    w-full
                    flex
                    items-center
                    transition
                ">
                <div className="container">
                <div className="
                        flex mx-[-16px] items-center justify-between relative
                    ">
                    <div className="px-4 w-60 max-w-full">
                    <a href="index.html" className="header-logo w-full block py-6 lg:py-8">
                        <img src="images/logo/logo.svg" alt="logo" className="w-full" />
                    </a>
                    </div>
                    <div className="flex px-4 justify-between items-center w-full">
                    <div>
                        <button id="navbarToggler" name="navbarToggler" aria-label="navbarToggler" className="
                            block
                            absolute
                            right-4
                            top-1/2
                            translate-y-[-50%]
                            lg:hidden
                            focus:ring-2
                            ring-primary px-3 py-[6px] rounded-lg
                            ">
                        <span className="
                                relative
                                w-[30px]
                                h-[2px]
                                my-[6px]
                                block
                                bg-dark
                            "></span>
                        <span className="
                                relative
                                w-[30px]
                                h-[2px]
                                my-[6px]
                                block
                                bg-dark
                            "></span>
                        <span className="
                                relative
                                w-[30px]
                                h-[2px]
                                my-[6px]
                                block
                                bg-dark
                            "></span>
                        </button>
                        <nav id="navbarCollapse" className="
                            absolute py-5
                            lg:py-0 lg:px-4
                            xl:px-6
                            bg-white
                            lg:bg-transparent
                            shadow-lg rounded-lg max-w-[250px] w-full
                            lg:max-w-full lg:w-full
                            right-4 top-full hidden
                            lg:block lg:static lg:shadow-none
                            ">
                        <ul className="blcok lg:flex">
                            <li className="relative group">
                            <a href="/#home" className="
                                    menu-scroll
                                    text-base text-black
                                    group-hover:text-primary
                                    py-2
                                    lg:py-6 lg:inline-flex lg:px-0
                                    flex mx-8
                                    lg:mr-0
                                ">
                                Home
                            </a>
                            </li>
                            <li className="relative group">
                            <a href="/#about" className="
                                    menu-scroll
                                    text-base text-black
                                    group-hover:text-primary
                                    py-2
                                    lg:py-6 lg:inline-flex lg:px-0
                                    flex mx-8
                                    lg:mr-0 lg:ml-8
                                    xl:ml-12
                                ">
                                About
                            </a>
                            </li>
                            <li className="relative group">
                            <a href="/#services" className="
                                    menu-scroll
                                    text-base text-black
                                    group-hover:text-primary
                                    py-2
                                    lg:py-6 lg:inline-flex lg:px-0
                                    flex mx-8
                                    lg:mr-0 lg:ml-8
                                    xl:ml-12
                                ">
                                Services
                            </a>
                            </li>
                            <li className="relative group">
                            <a href="/#pricing" className="
                                    menu-scroll
                                    text-base text-black
                                    group-hover:text-primary
                                    py-2
                                    lg:py-6 lg:inline-flex lg:px-0
                                    flex mx-8
                                    lg:mr-0 lg:ml-8
                                    xl:ml-12
                                ">
                                Pricing
                            </a>
                            </li>
                            <li className="relative group">
                            <a href="/#contact" className="
                                    menu-scroll
                                    text-base text-black
                                    group-hover:text-primary
                                    py-2
                                    lg:py-6 lg:inline-flex lg:px-0
                                    flex mx-8
                                    lg:mr-0 lg:ml-8
                                    xl:ml-12
                                ">
                                Contact
                            </a>
                            </li>
                            <li className="relative group submenu-item">
                            <a  className="
                                    text-base text-black
                                    group-hover:text-primary
                                    py-2
                                    lg:py-6 lg:inline-flex lg:pl-0 lg:pr-4
                                    flex mx-8
                                    lg:mr-0 lg:ml-8
                                    xl:ml-12
                                    relative
                                    after:absolute
                                    after:w-2
                                    after:h-2
                                    after:border-b-2
                                    after:border-r-2
                                    after:border-current
                                    after:rotate-45
                                    lg:after:right-0
                                    after:right-1
                                    after:top-1/2
                                    after:translate-y-[-50%]
                                    after:mt-[-2px]
                                ">
                                Pages
                            </a>
                            <div className="
                                    submenu
                                    hidden relative
                                    lg:absolute
                                    w-[250px] top-full
                                    lg:top-[110%]
                                    left-0 rounded-sm
                                    lg:shadow-lg
                                    p-4
                                    lg:block lg:opacity-0 lg:invisible
                                    group-hover:opacity-100
                                    lg:group-hover:visible lg:group-hover:top-full
                                    bg-white transition-[top] duration-300
                                ">
                                <a href="portfolio-details.html" className="
                                    block text-sm text-black rounded
                                    hover:text-primary
                                    py-[10px] px-4
                                    ">
                                Portfolio Details Page
                                </a>

                                <a href="blog-grids.html" className="
                                    block text-sm text-black rounded
                                    hover:text-primary
                                    py-[10px] px-4
                                    ">
                                Blog Grids Page
                                </a>
                                <a href="blog-details.html" className="
                                    block text-sm text-black rounded
                                    hover:text-primary
                                    py-[10px] px-4
                                    ">
                                Blog Details Page
                                </a>
                            </div>
                            </li>
                        </ul>
                        </nav>
                    </div>
                    <div className="sm:flex justify-end hidden pr-16 lg:pr-0">
                        <a href="#contact" className="
                            text-base
                            font-bold
                            text-white
                            bg-primary
                            rounded-full
                            py-3
                            px-8
                            md:px-9
                            lg:px-8
                            xl:px-9
                            hover:shadow-signUp hover:bg-opacity-90
                            transition ease-in-out duration-300
                            ">
                        Get a Quote
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </header>
            <section className="pt-[150px]">
                <div className="container">
                <div className="pb-[120px] border-b border-[#E9ECF8]">
                    <div className="flex flex-wrap justify-center mx-[-16px]">
                    <div className="w-full lg:w-8/12 px-4">
                        <div>
                        <div className="w-full rounded overflow-hidden mb-10">
                            <img src="images/news/news-details.jpg" alt="image" className="w-full h-full object-cover object-center" />
                        </div>
                        <h2 className="
                                font-bold text-black text-3xl
                                sm:text-4xl
                                leading-tight
                                sm:leading-tight
                                mb-8
                            ">
                            10 amazing sites to download stock photos & digital assets for
                            free
                        </h2>
                        <div className="
                                flex
                                flex-wrap
                                items-center
                                justify-between
                                pb-4
                                mb-10
                                border-b
                                border-[#E9ECF8]
                            ">
                            <div className="flex flex-wrap items-center">
                            <div className="flex items-center mr-10 mb-5">
                                <div className="
                                    max-w-[40px]
                                    w-full
                                    h-[40px]
                                    rounded-full
                                    overflow-hidden
                                    mr-4
                                    ">
                                <img src="images/news/author.png" alt="author" className="w-full" />
                                </div>
                                <div className="w-full">
                                <h4 className="
                                        text-base
                                        font-medium
                                        text-body-color
                                        mb-1
                                    ">
                                    By
                                    <a  className="text-body-color hover:text-primary">
                                    Musharof Chy
                                    </a>
                                </h4>
                                </div>
                            </div>
                            <div className="flex items-center mb-5">
                                <p className="
                                    flex
                                    items-center
                                    text-base
                                    text-body-color
                                    font-medium
                                    mr-5
                                    ">
                                <span className="mr-3">
                                    <svg width="15" height="15" viewBox="0 0 15 15" className="fill-current">
                                    <path
                                        d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                                    <path
                                        d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                                    <path
                                        d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
                                    <path
                                        d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
                                    <path
                                        d="M3.89531 11.1606H3.10666C2.96327 11.1606 2.86768 11.2562 2.86768 11.3996V12.1644C2.86768 12.3078 2.96327 12.4034 3.10666 12.4034H3.89531C4.03871 12.4034 4.1343 12.3078 4.1343 12.1644V11.3996C4.1343 11.2562 4.03871 11.1606 3.89531 11.1606Z" />
                                    <path
                                        d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z" />
                                    <path
                                        d="M8.93828 11.1606H8.14963C8.00624 11.1606 7.91064 11.2562 7.91064 11.3996V12.1644C7.91064 12.3078 8.00624 12.4034 8.14963 12.4034H8.93828C9.08167 12.4034 9.17727 12.3078 9.17727 12.1644V11.3996C9.17727 11.2562 9.08167 11.1606 8.93828 11.1606Z" />
                                    <path
                                        d="M11.4715 11.1606H10.6828C10.5394 11.1606 10.4438 11.2562 10.4438 11.3996V12.1644C10.4438 12.3078 10.5394 12.4034 10.6828 12.4034H11.4715C11.6149 12.4034 11.7105 12.3078 11.7105 12.1644V11.3996C11.7105 11.2562 11.591 11.1606 11.4715 11.1606Z" />
                                    <path
                                        d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z" />
                                    </svg>
                                </span>
                                12 Jan 2024
                                </p>
                                <p className="
                                    flex
                                    items-center
                                    text-base
                                    text-body-color
                                    font-medium
                                    mr-5
                                    ">
                                <span className="mr-3">
                                    <svg width="18" height="13" viewBox="0 0 18 13" className="fill-current">
                                    <path
                                        d="M15.6375 0H1.6875C0.759375 0 0 0.759375 0 1.6875V10.6875C0 11.3062 0.309375 11.8406 0.84375 12.15C1.09687 12.2906 1.40625 12.375 1.6875 12.375C1.96875 12.375 2.25 12.2906 2.53125 12.15L5.00625 10.7156C5.11875 10.6594 5.23125 10.6312 5.34375 10.6312H15.6094C16.5375 10.6312 17.2969 9.87187 17.2969 8.94375V1.6875C17.325 0.759375 16.5656 0 15.6375 0ZM16.3406 8.94375C16.3406 9.3375 16.0312 9.64687 15.6375 9.64687H5.37187C5.09062 9.64687 4.78125 9.73125 4.52812 9.87187L2.05313 11.3063C1.82812 11.4187 1.575 11.4187 1.35 11.3063C1.125 11.1938 1.0125 10.9688 1.0125 10.7156V1.6875C1.0125 1.29375 1.32188 0.984375 1.71563 0.984375H15.6656C16.0594 0.984375 16.3687 1.29375 16.3687 1.6875V8.94375H16.3406Z" />
                                    <path
                                        d="M12.2342 3.375H4.69668C4.41543 3.375 4.19043 3.6 4.19043 3.88125C4.19043 4.1625 4.41543 4.3875 4.69668 4.3875H12.2623C12.5435 4.3875 12.7685 4.1625 12.7685 3.88125C12.7685 3.6 12.5154 3.375 12.2342 3.375Z" />
                                    <path
                                        d="M11.0529 6.55322H4.69668C4.41543 6.55322 4.19043 6.77822 4.19043 7.05947C4.19043 7.34072 4.41543 7.56572 4.69668 7.56572H11.0811C11.3623 7.56572 11.5873 7.34072 11.5873 7.05947C11.5873 6.77822 11.3342 6.55322 11.0529 6.55322Z" />
                                    </svg>
                                </span>
                                50
                                </p>
                                <p className="
                                    flex
                                    items-center
                                    text-base
                                    text-body-color
                                    font-medium
                                    ">
                                <span className="mr-3">
                                    <svg width="20" height="12" viewBox="0 0 20 12" className="fill-current">
                                    <path
                                        d="M10.2559 3.8125C9.03711 3.8125 8.06836 4.8125 8.06836 6C8.06836 7.1875 9.06836 8.1875 10.2559 8.1875C11.4434 8.1875 12.4434 7.1875 12.4434 6C12.4434 4.8125 11.4746 3.8125 10.2559 3.8125ZM10.2559 7.09375C9.66211 7.09375 9.16211 6.59375 9.16211 6C9.16211 5.40625 9.66211 4.90625 10.2559 4.90625C10.8496 4.90625 11.3496 5.40625 11.3496 6C11.3496 6.59375 10.8496 7.09375 10.2559 7.09375Z" />
                                    <path
                                        d="M19.7559 5.625C17.6934 2.375 14.1309 0.4375 10.2559 0.4375C6.38086 0.4375 2.81836 2.375 0.755859 5.625C0.630859 5.84375 0.630859 6.125 0.755859 6.34375C2.81836 9.59375 6.38086 11.5312 10.2559 11.5312C14.1309 11.5312 17.6934 9.59375 19.7559 6.34375C19.9121 6.125 19.9121 5.84375 19.7559 5.625ZM10.2559 10.4375C6.84961 10.4375 3.69336 8.78125 1.81836 5.96875C3.69336 3.1875 6.84961 1.53125 10.2559 1.53125C13.6621 1.53125 16.8184 3.1875 18.6934 5.96875C16.8184 8.78125 13.6621 10.4375 10.2559 10.4375Z" />
                                    </svg>
                                </span>
                                35
                                </p>
                            </div>
                            </div>
                            <div className="mb-5">
                            <span className="
                                    bg-primary
                                    rounded-full
                                    inline-flex
                                    items-center
                                    justify-center
                                    py-2
                                    px-4
                                    font-semibold
                                    text-sm
                                    text-white
                                ">
                                Design
                            </span>
                            </div>
                        </div>
                        <div>
                            <p className="
                                font-medium text-body-color text-base
                                sm:text-lg
                                lg:text-base
                                xl:text-lg
                                sm:leading-relaxed
                                lg:leading-relaxed
                                xl:leading-relaxed
                                leading-relaxed mb-10
                                ">
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat.
                            </p>

                            <p className="
                                font-medium text-body-color text-base
                                sm:text-lg
                                lg:text-base
                                xl:text-lg
                                sm:leading-relaxed
                                lg:leading-relaxed
                                xl:leading-relaxed
                                leading-relaxed mb-8
                                ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Quis enim lobortis scelerisque fermentum. Neque
                            sodales ut etiam sit amet. Ligula ullamcorper
                            <strong className="text-primary"> malesuada </strong> proin
                            libero nunc consequat interdum varius. Quam pellentesque nec
                            nam aliquam sem et tortor consequat. Pellentesque adipiscing
                            commodo elit at imperdiet.
                            </p>
                            <p className="
                                font-medium text-body-color text-base
                                sm:text-lg
                                lg:text-base
                                xl:text-lg
                                sm:leading-relaxed
                                lg:leading-relaxed
                                xl:leading-relaxed
                                leading-relaxed mb-10
                                ">
                            Semper auctor neque vitae tempus quam pellentesque nec.
                            <span className="text-primary underline">
                                Amet dictum sit amet justo
                            </span>
                            donec enim diam. Varius sit amet mattis vulputate enim nulla
                            aliquet porttitor. Odio pellentesque diam volutpat commodo
                            sed.
                            </p>
                            <h3 className="
                                font-bold text-black font-xl
                                sm:text-2xl
                                lg:text-xl
                                xl:text-2xl
                                leading-tight
                                sm:leading-tight
                                lg:leading-tight
                                xl:leading-tight
                                mb-10
                                ">
                            Digital marketplace for Ui/Ux designers.
                            </h3>
                            <p className="
                                font-medium text-body-color text-base
                                sm:text-lg
                                lg:text-base
                                xl:text-lg
                                sm:leading-relaxed
                                lg:leading-relaxed
                                xl:leading-relaxed
                                leading-relaxed mb-10
                                ">
                            consectetur adipiscing elit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            mattis vulputate cupidatat.
                            </p>
                            <ul className="
                                list-disc list-inside text-body-color mb-10
                                ">
                            <li className="
                                    font-medium text-body-color text-base
                                    sm:text-lg
                                    lg:text-base
                                    xl:text-lg
                                    mb-2
                                ">
                                Consectetur adipiscing elit in voluptate velit.
                            </li>
                            <li className="
                                    font-medium text-body-color text-base
                                    sm:text-lg
                                    lg:text-base
                                    xl:text-lg
                                    mb-2
                                ">
                                Mattis vulputate cupidatat.
                            </li>
                            <li className="
                                    font-medium text-body-color text-base
                                    sm:text-lg
                                    lg:text-base
                                    xl:text-lg
                                    mb-2
                                ">
                                Vulputate enim nulla aliquet porttitor odio pellentesque
                            </li>
                            <li className="
                                    font-medium text-body-color text-base
                                    sm:text-lg
                                    lg:text-base
                                    xl:text-lg
                                    mb-2
                                ">
                                Ligula ullamcorper malesuada proin
                            </li>
                            </ul>
                            <div className="
                                rounded-sm overflow-hidden p-8
                                md:p-9
                                lg:p-8
                                xl:p-9
                                bg-primary relative z-10 mb-10
                                ">
                            <p className="
                                    max-w-[660px]
                                    mx-auto
                                    text-center
                                    text-base
                                    text-white
                                    italic
                                    font-medium
                                ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod incididunt utionals labore et dolore magna
                                aliqua. Quis lobortis scelerisque fermentum, The Neque ut
                                etiam sit amet.
                            </p>
                            <span className="absolute left-0 bottom-0 -z-1">
                                <svg width="182" height="160" viewBox="0 0 182 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.2" width="151.758" height="252.328"
                                    transform="matrix(0.691726 0.72216 0.72216 -0.691726 -105.499 95.7517)"
                                    fill="url(#paint0_linear_54:283)" />
                                <defs>
                                    <linearGradient id="paint0_linear_54:283" x1="75.879" y1="0" x2="75.879" y2="252.328"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" />
                                    <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                                </svg>
                            </span>
                            <span className="absolute right-3 top-3 -z-1">
                                <svg width="24" height="35" viewBox="0 0 24 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.8">
                                    <circle cx="12.1319" cy="1.22711" r="1.22711" transform="rotate(90 12.1319 1.22711)"
                                    fill="white" />
                                    <circle cx="22.4396" cy="1.22711" r="1.22711" transform="rotate(90 22.4396 1.22711)"
                                    fill="white" />
                                    <circle cx="1.57886" cy="1.22711" r="1.22711" transform="rotate(90 1.57886 1.22711)"
                                    fill="white" />
                                    <circle cx="12.1319" cy="12.0254" r="1.22711" transform="rotate(90 12.1319 12.0254)"
                                    fill="white" />
                                    <circle cx="22.4396" cy="12.0254" r="1.22711" transform="rotate(90 22.4396 12.0254)"
                                    fill="white" />
                                    <circle cx="1.57886" cy="12.0254" r="1.22711" transform="rotate(90 1.57886 12.0254)"
                                    fill="white" />
                                    <circle cx="12.1319" cy="22.8243" r="1.22711" transform="rotate(90 12.1319 22.8243)"
                                    fill="white" />
                                    <circle cx="22.4396" cy="22.8243" r="1.22711" transform="rotate(90 22.4396 22.8243)"
                                    fill="white" />
                                    <circle cx="1.57886" cy="22.8243" r="1.22711" transform="rotate(90 1.57886 22.8243)"
                                    fill="white" />
                                    <circle cx="12.1319" cy="33.6229" r="1.22711" transform="rotate(90 12.1319 33.6229)"
                                    fill="white" />
                                    <circle cx="22.4396" cy="33.6229" r="1.22711" transform="rotate(90 22.4396 33.6229)"
                                    fill="white" />
                                    <circle cx="1.57886" cy="33.6229" r="1.22711" transform="rotate(90 1.57886 33.6229)"
                                    fill="white" />
                                </g>
                                </svg>
                            </span>
                            </div>
                            <p className="
                                font-medium text-body-color text-base
                                sm:text-lg
                                lg:text-base
                                xl:text-lg
                                sm:leading-relaxed
                                lg:leading-relaxed
                                xl:leading-relaxed
                                leading-relaxed mb-10
                                ">
                            consectetur adipiscing elit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            mattis vulputate cupidatat.
                            </p>
                            <div className="sm:flex items-center justify-between">
                            <div className="mb-5">
                                <h5 className="
                                    font-medium text-body-color text-sm mb-3
                                    ">
                                Popular Tags :
                                </h5>
                                <div className="flex items-center">
                                <a  className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        py-2
                                        px-4
                                        mr-4
                                        rounded-sm
                                        bg-primary
                                        bg-opacity-10
                                        text-body-color
                                        hover:bg-opacity-100 hover:text-white
                                        transition
                                    ">
                                    Design
                                </a>
                                <a  className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        py-2
                                        px-4
                                        mr-4
                                        rounded-sm
                                        bg-primary
                                        bg-opacity-10
                                        text-body-color
                                        hover:bg-opacity-100 hover:text-white
                                        transition
                                    ">
                                    Development
                                </a>
                                <a  className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        py-2
                                        px-4
                                        mr-4
                                        rounded-sm
                                        bg-primary
                                        bg-opacity-10
                                        text-body-color
                                        hover:bg-opacity-100 hover:text-white
                                        transition
                                    ">
                                    Info
                                </a>
                                </div>
                            </div>
                            <div className="mb-5">
                                <h5 className="
                                    font-medium text-body-color text-sm
                                    sm:text-right
                                    mb-3
                                    ">
                                Share this post :
                                </h5>
                                <div className="flex items-center sm:justify-end">
                                <a  className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        w-9
                                        h-9
                                        sm:ml-3
                                        rounded-sm
                                        bg-primary
                                        bg-opacity-10
                                        text-body-color
                                        hover:bg-opacity-100 hover:text-white
                                        transition
                                    ">
                                    <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
                                    <path
                                        d="M14.3442 0H1.12455C0.499798 0 0 0.497491 0 1.11936V14.3029C0 14.8999 0.499798 15.4222 1.12455 15.4222H14.2942C14.919 15.4222 15.4188 14.9247 15.4188 14.3029V1.09448C15.4688 0.497491 14.969 0 14.3442 0ZM4.57316 13.1089H2.29907V5.7709H4.57316V13.1089ZM3.42362 4.75104C2.67392 4.75104 2.09915 4.15405 2.09915 3.43269C2.09915 2.71133 2.69891 2.11434 3.42362 2.11434C4.14833 2.11434 4.74809 2.71133 4.74809 3.43269C4.74809 4.15405 4.19831 4.75104 3.42362 4.75104ZM13.1947 13.1089H10.9206V9.55183C10.9206 8.7061 10.8956 7.58674 9.72108 7.58674C8.52156 7.58674 8.34663 8.53198 8.34663 9.47721V13.1089H6.07255V5.7709H8.29665V6.79076H8.32164C8.64651 6.19377 9.37122 5.59678 10.4958 5.59678C12.8198 5.59678 13.2447 7.08925 13.2447 9.12897V13.1089H13.1947Z" />
                                    </svg>
                                </a>
                                <a  className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        w-9
                                        h-9
                                        ml-3
                                        rounded-sm
                                        bg-primary
                                        bg-opacity-10
                                        text-body-color
                                        hover:bg-opacity-100 hover:text-white
                                        transition
                                    ">
                                    <svg width="18" height="14" viewBox="0 0 18 14" className="fill-current">
                                    <path
                                        d="M15.5524 2.26027L16.625 1.0274C16.9355 0.693493 17.0202 0.436644 17.0484 0.308219C16.2016 0.770548 15.4113 0.924658 14.9032 0.924658H14.7056L14.5927 0.821918C13.9153 0.282534 13.0685 0 12.1653 0C10.1895 0 8.6371 1.48973 8.6371 3.21062C8.6371 3.31336 8.6371 3.46747 8.66532 3.57021L8.75 4.0839L8.15726 4.05822C4.54435 3.95548 1.58065 1.13014 1.10081 0.642123C0.310484 1.92637 0.762097 3.15925 1.24194 3.92979L2.20161 5.36815L0.677419 4.5976C0.705645 5.67637 1.15726 6.52397 2.03226 7.14041L2.79435 7.65411L2.03226 7.93665C2.5121 9.24658 3.58468 9.78596 4.375 9.99144L5.41935 10.2483L4.43145 10.8647C2.85081 11.8921 0.875 11.8151 0 11.738C1.77823 12.8682 3.89516 13.125 5.3629 13.125C6.46371 13.125 7.28226 13.0223 7.47984 12.9452C15.3831 11.25 15.75 4.82877 15.75 3.54452V3.36473L15.9194 3.26199C16.879 2.44007 17.2742 2.00342 17.5 1.74658C17.4153 1.77226 17.3024 1.82363 17.1895 1.84932L15.5524 2.26027Z" />
                                    </svg>
                                </a>
                                <a  className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        w-9
                                        h-9
                                        ml-3
                                        rounded-sm
                                        bg-primary
                                        bg-opacity-10
                                        text-body-color
                                        hover:bg-opacity-100 hover:text-white
                                        transition
                                    ">
                                    <svg width="9" height="18" viewBox="0 0 9 18" className="fill-current">
                                    <path
                                        d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z" />
                                    </svg>
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <footer className="bg-black pt-[100px] pb-12 relative z-10">
                <div className="container">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 lg:w-4/12 px-4">
                    <div className="mb-10">
                        <h2 className="
                            font-bold
                            text-white
                            text-[44px]
                            leading-tight
                            mb-5
                            ">
                        Let's Talk!
                        </h2>
                        <h3 className="
                            font-bold text-white opacity-70 text-2xl mb-2
                            ">
                        Contact Info
                        </h3>
                        <p className="font-medium text-base text-body-color mb-1">
                        closerpage@email.com
                        </p>
                        <p className="font-medium text-base text-body-color mb-1">
                        12 Hilton St, Manchester M1 1JF
                        </p>
                        <p className="font-medium text-base text-body-color mb-1">
                        +44 012 34 5678
                        </p>
                    </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-3/12 px-4">
                    <div className="mb-10">
                        <h3 className="font-semibold text-white text-xl mb-9">
                        What I Do?
                        </h3>
                        <ul>
                        <li>
                            <a  className="
                                inline-block text-base text-body-color mb-3
                                hover:text-primary
                                ">
                            The Studio
                            </a>
                        </li>
                        <li>
                            <a  className="
                                inline-block text-base text-body-color mb-3
                                hover:text-primary
                                ">
                            Sponsoring
                            </a>
                        </li>
                        <li>
                            <a  className="
                                inline-block text-base text-body-color mb-3
                                hover:text-primary
                                ">
                            Newsletter
                            </a>
                        </li>
                        <li>
                            <a  className="
                                inline-block text-base text-body-color mb-3
                                hover:text-primary
                                ">
                            Contact Us
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/12 px-4">
                    <div className="mb-10">
                        <h3 className="font-semibold text-white text-xl mb-9">
                        News
                        </h3>
                        <ul>
                        <li>
                            <a  className="
                                inline-block text-base text-body-color mb-3
                                hover:text-primary
                                ">
                            Hot Stuff
                            </a>
                        </li>
                        <li>
                            <a  className="
                                inline-block text-base text-body-color mb-3
                                hover:text-primary
                                ">
                            Perfect Place
                            </a>
                        </li>
                        <li>
                            <a  className="
                                inline-block text-base text-body-color mb-3
                                hover:text-primary
                                ">
                            Vintage
                            </a>
                        </li>
                        <li>
                            <a  className="
                                inline-block text-base text-body-color mb-3
                                hover:text-primary
                                ">
                            Products
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-3/12 px-4">
                    <div className="mb-10">
                        <h3 className="font-semibold text-white text-xl mb-9">
                        Quick Links
                        </h3>
                        <ul>
                        <li>
                            <a  className="
                                inline-block text-base text-body-color mb-3
                                hover:text-primary
                                ">
                            Style
                            </a>
                        </li>
                        <li>
                            <a  className="
                                inline-block text-base text-body-color mb-3
                                hover:text-primary
                                ">
                            Health
                            </a>
                        </li>
                        <li>
                            <a  className="
                                inline-block text-base text-body-color mb-3
                                hover:text-primary
                                ">
                            Relationship
                            </a>
                        </li>
                        <li>
                            <a  className="
                                inline-block text-base text-body-color mb-3
                                hover:text-primary
                                ">
                            Legal & Privacy
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>

                <div className="
                        mt-10 pt-12 border-t border-white border-opacity-10
                    ">
                    <div className="flex items-center justify-center mb-5">
                    <a  className="
                            flex
                            items-center
                            justify-center
                            w-8
                            h-8
                            founded-full
                            mx-2
                            text-body-color
                            hover:text-primary
                        " aria-label="social-link">
                        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M32 16C32 7.1625 24.8375 0 16 0C7.1625 0 0 7.1625 0 16C0 24.8375 7.1625 32 16 32C16.0938 32 16.1875 32 16.2812 31.9937V19.5438H12.8438V15.5375H16.2812V12.5875C16.2812 9.16875 18.3688 7.30625 21.4188 7.30625C22.8813 7.30625 24.1375 7.4125 24.5 7.4625V11.0375H22.4C20.7437 11.0375 20.4188 11.825 20.4188 12.9812V15.5312H24.3875L23.8687 19.5375H20.4188V31.3813C27.1063 29.4625 32 23.3062 32 16Z" />
                        </svg>
                    </a>
                    <a className="
                            flex
                            items-center
                            justify-center
                            w-8
                            h-8
                            founded-full
                            mx-2
                            text-body-color
                            hover:text-primary
                        " aria-label="social-link">
                        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current">
                        <path
                            d="M19.0625 16C19.0625 17.6914 17.6914 19.0625 16 19.0625C14.3086 19.0625 12.9375 17.6914 12.9375 16C12.9375 14.3086 14.3086 12.9375 16 12.9375C17.6914 12.9375 19.0625 14.3086 19.0625 16Z" />
                        <path
                            d="M23.1621 10.5813C23.0149 10.1824 22.78 9.82129 22.4749 9.5249C22.1785 9.21973 21.8176 8.98486 21.4185 8.83765C21.0947 8.71191 20.6084 8.56226 19.7126 8.52148C18.7437 8.47729 18.4531 8.46777 16 8.46777C13.5466 8.46777 13.2561 8.47705 12.2874 8.52124C11.3916 8.56226 10.905 8.71191 10.5815 8.83765C10.1824 8.98486 9.82129 9.21973 9.52515 9.5249C9.21997 9.82129 8.98511 10.1821 8.83765 10.5813C8.71191 10.905 8.56226 11.3916 8.52148 12.2874C8.47729 13.2561 8.46777 13.5466 8.46777 16C8.46777 18.4531 8.47729 18.7437 8.52148 19.7126C8.56226 20.6084 8.71191 21.0947 8.83765 21.4185C8.98511 21.8176 9.21973 22.1785 9.5249 22.4749C9.82129 22.78 10.1821 23.0149 10.5813 23.1621C10.905 23.2881 11.3916 23.4377 12.2874 23.4785C13.2561 23.5227 13.5464 23.532 15.9998 23.532C18.4534 23.532 18.7439 23.5227 19.7124 23.4785C20.6082 23.4377 21.0947 23.2881 21.4185 23.1621C22.2197 22.853 22.853 22.2197 23.1621 21.4185C23.2878 21.0947 23.4375 20.6084 23.4785 19.7126C23.5227 18.7437 23.532 18.4531 23.532 16C23.532 13.5466 23.5227 13.2561 23.4785 12.2874C23.4377 11.3916 23.2881 10.905 23.1621 10.5813ZM16 20.7175C13.3943 20.7175 11.282 18.6055 11.282 15.9998C11.282 13.394 13.3943 11.282 16 11.282C18.6055 11.282 20.7178 13.394 20.7178 15.9998C20.7178 18.6055 18.6055 20.7175 16 20.7175ZM20.9043 12.198C20.2954 12.198 19.8018 11.7043 19.8018 11.0955C19.8018 10.4866 20.2954 9.99292 20.9043 9.99292C21.5132 9.99292 22.0068 10.4866 22.0068 11.0955C22.0066 11.7043 21.5132 12.198 20.9043 12.198Z" />
                        <path
                            d="M16 0C7.16479 0 0 7.16479 0 16C0 24.8352 7.16479 32 16 32C24.8352 32 32 24.8352 32 16C32 7.16479 24.8352 0 16 0ZM25.1321 19.7878C25.0876 20.7659 24.9321 21.4336 24.7051 22.0181C24.2278 23.2522 23.2522 24.2278 22.0181 24.7051C21.4338 24.9321 20.7659 25.0874 19.7881 25.1321C18.8083 25.1768 18.4954 25.1875 16.0002 25.1875C13.5049 25.1875 13.1921 25.1768 12.2122 25.1321C11.2344 25.0874 10.5664 24.9321 9.98218 24.7051C9.3689 24.4744 8.81372 24.1128 8.35474 23.6453C7.88745 23.1865 7.52588 22.6311 7.29517 22.0181C7.06812 21.4338 6.9126 20.7659 6.86816 19.7881C6.823 18.8081 6.8125 18.4951 6.8125 16C6.8125 13.5049 6.823 13.1919 6.86792 12.2122C6.91235 11.2341 7.06763 10.5664 7.29468 9.98193C7.52539 9.3689 7.88721 8.81348 8.35474 8.35474C8.81348 7.88721 9.3689 7.52563 9.98193 7.29492C10.5664 7.06787 11.2341 6.9126 12.2122 6.86792C13.1919 6.82324 13.5049 6.8125 16 6.8125C18.4951 6.8125 18.8081 6.82324 19.7878 6.86816C20.7659 6.9126 21.4336 7.06787 22.0181 7.29468C22.6311 7.52539 23.1865 7.88721 23.6455 8.35474C24.1128 8.81372 24.4746 9.3689 24.7051 9.98193C24.9324 10.5664 25.0876 11.2341 25.1323 12.2122C25.177 13.1919 25.1875 13.5049 25.1875 16C25.1875 18.4951 25.177 18.8081 25.1321 19.7878Z" />
                        </svg>
                    </a>
                    <a  className="
                            flex
                            items-center
                            justify-center
                            w-8
                            h-8
                            founded-full
                            mx-2
                            text-body-color
                            hover:text-primary
                        " aria-label="social-link">
                        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current">
                        <path
                            d="M16 0C7.16479 0 0 7.16479 0 16C0 24.8352 7.16479 32 16 32C24.8352 32 32 24.8352 32 16C32 7.16479 24.8352 0 16 0ZM23.3054 12.4751C23.3125 12.6326 23.3159 12.7908 23.3159 12.9497C23.3159 17.8025 19.6221 23.3984 12.8669 23.3987H12.8672H12.8669C10.793 23.3987 8.86304 22.7908 7.23779 21.749C7.52515 21.783 7.81763 21.7998 8.11377 21.7998C9.83447 21.7998 11.418 21.2129 12.675 20.2278C11.0674 20.198 9.71191 19.1362 9.24414 17.677C9.46802 17.72 9.69824 17.7434 9.93433 17.7434C10.2695 17.7434 10.5942 17.6982 10.9028 17.614C9.22241 17.2776 7.95654 15.7925 7.95654 14.0142C7.95654 13.9976 7.95654 13.9827 7.95703 13.9673C8.4519 14.2424 9.01782 14.408 9.62036 14.4265C8.63428 13.7686 7.98608 12.6438 7.98608 11.3696C7.98608 10.6968 8.16797 10.0664 8.4834 9.52368C10.2944 11.7458 13.001 13.2073 16.0532 13.3608C15.9902 13.0918 15.9578 12.8115 15.9578 12.5234C15.9578 10.4961 17.6025 8.85132 19.6306 8.85132C20.687 8.85132 21.6411 9.29785 22.3113 10.0117C23.1479 9.84668 23.9336 9.54102 24.6433 9.12036C24.3687 9.97754 23.7866 10.6968 23.0283 11.1516C23.7712 11.0627 24.4792 10.8657 25.1372 10.5732C24.6458 11.3098 24.0225 11.9568 23.3054 12.4751Z" />
                        </svg>
                    </a>
                    <a  className="
                            flex
                            items-center
                            justify-center
                            w-8
                            h-8
                            founded-full
                            mx-2
                            text-body-color
                            hover:text-primary
                        " aria-label="social-link">
                        <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current">
                        <path
                            d="M16 0C7.16479 0 0 7.16479 0 16C0 24.8352 7.16479 32 16 32C24.8352 32 32 24.8352 32 16C32 7.16479 24.8352 0 16 0ZM11.3506 24.1875H7.45386V12.4641H11.3506V24.1875ZM9.40234 10.8633H9.37695C8.06934 10.8633 7.22363 9.96313 7.22363 8.83813C7.22363 7.68774 8.09521 6.8125 9.42822 6.8125C10.7612 6.8125 11.5815 7.68774 11.6069 8.83813C11.6069 9.96313 10.7612 10.8633 9.40234 10.8633ZM25.4014 24.1875H21.5051V17.9158C21.5051 16.3396 20.9409 15.2646 19.531 15.2646C18.4546 15.2646 17.8135 15.9897 17.5317 16.6897C17.4287 16.9402 17.4036 17.2903 17.4036 17.6406V24.1875H13.5071C13.5071 24.1875 13.5581 13.564 13.5071 12.4641H17.4036V14.124C17.9214 13.3252 18.8479 12.189 20.9153 12.189C23.479 12.189 25.4014 13.8645 25.4014 17.4653V24.1875Z" />
                        </svg>
                    </a>
                    </div>
                    <p className="
                        font-medium text-base text-body-color text-center
                        ">
                    All rights reserved by © Portfolio creative 2024
                    </p>
                </div>
                </div>

                <div className="absolute left-0 bottom-0 -z-1" aria-label="shape">
                <span className="hidden">shape</span>
                <svg width="143" height="138" viewBox="0 0 143 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="118" r="101" stroke="url(#paint0_linear_52:83)" stroke-width="34" />
                    <defs>
                    <linearGradient id="paint0_linear_52:83" x1="-12.7969" y1="-37.3359" x2="99.2109" y2="173.773"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4A6CF7" />
                        <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
                    </linearGradient>
                    </defs>
                </svg>
                </div>
                <div className="absolute right-3 top-3 -z-1" aria-label="shape">
                <span className="hidden">shape</span>
                <svg width="61" height="77" viewBox="0 0 61 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                    <circle cx="45.0001" cy="1.66667" r="1.66667" transform="rotate(90 45.0001 1.66667)" fill="white" />
                    <circle cx="16.0001" cy="1.66667" r="1.66667" transform="rotate(90 16.0001 1.66667)" fill="white" />
                    <circle cx="59.0001" cy="1.66667" r="1.66667" transform="rotate(90 59.0001 1.66667)" fill="white" />
                    <circle cx="30.6668" cy="1.66667" r="1.66667" transform="rotate(90 30.6668 1.66667)" fill="white" />
                    <circle cx="1.66683" cy="1.66667" r="1.66667" transform="rotate(90 1.66683 1.66667)" fill="white" />
                    <circle cx="45.0001" cy="16.3332" r="1.66667" transform="rotate(90 45.0001 16.3332)" fill="white" />
                    <circle cx="16.0001" cy="16.3332" r="1.66667" transform="rotate(90 16.0001 16.3332)" fill="white" />
                    <circle cx="59.0001" cy="16.3332" r="1.66667" transform="rotate(90 59.0001 16.3332)" fill="white" />
                    <circle cx="30.6668" cy="16.3332" r="1.66667" transform="rotate(90 30.6668 16.3332)" fill="white" />
                    <circle cx="1.66683" cy="16.3332" r="1.66667" transform="rotate(90 1.66683 16.3332)" fill="white" />
                    <circle cx="45.0001" cy="31.0002" r="1.66667" transform="rotate(90 45.0001 31.0002)" fill="white" />
                    <circle cx="45.0001" cy="74.6667" r="1.66667" transform="rotate(90 45.0001 74.6667)" fill="white" />
                    <circle cx="16.0001" cy="31.0002" r="1.66667" transform="rotate(90 16.0001 31.0002)" fill="white" />
                    <circle cx="16.0001" cy="74.6667" r="1.66667" transform="rotate(90 16.0001 74.6667)" fill="white" />
                    <circle cx="59.0001" cy="31.0002" r="1.66667" transform="rotate(90 59.0001 31.0002)" fill="white" />
                    <circle cx="59.0001" cy="74.6667" r="1.66667" transform="rotate(90 59.0001 74.6667)" fill="white" />
                    <circle cx="30.6668" cy="31.0002" r="1.66667" transform="rotate(90 30.6668 31.0002)" fill="white" />
                    <circle cx="30.6668" cy="74.6667" r="1.66667" transform="rotate(90 30.6668 74.6667)" fill="white" />
                    <circle cx="1.66683" cy="31.0002" r="1.66667" transform="rotate(90 1.66683 31.0002)" fill="white" />
                    <circle cx="1.66683" cy="74.6667" r="1.66667" transform="rotate(90 1.66683 74.6667)" fill="white" />
                    <circle cx="45.0001" cy="45.6667" r="1.66667" transform="rotate(90 45.0001 45.6667)" fill="white" />
                    <circle cx="16.0001" cy="45.6667" r="1.66667" transform="rotate(90 16.0001 45.6667)" fill="white" />
                    <circle cx="59.0001" cy="45.6667" r="1.66667" transform="rotate(90 59.0001 45.6667)" fill="white" />
                    <circle cx="30.6668" cy="45.6667" r="1.66667" transform="rotate(90 30.6668 45.6667)" fill="white" />
                    <circle cx="1.66683" cy="45.6667" r="1.66667" transform="rotate(90 1.66683 45.6667)" fill="white" />
                    <circle cx="45.0001" cy="60.3332" r="1.66667" transform="rotate(90 45.0001 60.3332)" fill="white" />
                    <circle cx="16.0001" cy="60.3332" r="1.66667" transform="rotate(90 16.0001 60.3332)" fill="white" />
                    <circle cx="59.0001" cy="60.3332" r="1.66667" transform="rotate(90 59.0001 60.3332)" fill="white" />
                    <circle cx="30.6668" cy="60.3332" r="1.66667" transform="rotate(90 30.6668 60.3332)" fill="white" />
                    <circle cx="1.66683" cy="60.3332" r="1.66667" transform="rotate(90 1.66683 60.3332)" fill="white" />
                    </g>
                </svg>
                </div>
            </footer>
        </>
    );
}

export default ProjectDetails;