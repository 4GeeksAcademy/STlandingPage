import React from "react"
export const Navbar = () => {
    return(
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  				<div className="container-fluid d-flex">
    				    <a className="navbar-brand text-white" href="#">Start Boostrap</a>
    				    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      				    <span className="navbar-toggler-icon"></span>
    				    </button>
    				<div className="collapse navbar-collapse " id="navbarNav">
      					<ul className="navbar-nav ms-auto">
        					<li className="nav-item">
          						<a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        					</li>
        					<li className="nav-item">
          					    <a className="nav-link text-white-50" href="#">About</a>
        					</li>
       						<li className="nav-item">
          					    <a className="nav-link text-white-50" href="#">Services</a>
        					</li>
                            <li className="nav-item">
          					    <a className="nav-link text-white-50" href="#">Contact</a>
        					</li>
     					 </ul>
    				</div>
  				</div>
			</nav>
    );
}