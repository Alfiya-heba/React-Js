import PropTypes from 'prop-types';

function Student(props) {
    console.log("Recieved Props:",props);
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

// Define PropTypes
Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool, // Corrected from boolean to bool
};

// Define Default Props
Student.defaultProps = {
    name: "HIIIIIIIIIIIII",
    age: 69,
    isStudent: false,
};

export default Student;
