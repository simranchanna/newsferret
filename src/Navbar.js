import React,{Component} from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'

class Navbar extends Component{
    render(){
        return(
            <div>
                <div className='navigation'>
                   <nav className="navbar navbar-dark bg-dark">
                        <div className="navbar-brand mb-0 h1"><h1>NewsFerret</h1></div>
                        <div className='dropdown'>
                        <NavDropdown title="Choose by Category" id="collasible-nav-dropdown">
                            <NavDropdown.Item >General</NavDropdown.Item>
                            <NavDropdown.Item >Health</NavDropdown.Item>
                            <NavDropdown.Item >Entertainment</NavDropdown.Item>
                            <NavDropdown.Item >Sports</NavDropdown.Item>
                        </NavDropdown>
                        </div>
                        <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                   </nav>    
                </div>
            </div>
        )
    }
}

export default Navbar                