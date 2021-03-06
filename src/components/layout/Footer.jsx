import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'



function Footer() {
    return ( 
        <>
        <div className='footer BebasNeue' id="footer">
    
            <div>
                <h2 className='light-blue'>The Party People App</h2>
                <h5 className='light-blue'>Where People Who Party Find Parties To Party At</h5>
                <Navbar.Brand className='pink-font' href="#">Back To Top</Navbar.Brand>

            </div>
        
                <h3 className='white' style={{width: '8rem', margin: '5px'}}>Meet The Developers: </h3>
            
            <Nav defaultActiveKey="/home" className="flex-column">
                <h3 className='white'>Triston J. Palacios</h3>
                <Nav.Link target="_blank" className='pink-font' href="https://www.linkedin.com/in/tristonpalacios/" eventKey="LinkedIn-1">LinkedIn</Nav.Link>
                <Nav.Link target="_blank" className='pink-font' href="https://github.com/tristonpalacios"
                eventKey="github-1">GitHub</Nav.Link>
            </Nav>
            <Nav defaultActiveKey="/home" className="flex-column">
                 <h3 className='whie'>Bryan Nguyen</h3>
                 <Nav.Link target="_blank" className='pink-font' href="https://www.linkedin.com/in/brnguy/" eventKey="LinkedIn-2">LinkedIn</Nav.Link>
                <Nav.Link target="_blank"  className='pink-font' href="https://github.com/brnguy" eventKey="GitHub-2">GitHub</Nav.Link>
            </Nav>
            <Nav defaultActiveKey="/home" className="flex-column">
                <h3 className='white'>Grace Sung</h3>
                <Nav.Link target="_blank" className='pink-font' href="https://www.linkedin.com/in/chanhee-grace-sung/" eventKey="LinkedIn-3">LinkedIn</Nav.Link>
                <Nav.Link target="_blank" className='pink-font' href="https://github.com/kokopuffz" eventKey="GitHub-3">GitHub</Nav.Link>
            </Nav>
            <Nav defaultActiveKey="/home" className="flex-column">
                <h3 className='white'>Zach Brose</h3>
                <Nav.Link target="_blank"  className='pink-font' href="https://www.linkedin.com/in/zach-brose-668a9891/" eventKey="LinkedIn-4">LinkedIn</Nav.Link>
                <Nav.Link target="_blank" className='pink-font' href="https://github.com/zbrose" eventKey="GitHub-4">GitHub</Nav.Link>
            </Nav>
            
        </div>
        </>
     )
}

export default Footer; 