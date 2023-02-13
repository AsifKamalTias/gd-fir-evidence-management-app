const UserHeader = () =>{
    return(
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <a className="navbar-brand mx-3" href="#">
                    <img src={require('../../images/logo.png')} width="150" height="60" className="d-inline-block align-top" alt=""></img>
                    </a>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                         <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                         <a className="nav-link" href="#">Register FIR</a>
                        </li>
                        <li className="nav-item">
                         <a className="nav-link" href="#">Register GD</a>
                        </li>
                        <li className="nav-item">
                         <a className="nav-link" href="#">Track Complaints</a>
                        </li>
                        <li className="nav-item">
                         <a className="nav-link" href="#">Upload Evidence</a>
                        </li>
                        <li className="nav-item">
                         <a className="nav-link" href="#">Log Out</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default UserHeader;