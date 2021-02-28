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
        <Link key={project._id} href={`/v3/project/${project.slug}/activity`}>
          <Card className='mb-4 hover:shadow'>
              <div className="py-6 px-6">
                  <div className="flex">
                      <div className="">
                          <h3 className="text-base font-bold mb-1">{project.name}</h3>
                          <h4 className="text-xs mb-1">{project.organisation} / {project.name}</h4>
                         
                      </div>
                  </div>
              </div>
          </Card>
        </Link>
    )) }


    { props.projects.length == 0 ? 
                <Link href={`/project/${`first-pull-request-pr`}/activity/`}>
                    <a>
                        <Card className='mb-4 hover:shadow'>
                            <div className="py-6 px-6">
                                <div className="flex">
                                    <div className="">
                                        <h3 className="text-base font-bold mb-1">Learn to do your first Pull Request</h3>
                                        <h4 className="text-sm mb-1">This project will teach you the basics of GitHub workflow and help you make your first open source contribution.</h4>
                                        <button className="font-inter hover:underline font-bold text-purple-600 mt-3 text-sm">Start this project</button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </a>
                </Link> : null }
              
      <Card className="mt-8 hover:shadow hover:bg-gray-100 cursor-pointer">
          <Link href="/projects"  className="py-8 flex flex-col items-center justify-center">
              <a className="py-8 flex flex-col items-center justify-center">
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

export default class YourSessions extends Component {


    state = {
        newSessionModel: false,
        sessions: [],
        projects: [],
        loading: true
    }
   async componentDidMount() {

    const url = this.props.v3 ? `${API_URL}/v3/session` : `${API_URL}/session`
        fetch(url, {
            headers: await GET_TOKEN_HEADER()
        }).then(res => res.json())
        .then(res => {
            if(res) {
                this.setState({
                    loading: false,
                    projects: res,
                    sessions: res
                })
            }
            
        })
    }
  render() {

    if(this.state.loading)
        return <SkeletonLoading />

    return <V3Design {...this.state} />

  }
}


//onClick={() => this.setState({ newSessionModel:true })}