import '../assets/css/compo.css';
export default function StudentTable(props) {
    
    return(
        <div className="outerDiv">
            <div className="leftDiv" > </div>
                <table>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Course</td>
                        <td>Country</td>
                        <td>Profile</td>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            props.students.map((student) => {
                                return(
                                    <tr>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.course}</td>
                                        <td>{student.address.country}</td>
                                        <td><img src={student.profilePic} alt="profile" width="50px" height="50px"/></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
        </div>
    );
}