import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navbar = () => {

  const [token, setToken] = useState("")
  const navigate = useNavigate()

  useEffect(async () => {
    const token_ = localStorage.getItem('token')
    setToken(token_)
  }
    , [])

  const logout = () => {
    localStorage.clear()

  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              <Link to="/" className="nav-link active" aria-current="page"> Home</Link>

            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page"> About</Link>
            </li>

            {
              token ?
                
                  <li className="nav-item">
                    <Link to="/dashboard" className="nav-link" aria-current="page"> Dashboard</Link>
                  </li>
                  :
                  <li className="nav-item">
                    <Link to="/register" className="nav-link" aria-current="page"> Register</Link>
                  </li>
}
              {token ?
                  <li className="nav-item">
                    <Link to="/" onClick={logout} className="nav-link" aria-current="page"> Logout</Link>
                  </li>
                  :
                  <li className="nav-item">
                    <Link to="/login" className="nav-link" aria-current="page"> Login</Link>
                  </li>
                
            }


            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to="/">Action</Link></li>
                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

