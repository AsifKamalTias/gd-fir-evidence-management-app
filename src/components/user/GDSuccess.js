import { Button } from "react-bootstrap";
const GDSuccess = () => {
    return (
        <div className="container my-5">
            <div className="border rounded shadow-lg text-center p-5">
                <h1 className="text-success fs-4">GD Submitted Successfully.</h1>
                <Button variant="outline-primary" href="/user/dashboard">
                    Back to Home
                </Button>
            </div>
        </div>
    );
};
export default GDSuccess;
