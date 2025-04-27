import { Link } from 'react-router-dom';
import "./header.css"

const Header = ()=>{
    return(
        <div>
            <header className='top'>
            <Link to="/"><img  className='logo' src="https://img.freepik.com/free-vector/gradation-m-letter-logo-design_557339-335.jpg?ga=GA1.1.413569059.1731319642&semt=ais_hybrid&w=740" alt="" /></Link>
            <Link to="/" className='title'><h3 >Money Tracker</h3></Link>
            </header>
        </div>
    )
    
}
export default Header;