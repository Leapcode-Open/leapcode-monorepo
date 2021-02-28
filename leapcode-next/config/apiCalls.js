import { API_URL, GET_SERVER_TOKEN_HEADER } from "./constants";

export const getProjectDetailsUsingSlug = async (pid, ctx) => {
    let project = await fetch(API_URL+`/project/slug/${pid}`, {
        headers: await GET_SERVER_TOKEN_HEADER(ctx)
    });

    if(project.status == '404') {
        return null
    }

    if(project.status != '200') {
        return {
            error: 'Internal Server Error'
        }
    }

    project = await project.json();

    return project;


}