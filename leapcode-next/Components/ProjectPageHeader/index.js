import Card from "../Card";
import Link from 'next/link';
import { GoMarkGithub } from "react-icons/go";


const ProjectMenuItem  = [{
    id:0,
    title: 'Get Started✌️',
    id:'GETSTARTED',
    url:'activity'
}, {
    id:1,
    title: ' Issues🔥',
    id:'ISSUE',
    url:'issue'
}, {
    id:2,
    title: 'Your Contributions🚀',
    id:'YOURCONTRIBUTION',
    url:'contribution'
}]





const ProjectPageHeader = ({ project, selectedPage }) => {

    const openContributorList = () => {
        return null
    }

    console.log(selectedPage);

    return (
        <div className="bg-white border-b border-gray-200 shadow-sm">
            <Card noBorder className="px-6 pt-6">
                <div className="max-w-6xl mx-auto flex justify-between">
                    <div className="flex-1"> 
                        <div className="mb-3 text-xs text-gray-500">
                            <Link href="/projects"><a className="hover:underline text-xs">Projects</a></Link><span className="font-medium text-gray-500"> / {project.name }</span>
                        </div>
                        <div className="flex flex-col justify-between pb-3">
                            <div>
                                <h2 className="mb-2">{project.organisation} <span className='opacity-50'>/</span> <span className="font-bold">{project.name}</span></h2>
                                {/* <div className="text-gray-800 text-sm" dangerouslySetInnerHTML={{ __html: project.githubInfo ? project.githubInfo.description : project.description }} ></div> */}
                                <div dangerouslySetInnerHTML={{ __html: project.description}} className='text-gray-700 text-sm'></div>
                            </div>

                            {
                                project.githubInfo ? <div>
                                    <div className="flex">
                                        { project.githubInfo.languages ? Object.keys(project.githubInfo.languages).map(la => <div className="px-2 py-1 bg-blue-100 text-blue-500 text-xs mt-3 rounded mr-2">{la}</div> ) :  <div className="px-2 py-1 bg-blue-100 text-blue-500 text-xs mt-3 rounded">{project.githubInfo.language}</div> }
                                        

                                    </div>
                                </div> : null
                            }

                            <div className="flex mt-6">
                                <a className='flex items-center text-blue-700 text-sm hover:underline' target="_blank" rel="noopener noreferrer" href={project.githubUrl}><GoMarkGithub color="#4d4d4d" className="mr-2" /><span>View on Github</span></a>
                                {/* { project.gitpod ? project.gitpod.length > 0 ? <a target="_blank" href={project.gitpod} className='ml-6'><img src="https://gitpod.io/button/open-in-gitpod.svg"></img></a> : null : null } */}
                            </div>
                            
                        </div>
                    </div>


                    <div className="w-64 flex flex-col items-end justify-center">
                        <div className="flex flex-row">
                            {
                                project.contributors.slice(0, 5).map((contributor) => <div key={contributor._id} className="-ml-4">
                                    <Link href={`/u/${contributor.username}`}><img className="rounded-full w-10 border-2 border-white" src={contributor.displayPhoto} /></Link></div> )
                            }

                        {
                            project.contributors.length > 5 ? <div onClick={openContributorList} className="-ml-4 rounded-full bg-gray-100 w-10 h-10 flex items-center justify-center text-xs font-bold text-gray-600"> + {project.contributors.length - 5 }</div> : null 
                        }
                        </div>

                        { project.contributors.length == 0 ? <span className="text-xs text-gray-600 text-right">Be the first contributor by <br /> picking up an issue</span> : null }
                        
                    </div>
                    

                </div>
            </Card>

            <ul className="flex max-w-6xl mx-auto">
                { ProjectMenuItem.map( menu => (
                    <li key={menu.id} className={` mr-8 text-sm hover:opacity-100 hover:text-gray-900 ${ selectedPage == menu.id ? `font-bold border-b-2 border-black text-gray-900` : `opacity-75 text-gray-700` }`}><Link href={`/project/${project.slug}/${menu.url}`}><a className="py-4 px-2 block">{menu.title}</a></Link></li>
                )) }
               
            </ul>
        </div>
    );
}

export default ProjectPageHeader;