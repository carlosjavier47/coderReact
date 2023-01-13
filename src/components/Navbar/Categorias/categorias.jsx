import { Link } from "react-router-dom";
//context
import { useDarkModeContext } from '../../../context/DarkModeContext';
const Categorias = () => {
        const {darkMode} = useDarkModeContext()
        return ( 
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-link">
                        <button className={`btn  ${darkMode ? 'bg-primary' : 'bg-success'}`}><Link className="nav-link" to={"/"}><i className="fas fa-home fa-lg"></i></Link></button>
                </li>
                <li className="nav-link">
                
                        <button className={`btn  ${darkMode ? 'bg-primary' : 'bg-success'}`}><Link className="nav-link" to={"/category/1"}><i className="fas fa-dog fa-lg"></i></Link></button>
                
                </li>
                <li className="nav-link">
                
                        <button className={`btn  ${darkMode ? 'bg-primary' : 'bg-success'}`}><Link className="nav-link" to={"/category/2"}><i className="fas fa-cat fa-lg"></i></Link></button>
                
                </li>
                <li className="nav-link">
        
                        <button className={`btn  ${darkMode ? 'bg-primary' : 'bg-success'}`}><Link className="nav-link" to={"/category/3"}><i className="fas fa-solid fa-bone"></i></Link></button>
                
                </li>
                <li className="nav-link">
                
                        <button className={`btn  ${darkMode ? 'bg-primary' : 'bg-success'}`}><Link className="nav-link" to={"/category/4"}><i className="fas fa-solid fa-heart"></i></Link></button>
                
                </li>
        </ul>

    );
}

export default Categorias;