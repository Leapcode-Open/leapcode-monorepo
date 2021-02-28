import Card from "../Card";

const LessonContainer = (props) => {
    const { lesson } = props;
    return (
        <Card  className="p-6 font-inter lessonDiv">
                <h1 className="text-lg font-bold mb-4">{lesson.name} </h1>
                <div dangerouslySetInnerHTML={{ __html: lesson.description }} className='text-sm text-gray-800'></div>
                <div  className="text-sm text-gray-700 mb-2"></div>
                <div className='mt-4'>
                    {/* { steps goes here} */}
                    {/* { 
                        lesson.steps.sort((a,b)=> a.order - b.order)
                                    .map(step => 
                                        <StepV3 
                                            project={project} 
                                            onDone={this.onStepDone} 
                                            step={step} 
                                            session={this.props.session} />)
                    } */}
                </div>

        </Card>
    )
}

export default LessonContainer;

//{this.state.selectedLesson}