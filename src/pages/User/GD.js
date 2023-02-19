import axios from "axios"
import { useState, useEffect } from "react"
import UserHeader from "../../components/user/UserHeader";

const GD = () => {
    const [gds, setGds] = useState();
    useEffect(() => {
        document.title = 'GD | Blockchain-Based Police Complaint and Crime Evidence Management System';
        const data = {
            userId: localStorage.getItem('loggedUser'),
        }
        axios.post('http://127.0.0.1:3100/api/gds', data)
            .then(
                (success) => {
                    setGds(success.data.gdsWithThanaAndGDType);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, []);

    return (
        <div>
            <UserHeader />
            <div className="container my-5">
                <h1 className="text-center my-3">GD</h1>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Thana</th>
                            <th scope="col">Type</th>
                            <th scope="col">Description</th>
                            <th scope="col">Status</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gds && gds.map((gd) => (
                            <tr key={gd._id}>
                                <th scope="row">{gd._id}</th>
                                <td>{gd.thanaId}</td>
                                <td>{gd.gdType}</td>
                                <td>{gd.description}</td>
                                <td>{gd.status}</td>
                                <td>{gd.createdOn}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default GD;