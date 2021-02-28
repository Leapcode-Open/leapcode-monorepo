import { useContext, useEffect, useState } from "react";
import Layout from "../../../../Components/Layout";
import ProjectPageHeader from "../../../../Components/ProjectPageHeader";
import { getProjectDetailsUsingSlug } from "../../../../config/apiCalls";
import { API_URL, GET_AUTH_USER_DETAILS, GET_SERVER_TOKEN_HEADER, GET_TOKEN_HEADER } from "../../../../config/constants";
import { AuthContext } from "../../../../providers/AuthProvider";
import { includes } from 'lodash';
import Link from "next/link";
import { useRouter } from 'next/router'
import Tick01 from "../../../../Components/Tick";
import LessonContainer from "../../../../Components/LessonContainer";
import { sortableContainer, sortableElement, sortableHandle } from "react-sortable-hoc";

const DragHandle = sortableHandle(() => <span>::</span>);

const SortableItem = sortableElement(({ children }) => {
    return <div className="">{children}</div>;
  });
  
  const SortableContainer = sortableContainer(({ children }) => {
    return <div className="">{children}</div>;
  });

const updateCourseSortOrder = async (projectId, oldIndex, newIndex) => {
    fetch(API_URL+`/course/editSort`, {
            method: 'POST',
            headers: await GET_TOKEN_HEADER(),
            body: JSON.stringify({
                projectId,
                oldIndex,
                newIndex
            })
        });
    return null;
}

const updateLessorSortOrder = async (courseId, oldIndex, newIndex) => {
    fetch(API_URL+`/lesson/editSort`, {
            method: 'POST',
            headers: await GET_TOKEN_HEADER(),
            body: JSON.stringify({
                courseId,
                oldIndex,
                newIndex
            })
        });
    return null;
}



const BulletPoint = ({ selected, done }) => {
    if(selected)
        return <div className={`-ml-6 w-2 h-2 bg-black rounded-full`}></div>
    if(done)
        return <div style={{ marginLeft: '-28px' }} className={`w-4 h-4 bg-white rounded-full`}><Tick01 /></div>
    return  <div className={`-ml-6 w-2 h-2 bg-gray-300 rounded-full`}></div>
}


const SideLessonBlock = ({ id, name, doneBy, slug, projectSlug, selectedLesson, currentUser, completedUsers, courseId }) => {
    const done = currentUser ? includes(completedUsers, currentUser.uid) : false;
    return (
        <div className="flex items-center mb-2">
            <BulletPoint selected={selectedLesson == slug} done={done}></BulletPoint>
            <Link href={`/project/${projectSlug}/activity/${courseId}/${slug}`} >
                <a className={`text-sm font-inter ${ done ? 'ml-3' : 'ml-4'} text-gray-800 hover:text-gray-600 cursor-pointer ${selectedLesson == slug ? 'font-medium text-black' : ''}`}>{name}</a>
            </Link>
        </div>
    )
   
}

const SideCourseBlock = ({name, lessons, projectSlug, slug, selectedLesson, currentUser, courseId}) => {
    const [sortedLessons, setSortedLessons] = useState(lessons);

    const LessonSortEnd = ({ oldIndex, newIndex }) => {
        setSortedLessons(prevState => {
            const newItems = [...prevState];
            if (oldIndex > newIndex) {
              for (let i = oldIndex - 1; i >= newIndex; i--) {
                newItems[i].order++;
                newItems[oldIndex].order = newIndex;
              }
            } else if (oldIndex < newIndex) {
              for (let i = oldIndex + 1; i <= newIndex; i++) {
                newItems[i].order--;
                newItems[oldIndex].order = newIndex;
              }
            }

            const apiCall = updateLessorSortOrder(courseId, oldIndex, newIndex);
            return newItems.sort((a, b) => a.order - b.order);


            //Do API

          });
    }


    return(
        <div className="mb-8 relative">
            <div className="absolute cursor-move -left-10"><DragHandle /></div>
            <div className="font-bold text-black text-sm uppercase mb-3">{ name }</div>
                <SortableContainer useDragHandle onSortEnd={LessonSortEnd}>
                    { sortedLessons.sort((a,b) => a.order - b.order).map((lesson, index) => (
                        <SortableItem key={index} index={index}>
                            <div className="absolute -left-10 cursor-move">
                                <DragHandle></DragHandle>
                            </div>
                            <SideLessonBlock currentUser={currentUser}  selectedLesson={selectedLesson} key={lesson._id} projectSlug={projectSlug} courseId={slug} {...lesson} /> 
                        </SortableItem>
                        ))
                    }
                </SortableContainer>
        </div>
)}






