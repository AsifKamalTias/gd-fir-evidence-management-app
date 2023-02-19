import { Button } from "react-bootstrap";
const FIRSuccess = (props) => {
    return (
        <div className="container my-5">
            <div className="border rounded shadow-lg text-center p-5">
                <h1 className="text-success fs-4">FIR Submitted Successfully.</h1>
                <p>Your FIR ID is: {props.id}</p>
                <p>Keep this ID for future reference.</p>
                <Button variant="outline-primary" href="/user/dashboard">
                    Back to Home
                </Button>
            </div>
        </div>
    );
};
export default FIRSuccess;
