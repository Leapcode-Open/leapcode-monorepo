import React from 'react'
import { GoRepo } from 'react-icons/go'
import Link from 'next/link'

export const RepoBlock = (props) => {
    return (
            <div className="border rounded-lg bg-white mb-4 font-inter hover:shadow border-gray-300">
                <div>
                    <div className='px-4 pt-4'>
                        <h2 className="flex items-center"><GoRepo />  <span className='ml-2 mr-2'>{props.organisation}</span> / <span className="ml-2 font-semibold">{props.name}</span></h2>
                        { props.githubInfo ? <div>
                                    <div className="flex-wrap">
                                        {   props.githubInfo.languages ? <>
                                            { Object.keys(props.githubInfo.languages).map((la) => (
                                                <div className="px-2 py-1 bg-blue-100 text-blue-600 text-xs mt-3 rounded mr-2 inline-block">{la}</div>
                                            )) } </> : <div className="px-2 py-1 bg-blue-100 text-blue-600 text-xs mt-3 rounded">{props.githubInfo.language}</div>
                                        }
                                        
                                    </div>
                                </div>  : null }
                    </div>
    
                    <div className="py-4 px-4">
                        { props.githubInfo ? 
                        <div className="flex items-center text-gray-700 text-sm mb-4">
                            <span className="mr-2">By</span><img className="w-5 h-5 mr-2 rounded-full" src={props.githubInfo.owner.avatar_url}  /><div>{props.githubInfo.owner.login}</div> 
                        </div> : null }    
                        <div className="text-sm" dangerouslySetInnerHTML={{ __html: props.description}}></div>
                            <div className="mt-4">
                                <Link href={`/project/${props.slug}/issue`}>
                                    <a className="text-blue-700 font-semibold text-sm hover:underline">Start Contributing →</a>
                                </Link>
                            </div>
                    </div>
                </div>
              
            </div>
    )
    }