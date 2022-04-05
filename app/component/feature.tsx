import { MdWeb } from 'react-icons/md'
import { HiCode, HiDatabase } from 'react-icons/hi'
import { SiMaterialdesignicons } from 'react-icons/si'
export const Feature = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row">
                <div className="max-w-xl pr-16 mx-auto mb-10">
                    <h5 className="mb-6 text-3xl font-extrabold leading-none">
                        Every day I try to learn new undiscovered
                    </h5>
                    <p className="mb-6 text-gray-900">
                        Any programming language can solve anything, but it is necessary to use the appropriate one, so every day I try to learn new undiscovered.
                    </p>
                    <div className="flex items-center">
                        <a
                            href="https://github.com/mduldul"
                            className="inline-flex items-center justify-center h-12 lg:px-6 p-1 mr-6 font-medium tracking-wide bg-blue-500 text-blue-50 transition duration-200 rounded shadow-md  hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                        >
                            Review My Project's
                        </a>
                        <a
                            href="mailto:mertcanduldul@gmail.com"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-blue-800"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
                <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full transition-all duration-200 bg-indigo-50 hover:bg-blue-500 hover:-translate-y-1">
                            <MdWeb className="w-16 h-16 text-blue-400 hover:text-blue-50 p-4" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Front-End Developer</h6>
                        <p className="text-sm text-gray-700">
                            I am a front-end developer, I have experience in HTML, CSS, JavaScript, React, Redux, Node.js, Express.js, MongoDB, MySQL, and more.
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full transition-all duration-200 bg-indigo-50 hover:bg-blue-500 hover:-translate-y-1">
                            <HiCode className="w-16 h-16 text-blue-400 hover:text-blue-50 p-4" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Back-End Developer</h6>
                        <p className="text-sm text-gray-700">
                            I am a back-end developer, I have experience in .NET, .NET CORE, NodeJS, Express.js and more.
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full transition-all duration-200 bg-indigo-50 hover:bg-blue-500 hover:-translate-y-1">
                            <HiDatabase className="w-16 h-16 text-blue-400 hover:text-blue-50 p-4" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">SQL Administrator</h6>
                        <p className="text-sm text-gray-700">
                            I am a SQL administrator, I have experience in MSSQL, MYSQL, NOSQL and more.
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full transition-all duration-200 bg-indigo-50 hover:bg-blue-500 hover:-translate-y-1">
                            <SiMaterialdesignicons className="w-16 h-16 text-blue-400 hover:text-blue-50 p-4" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Software Design Architecture</h6>
                        <p className="text-sm text-gray-700">
                            I am a software design architect, I have experience in Software Design Architecture Pattern.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};