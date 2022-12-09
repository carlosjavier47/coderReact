import { Link } from "react-router-dom";
const Item = ({prod}) => {
    return (
        <div className="col-md-4">
            <div className='card mb-3 mt-3 cardProducto border-success '>
                <img src={`../img/${prod.img}`}className="card-img-top" alt="..." />
                <div className='card-body cardBody'>
                    <h5 className="card-title">{prod.nombre} {prod.modelo}</h5>
                    <p className="card-text">*{prod.marca}*</p>
                    <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                    <button className='btn btn-success'><Link className="nav-link" to={`/product/${prod.id}`}>Ver Producto</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Item;