function Course(props) {
    // console.log(props);
    const { courses, project, lid, cid } = props;
    const authStatus = useContext(AuthContext);
    const router = useRouter();

    const [courseList, setCourseList] = useState(courses);


    if(props.notFound) {
        return (<div>not found</div>)
    }

    // console.log(router);
    if(props.noFound) {
        return (<div>No Found</div>)
    }

    if(props.apierror) {
        return (<div>Error</div>)
    }


    const onLessonUpdate = () => {
        console.log('onLessonUpdate');
    }


    const onCourseComplete = () => {
        console.log('onCourseComplete')
    }




    const onCourseSortEnd = ({ oldIndex, newIndex }) => {
        setCourseList(prevState => {
            const newItems = [...prevState];
            if (oldIndex > newIndex) {
              for (let i = oldIndex - 1; i >= newIndex; i--) {
                newItems[i].order++;
                newItems[oldIndex].order = newIndex;
              }
            } else if (oldIndex < newIndex) {
              for (let i = oldIndex + 1; i <= newIndex; i++) {
                newItems[i].order--;
                newItems[oldIndex].order = newIndex;
              }
            }


            //Do API

            // fetch(API_URL+`/course/editSort`, {
            //     method: 'POST',
            //     headers: await GET_TOKEN_HEADER(),
            //     body: JSON.stringify({
            //         projectId:project._id,
            //         oldIndex,
            //         newIndex
            //     })
            // });
            // console.log(editStatus);
            updateCourseSortOrder(project._id, oldIndex, newIndex);
            console.log(newItems)
            return newItems.sort((a, b) => a.order - b.order);



          });
    }

    useEffect(() => {
        // Always do navigations after the first render
        //router.push('/?counter=10', undefined, { shallow: true })

        if(!props.slugExist) {
            router.push(`/project/${project.slug}/activity/${cid}/${lid}`,  undefined, { shallow: true })
        }
      }, [])


    return (
        <Layout containerClass={'bg-bg-main'} {...props} currentUser={authStatus.currentUser}>
            <div className="mx-auto">
                <ProjectPageHeader 
                    project={props.project} 
                    selectedPage={'GETSTARTED'} 
                />
            </div>
            <div className="flex pb-24  max-w-6xl mx-auto">
                <div className="w-1/3">
                          
                    <div className="h-full border-l border-gray-300 ml-4 pl-5 pt-12">
                        <SortableContainer shouldCancelStart={() => false} onSortEnd={onCourseSortEnd} useDragHandle>
                        {
                            courseList.map((course, index) => 
                                        <SortableItem  key={index} index={index} >
                                            <SideCourseBlock 
                                                    currentUser={authStatus.currentUser} 
                                                    selectedLesson={lid} 
                                                    key={course._id} 
                                                    projectSlug={project.slug} 
                                                    {...course}
                                                    courseId={course._id}
                                                 />
                                        </SortableItem>
                                    )
                        }
                        </SortableContainer>
                    </div>
                </div>


                <div className="flex-1 pt-12">
                    <LessonContainer 
                        lesson={props.lesson} 
                        project={project} 
                        courseId={cid} 
                        onLessonUpdate={onLessonUpdate} 
                        onCourseComplete={onCourseComplete} 
                    />
                </div>



            </div>
        </Layout>
    );
}

export async function getServerSideProps(ctx){
    const { pid, slug } = ctx.params;
    const project = await getProjectDetailsUsingSlug(pid, ctx);
    if(!project) {
        ctx.res.statusCode = 404;
        return {
            props: {
                apierror: false,
                noFound: true
            }
        } 
    }
    const firstCourse = project.courses[0];
    let cid = firstCourse.slug ;
    let lid = firstCourse.lessons[0].slug;
    let lesson = null;
    if(slug) {
        cid = slug[0]
        lid = slug[1] 
    }

    console.log('lid', lid)


    const lessonAPI = await fetch(API_URL+`/lesson/slug/${lid}`, {
        headers: await GET_SERVER_TOKEN_HEADER(ctx)
    });
    if(lessonAPI.status == '200') {
        lesson = await lessonAPI.json();
    }

    const courses = project.courses.sort((a,b) => a.order - b.order);    
    //const firstLesson = firstCourse.lessons[0];
    const user = await GET_AUTH_USER_DETAILS(ctx);


    return {
        props:{
            data:null,
            project,
            lesson,
            firstCourse,
            courses,
            lid,
            cid,
            user,
            slugExist: slug ? true : false
        }
    }
}

export default Course;