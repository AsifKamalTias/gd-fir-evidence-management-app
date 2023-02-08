const RegistrationS4 = () => {
    const goLogin = () => {
        localStorage.removeItem('RS1');
        localStorage.removeItem('RS2');
        localStorage.removeItem('RS3');
        localStorage.removeItem('RS4');
        localStorage.setItem('rStep', 1);
        window.location.href = '/user/login';
    }
    return(
        <div className="container">
            <div className="text-center">
                Registrations Successful. Please <button onClick={goLogin} className="btn btn-success btn-sm">Login</button>
            </div>
        </div>
    );
}
export default RegistrationS4;