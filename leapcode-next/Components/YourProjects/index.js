import React, { Component, useState } from 'react';
import { API_URL, GET_TOKEN_HEADER } from '../../config/constants';
//import NewSessionModel from '../NewSessionModel';
import Link from 'next/link';
import Card from '../Card';
import SkeletonLoading from '../SkeletonLoading';

const PRStatus = ({ state }) => {
    if(state == 'closed')
        return  <div><span className="w-2 h-2 rounded-full bg-green-700 inline-block mr-2"></span>Closed</div>

    else 
        return <div><span className="w-2 h-2 rounded-full bg-orange-700 inline-block mr-2"></span>{state}</div>
}





const V3Design = (props) => {

    const [modelIsOpen, setModelIsOpen] = useState(false);

 
    return (
    <div className="mt-8">
        {  props.projects.map((project) => (
            <Link key={project._id} href={`/project/${project.slug}/issue`}>
                <a>
                    <Card className='mb-4 shadow-sm hover:shadow'>
                        <div className="py-4 px-4">
                            <div className="flex">
                                <div className="">
                                    <h3 className="text-base font-bold mb-1">{project.name}</h3>
                                    <h4 className="text-xs mb-1">{project.organisation} / {project.name}</h4>
                                </div>
                            </div>
                        </div>
                    </Card>
                </a>
            </Link>
        )) }


 
              
      <Card className="mt-8 shadow-sm hover:shadow border cursor-pointer">
          <Link href="/projects" >
              <a className="py-4 flex flex-col items-center justify-center">
                <h2 className="font-bold text-lg mb-2">Explore {props.projects.length == 0 ? '' : 'More '}Projects</h2>
                <p className="text-gray-700 text-sm">Earn points 🔥 by contributing to open source projects</p>
              </a>
          </Link>
      </Card>
        {/* { modelIsOpen ?
        <SearchProjectModel onClose={() => setModelIsOpen(false)} isOpen={modelIsOpen} /> : null } */}
      {/* { props.newSessionModel ? 
      <NewSessionModel onClose={() => this.setState({ newSessionModel: false})} isOpen={props.newSessionModel} /> : null } */}
</div>)
}


// onClick={() => setModelIsOpen(true)}

export default class YourProjects extends Component {


    state = {
        newSessionModel: false,
        sessions: [],
        projects: [],
        loading: false
    }

  render() {

    if(this.state.loading)
        return <SkeletonLoading />

    return <V3Design projects={this.props.projects} />

  }
}


//onClick={() => this.setState({ newSessionModel:true })}