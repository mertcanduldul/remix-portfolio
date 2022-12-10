import { AiFillInstagram, AiFillLinkedin, AiFillMediumSquare, AiOutlineGithub } from 'react-icons/ai'

export default function Header() {
    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-yellow-50 ">
            <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-6/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                    className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src="/banner.JPG"
                    alt="mert can düldül"
                />
            </div>
            <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <p className="inline-block px-3 py-px mb-4 text-s font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Mert Can Düldül
                    </p>
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        Backend Developer
                        <br className="hidden md:block" />
                        {' '}at{' '}
                        <a className="inline-block text-blue-400 hover:text-orange-400 transition-all duration-300" href="https://www.otokocotomotiv.com.tr/">
                            OTOKOÇ
                        </a>
                    </h2>
                    <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                        I love minimalist details and analog photography. I work with databases and backend, but I also care about frontend and typography.
                    </p>
                    <div className="flex justify-start space-x-8 items-center">
                        <a href="https://github.com/mertcanduldul" target="_blank" rel="noreferrer">
                            <AiOutlineGithub className="h-12 w-12" />
                        </a>
                        <a href="https://www.linkedin.com/in/mert-can-düldül-44077915b/" target="_blank" rel="noreferrer">
                            <AiFillLinkedin className="h-12 w-12" />
                        </a>
                        <a href="https://www.instagram.com/mertcanduldul/" target="_blank" rel="noreferrer">
                            <AiFillInstagram className="h-12 w-12" />
                        </a>
                        <a href="https://mertcanduldul.medium.com" target="_blank" rel="noreferrer">
                            <AiFillMediumSquare className="h-12 w-12" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};
