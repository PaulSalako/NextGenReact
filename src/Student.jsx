import PropTypes from 'prop-types'

function Student(props){


    return(

        <>
            <div className="student">
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Class: {props.classIn}</p>
                <p>Student: {props.isStudent ? "Yes" : "No"}</p>
            </div>
        </>
    )


}

Student.propTypes = {
    name: PropTypes.strings,
    age: PropTypes.numbers,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: "empty",
    classIn:  "empty",
    isStudent: "empty"
}


export default Student