import { useContext } from "react";
import Layout from "../Components/Layout";
import { RepoBlock } from "../Components/RepoBlock";
import SkeletonLoading from "../Components/SkeletonLoading";
import { API_URL, GET_AUTH_USER_DETAILS, GET_SERVER_TOKEN_HEADER } from "../config/constants";
import { AuthContext } from "../providers/AuthProvider";

function projects(props) {

    const { projects, apierror } = props;
    const authStatus = useContext(AuthContext);
    if(apierror)
        return (<div>asd</div>)
    return (
        <Layout {...props} currentUser={authStatus.currentUser}>
                <div className="mx-auto max-w-4xl pt-10">
                    <h3 className="font-bold text-lg">All Projects</h3>
                   
                    <div className='mt-6 pb-24 grid grid-cols-2 gap-4'>

                        {
                            projects.filter(a => !a.hide).map(pro => <RepoBlock {...pro} />)
                        }
                        
                    </div>
                </div>
            </Layout>
    );
}

export async function getServerSideProps(ctx){

    let projects = await fetch(API_URL+`/project?v3=true`, {
        headers: await GET_SERVER_TOKEN_HEADER(ctx)
    });
    if(!projects) {
        return {
            props: {
                auth: true,
                apierror: true,
                projects: []
            }
        }
    }

    projects = await projects.json();
    let user = await GET_AUTH_USER_DETAILS(ctx);
    return {
        props: {
            auth: true,
            apierror: false,
            projects,
            user
        }
    }

}

export default projects;