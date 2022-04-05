import { MdWeb } from 'react-icons/md'
import { HiCode, HiDatabase } from 'react-icons/hi'
import { SiMaterialdesignicons } from 'react-icons/si'
export const Feature = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row">
                <div className="max-w-xl pr-16 mx-auto mb-10">
                    <h5 className="mb-6 text-3xl font-extrabold leading-none">
                        The quick, brown fox jumps over a lazy dog
                    </h5>
                    <p className="mb-6 text-gray-900">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut unde
                        omnis iste natus.
                    </p>
                    <div className="flex items-center">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide bg-indigo-50 text-blue-400 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            Review My Project's
                        </button>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
                <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <MdWeb className="w-8 h-8 text-blue-400" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Front-End Developer</h6>
                        <p className="text-sm text-gray-700">
                            A flower in my garden, a mystery in my panties. Heart attack never
                            stopped old Big Bear. I didn't even know we were calling him Big
                            Bear.
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <HiCode className="w-8 h-8 text-blue-400" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Back-End Developer</h6>
                        <p className="text-sm text-gray-700">
                            Rough pomfret lemon shark plownose chimaera southern sandfish
                            kokanee northern sea robin Antarctic cod. Yellow-and-black
                            triplefin.
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <HiDatabase className="w-8 h-8 text-blue-400" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">T-SQL Administrator</h6>
                        <p className="text-sm text-gray-700">
                            A slice of heaven. O for awesome, this chocka full cuzzie is as
                            rip-off as a cracker. Meanwhile, in behind the bicycle shed,
                            Hercules.
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <SiMaterialdesignicons className="w-8 h-8 text-blue-400" />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Software Design Architecture</h6>
                        <p className="text-sm text-gray-700">
                            Disrupt inspire and think tank, social entrepreneur but
                            preliminary thinking think tank compelling. Inspiring, invest
                            synergy capacity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};