import { useContext } from "react";
import BadgesList from "../../Components/BadgesList";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ScorePointer from "../../Components/ScorePointer";
import { API_URL, GET_AUTH_USER_DETAILS, GET_SERVER_TOKEN_HEADER } from "../../config/constants";
import { AuthContext } from "../../providers/AuthProvider";



const ProfileHeader = ({profile}) => (
    <Card className="px-6 pt-6 pt-8 py-10 mb-4">
        <div className="max-w-4xl mx-auto flex justify-between">
            <div className="flex-1 flex flex-col justify-center items-center text-center"> 
                <div className="w-32">
                    <img className="rounded-full" src={profile.displayPhoto} />
                </div>
                <div className="flex-1 flex mt-6 flex-col justify-center">
                    <h1 className="font-bold">{profile.displayName ? profile.displayName : <span className="text-gray-500 text-sm font-regular">No Name</span>}</h1>
                    <h3 className="text-sm text-gray-700">@{profile.username}</h3>
                    <a href={profile.githubInfo.html_url} className="mt-1 text-xs text-blue-700 hover:underline">Github Profile</a>
                </div>
            </div>
        </div>
    </Card>
)

function UID(props) {

    const authStatus = useContext(AuthContext);
    
    if(props.apierror) 
        return (<div>Error</div>)
    
    console.log(props);
    const {sessions, projects, badges} = props.profile;
    const profile = props.profile;

    return (
        <Layout containerClass={'bg-bg-main'} {...props} currentUser={authStatus.currentUser}>
            <div className="mx-auto">
                <ProfileHeader profile={profile} />
            </div>

            <div className="max-w-6xl mx-auto mt-8">
                                <div className="flex md:gap-10">
                                    <div className="w-2/6">
                                        <Card className="p-6">
                                            <div className={`flex items-center pb-4 border-gray-300 border-b`}>
                                                    <div className="">
                                                        <h4 className="text-xs uppercase text-gray-700 font-bold">Points</h4>
                                                        <ScorePointer big  points={profile.points} />
                                                    </div>
                                            </div>
                                            <div className={`flex items-center py-4`}>
                                                    <div className="">
                                                        <h4 className="text-xs uppercase text-gray-700 font-bold">BADGES</h4>
                                                        <BadgesList badges={badges} />
                                                        {/* <small className="opacity-50 text-xs">No badges found</small> */}
                                                    </div>
                                            </div>
                                        </Card>
                                    </div>
                                    <div className="flex-1 ml-8">
                                        <div>
                                            <h2 className="text-black text-xl font-bold mb-3">Projects working on</h2>
                                            {/* <V3ProjectCards projects={projects} onlyProjects /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
        </Layout>
    );
}

export async function getServerSideProps(ctx){

    const { uid } = ctx.params;
    
    let data = await fetch(API_URL+`/profile/${uid}`, {
        headers: await GET_SERVER_TOKEN_HEADER(ctx)
    });

    // let user = await fetch(API_URL+`/auth/authUser/`, {
    //     headers: await GET_SERVER_TOKEN_HEADER(ctx)
    // })
   
    if(data.status == '404') {
        ctx.res.statusCode = 404;
        return {
            props:{
                apierror:true,
                auth: true,
                notfound: true
            }
        } 
    }

    if(data.status != '200') {
        ctx.res.statusCode = 500;
        return {
            props:{
                apierror:true,
                auth: true
            }
        }
    }

    data = await data.json();
    let user = await GET_AUTH_USER_DETAILS(ctx);
    return {
        props:{
            data:null,
            profile:data,
            user
        }
    }
}

export default UID;