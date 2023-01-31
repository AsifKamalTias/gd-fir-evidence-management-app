import { useState, useEffect } from "react";
import axios from "axios";

const List = () =>{
    const [users, setUsers] = useState([]);

    const getUser = () =>{
        axios.get('http://127.0.0.1:3100/api/users').then(
            (success)=>{
                setUsers(success.data);
            },
            (error)=>{
                console.log(error);
            }
        )
    }

    useEffect(()=>{
        getUser();
    },[])

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>NID</th>
                        <th>Face Recognition</th>
                        <th>Phone Number</th>
                        <th>OTP</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index)=>{
                        return(
                            <tr key={index}>
                                <td>{user.nidNumber}</td>
                                <td>{user.faceRecognition}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.otp}</td>
                                <td>{user.userStatus}</td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default List;