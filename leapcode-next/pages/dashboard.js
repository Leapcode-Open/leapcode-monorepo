import { useContext } from 'react';
import Card from '../Components/Card';
import FeedsList from '../Components/FeedsList';
import Layout from "../Components/Layout";
import ProfileAvatarHalf from '../Components/ProfileAvatarHalf';
import YourProjects from '../Components/YourProjects';
import { API_URL, GET_SERVER_TOKEN_HEADER } from "../config/constants";
import { AuthContext } from "../providers/AuthProvider";
import Link from 'next/link';

const NewUserProjectBlock = (
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
</Link>)

function dashboard(props) {
    const authStatus = useContext(AuthContext);
    if(!props.auth)
        return (<div>
            not auth 
            <button onClick={() => authStatus.login()}>Login</button>
        </div>)

    if(props.error)
        return (<div>api error</div>)
            
    
    return (
        <Layout {...props} signOut={authStatus.signOut} currentUser={authStatus.currentUser} containerClass="bg-bg-main" >
            <div className="max-w-6xl mx-auto mt-6 px-8 md:px-0">

                <div className="flex flex-col md:flex-row md:gap-10 mt-10">
                    <div className="md:w-2/6">
                            <Card>
                                <>
                                    <ProfileAvatarHalf invite={props.invite} loading={props.loading} user={props.user} badges={props.badges} currentUser={props.user} className=" px-6 py-6 border-b-2 border-gray-200" fullName="Sethu Sathyan" points='20' />
                                </>
                            </Card>
                        </div>
                   

                    <div className="flex-1 md:ml-8 mt-4 md:mt-0">
                        <div>
                            <h2 className=" text-black text-xl font-bold mb-3">Your Projects</h2>
                            <p className="font-regular text-gray-700">Let's do some open source!</p>
                            <YourProjects v3 projects={props.userProjects} />

                            { props.userProjects.length == 0 ?
                                <NewUserProjectBlock />
                            : null }
                        </div>
                        <div className="mt-12">
                            <h2 className=" text-black text-xl font-bold mb-3 ">Community</h2>
                            <p className="font-regular text-gray-700 mb-4">Some buzz happening inside leapcode</p>
                            <FeedsList />
                        </div>
                    </div>
                </div>

                
            </div>
        </Layout>
       
    );
}

export async function getServerSideProps(ctx){

    let userData = await fetch(API_URL+`/auth/user`, {
        headers: await GET_SERVER_TOKEN_HEADER(ctx)
    });



    if(userData.status == '401') {
        return {
            props: {
                auth: false,
                apierror: false,
            }
        }
    }

    userData = await userData.json();


    if(!userData.userDetails)
        return {
            props: {
                auth: true,
                apierror: true,
            }
        }

    let userProjects = await fetch(API_URL+`/v3/session`, {
        headers: await GET_SERVER_TOKEN_HEADER(ctx)
    });

    userProjects = await userProjects.json();

    return {
        props: {
            user: userData.userDetails,
            badges: userData.Badges,
            invite: userData.invite,
            auth: true,
            apierror: false,
            userProjects
        }
    } 

}

export default dashboard;