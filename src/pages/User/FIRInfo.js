const FIRInfo = (props) => {
    return (
        <div className="my-4">
            <div className="border rounded">
                <ul className="list-group">
                    <li className="list-group-item">Id: {props.id}</li>
                    <li className="list-group-item">Thana: {props.thana}</li>
                    <li className="list-group-item">Offence: {props.offence}</li>
                    <li className="list-group-item">Description: {props.description}</li>
                    <li className="list-group-item">Assigned Officer: {props.assignedOfficer}</li>
                    <li className="list-group-item">Suspect Info: {props.suspectInfo}</li>
                    <li className="list-group-item">Status: {props.status}</li>
                    <li className="list-group-item">Result: {props.result}</li>
                    <li className="list-group-item">Date: {props.createdOn} </li>
                </ul>
            </div>
        </div>
    );
}
export default FIRInfo;