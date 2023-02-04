const Header = () =>{
    return(
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <a className="navbar-brand mx-3" href="#">
                    <img src={require('../images/logo.png')} width="150" height="60" className="d-inline-block align-top" alt=""></img>
                    </a>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                         <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                         <a className="nav-link" href="#">Register</a>
                        </li>
                        <li className="nav-item">
                         <a className="nav-link" href="#">Log In</a>
                        </li>
                        <li className="nav-item">
                         <a className="nav-link" href="#">Contact</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;