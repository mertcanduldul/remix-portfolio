import * as Icons from 'react-icons/di'
import { IRepository } from '~/interface/IRepository'

const handleIcon = (item: any) => {
    switch (item.language) {
        case 'Javascript': return <Icons.DiJavascript className="w-6 h-6" />

        case 'Java': return <Icons.DiJava className="w-6 h-6" />

        case 'Python': return <Icons.DiPython className="w-6 h-6" />

        case 'Typescript': return <Icons.DiJavascript className="w-6 h-6" />

        case 'CSS': return <Icons.DiCss3 className="w-6 h-6" />

        case 'EJS': return <Icons.DiJavascript className="w-6 h-6" />

        case 'HTML': return <Icons.DiHtml5 className="w-6 h-6" />

        case 'PHP': return <Icons.DiPhp className="w-6 h-6" />

        default: return <Icons.DiJavascript className="w-6 h-6" />
    }
}

export default function Project({ data }: { data: IRepository[] }) {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-6 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">My Projects</h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">I share the open sources of the projects I have developed with you.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {
                        data.map((item, index) => (
                            <div className="xl:w-1/3 md:w-1/2 sm:p-4 p-0" key={index}>

                                <div className="border border-gray-200 p-6 rounded-lg min-h-full">
                                    <div className="inline-flex w-full h-full items-center space-x-4">
                                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 mt-4">
                                            {
                                                handleIcon(item)
                                            }
                                        </div>
                                        <p className="text-lg text-gray-900 font-medium title-font">{item.name}</p>
                                    </div>
                                    <p className="leading-relaxed text-base">{item.description}</p>
                                    <div className="flex md:ml-auto md:mr-0 mx-auto items-center self-end flex-shrink-0 space-x-4 justify-between mt-3">
                                        <a href={item.html_url} className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                                            <Icons.DiGithub className="w-6 h-6" />
                                            <span className="ml-4 flex items-start flex-col leading-none">
                                                <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                                                <span className="title-font font-medium">Github Repository</span>
                                            </span>
                                        </a>
                                        {
                                            item.homepage !== null ?
                                                <>
                                                    <a href={`https://` + item.homepage} className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                                                        {handleIcon(item)}
                                                        <span className="ml-4 flex items-start flex-col leading-none">
                                                            <span className="text-xs text-gray-600 mb-1">Coming soon</span>
                                                            <span className="title-font font-medium">Live Preview</span>
                                                        </span>
                                                    </a>
                                                </>
                                                :
                                                <>
                                                    <a href="/project" className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                                                        <Icons.DiWebplatform className="w-6 h-6" />
                                                        <span className="ml-4 flex items-start flex-col leading-none">
                                                            <span className="text-xs text-gray-600 mb-1">Coming soon</span>
                                                            <span className="title-font font-medium">Live Preview</span>
                                                        </span>
                                                    </a>
                                                </>
                                        }
                                    </div>
                                    {
                                        item.language &&
                                        <div className="flex md:ml-auto md:mr-0 mx-auto items-center self-end flex-shrink-0 space-x-4 justify-between mt-3">
                                            <p className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-full">
                                                {item.language}
                                            </p>
                                        </div>
                                    }
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}