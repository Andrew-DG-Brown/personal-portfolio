function Blog() {
    return (
        <section id="news" className="pt-[120px] pb-20 bg-[#f8f9ff]">
        <div className="container">
            <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full px-4">
                <div
                className="max-w-[600px] mx-auto text-center mb-[50px]"
                >
                <span
                    className="font-semibold text-lg text-primary block mb-2"
                >
                    BLOG
                </span>
                <h2
                    className="font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5"
                >
                    Latest Blogs
                </h2>
                <p className="font-medium text-lg text-body-color">
                    There are many variations of passages of Lorem Ipsum available
                    but the majority have suffered alteration in some form.
                </p>
                </div>
            </div>
            </div>
            <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 xl:w-1/3 px-4">
                <div
                className="bg-white rounded-xl overflow-hidden mb-10 shadow-blog"
                >
                <a href="blog-details.html" className="block">
                    <img
                    src="/images/news/news-1.jpg"
                    alt="image"
                    className="w-full"
                    />
                </a>
                <div className="py-8 px-6 sm:px-11">
                    <h3>
                    <a
                        href="blog-details.html"
                        className="font-semibold text-xl text-black hover:text-primary block mb-3 truncate"
                    >
                        UI/UX Design Trend 2024
                    </a>
                    </h3>
                    <p
                    className="font-medium text-body-color text-base mb-4"
                    >
                    Automate your Business for more results, Creating Business
                    that.
                    </p>
                    <a
                    href="blog-details.html"
                    className="font-medium text-sm text-black underline hover:text-primary hover:no-underline"
                    >
                    Read More
                    </a>
                </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/3 px-4">
                <div
                className="bg-white rounded-xl overflow-hidden mb-10 shadow-blog"
                >
                <a href="blog-details.html" className="block">
                    <img
                    src="/images/news/news-2.jpg"
                    alt="image"
                    className="w-full"
                    />
                </a>
                <div className="py-8 px-6 sm:px-11">
                    <h3>
                    <a
                        href="blog-details.html"
                        className="font-semibold text-xl text-black hover:text-primary block mb-3 truncate"
                    >
                        Tips for Graphics Design
                    </a>
                    </h3>
                    <p
                    className="font-medium text-body-color text-base mb-4"
                    >
                    Automate your Business for more results, Creating Business
                    that.
                    </p>
                    <a
                    href="blog-details.html"
                    className="font-medium text-sm text-black underline hover:text-primary hover:no-underline"
                    >
                    Read More
                    </a>
                </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/3 px-4">
                <div
                className="bg-white rounded-xl overflow-hidden mb-10 shadow-blog"
                >
                <a href="blog-details.html" className="block">
                    <img
                    src="/images/news/news-3.jpg"
                    alt="image"
                    className="w-full"
                    />
                </a>
                <div className="py-8 px-6 sm:px-11">
                    <h3>
                    <a
                        href="blog-details.html"
                        className="font-semibold text-xl text-black hover:text-primary block mb-3 truncate"
                    >
                        Creative Web Design
                    </a>
                    </h3>
                    <p
                    className="font-medium text-body-color text-base mb-4"
                    >
                    Automate your Business for more results, Creating Business
                    that.
                    </p>
                    <a
                    href="blog-details.html"
                    className="font-medium text-sm text-black underline hover:text-primary hover:no-underline"
                    >
                    Read More
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}

export default Blog;