import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContex";
//context
import { useDarkModeContext } from '../../context/DarkModeContext';
const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    const {darkMode} = useDarkModeContext()
    return (
        <>
            <button className={`btn  cartWidget ${darkMode ? 'bg-primary' : 'bg-success'}`}>
                    <Link to={'/cart'} className="nav-link">
                        <i className="fas fa-shopping-cart fa-lg"></i>
                        {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
                    </Link>
                        
            </button>
            
        </>
    );
}

export default CartWidget;
