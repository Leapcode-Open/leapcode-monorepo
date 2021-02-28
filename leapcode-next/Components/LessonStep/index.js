const Heading = ({name, description }) => (
    <Fragment>
            <h3 className="font-medium mb-3">{name}</h3>
            <div dangerouslySetInnerHTML={{ __html: description }} className="text-sm text-gray-700 mb-2"></div>
    </Fragment>
)


const LessonStep = (props) => {

    const { step } = props;

    if(step.type == 'PR') {
        return(
            <>
                <Heading {...step} />
                <div className="my-5">
                    PRBLOCK
                </div>
            </>
        )
    }

    return(<div>asd</div>)
}