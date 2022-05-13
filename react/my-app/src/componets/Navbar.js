import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(prop) {


  return (

    <div> <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="\">{prop.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="\">Home</a>
            <a className="nav-link" href="\">Features</a>
            <a className="nav-link about" href="/">{prop.about}</a>
            <div className="container-fluid">
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
            {/* ternori operator (condition) ? dothis :elsedothis  */}
            <div className={`form-check form-switch float-right collapse navbar-collapse text-${prop.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={prop.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{prop.modtext}</label>
            </div>
          </div>

        </div>
      </div>
    </nav></div>

  );
}


// if any other type of data types passed using prop then give error on console
Navbar.propTypes = {
  title: PropTypes.string.isRequired, //it compulsory to add title when used this component
  about: PropTypes.string
}

//   no para meter pass by the compnets ver it used then value is seted below given 
Navbar.defaultprop = {
  title: 'default',
  about: "default"
}  
