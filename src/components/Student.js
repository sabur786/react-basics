
 const Student = (props) => {

// const Student = ({firstName, lastName, email}) => {


        const {firstName, lastName} = props

    return (
        <div>
            <h1>Student Details</h1>
            <p>Student first name : {firstName}</p>
            <p>Student last name : {lastName}</p>
            {/* <p>Student email address : {email}</p> */}
            {/* <p>Arrray data: {props.data}</p> */}
        </div>
    )
}

export default Student