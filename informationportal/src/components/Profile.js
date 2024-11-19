import React from 'react'

function Profile(props) {
  return (
    <>
        <table>
            <tr>
                <td rowSpan={7}>
                    <img className="profile" src={require('../assets/img/1.jpg')} alt="Profile" />
                </td>
                <td>ID {props.stu.studentId}</td>
            </tr>
            <tr>
                <td>Full Name {props.stu.firstName} {props.stu.lastName}</td>
            </tr>
            <tr>
                <td>Age:{props.stu.age}</td>
            </tr>
            <tr>
                <td>Course:{props.stu.course}</td>
            </tr>
            <tr>
                <td>Gender: {props.stu.gender}</td>
            </tr>
            <tr>
                <td>Address {props.stu.city} {props.stu.country}</td>
            </tr>
        </table>
    </>
  )
}

export default Profile