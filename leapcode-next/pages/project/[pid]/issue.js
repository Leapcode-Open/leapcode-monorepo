import { useContext } from "react";
import Layout from "../../../Components/Layout";
import { API_URL, GET_AUTH_USER_DETAILS, GET_SERVER_TOKEN_HEADER } from "../../../config/constants";
import { AuthContext } from "../../../providers/AuthProvider";
import Link from 'next/link';
import Card from "../../../Components/Card";
import ProjectPageHeader from "../../../Components/ProjectPageHeader";
import { getProjectDetailsUsingSlug } from "../../../config/apiCalls";






function issue(props) {
    const authStatus = useContext(AuthContext);
    if(props.noFound) {
        return (<div>No Found</div>)
    }

    if(props.apierror) {
        return (<div>Error</div>)
    }
    return (
        <Layout containerClass={'bg-bg-main'} {...props} currentUser={authStatus.currentUser}>
            <div className="mx-auto">
                <ProjectPageHeader project={props.project} selected={'ISSUE'} />
            </div>
        </Layout>
    );
}

export async function getServerSideProps(ctx){
    const { pid } = ctx.params;
    let project = await getProjectDetailsUsingSlug(pid, ctx);
    if(!project) {
        ctx.res.statusCode = 404;
        return {
            props: {
                apierror: false,
                noFound: true
            }
        }
    }
    const user = await GET_AUTH_USER_DETAILS(ctx);
    return {
        props:{
            project,
            user,
            auth: user ? true : false,
            apierror: false
        }
    }
}

export default issue;