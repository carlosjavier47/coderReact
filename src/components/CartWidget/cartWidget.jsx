const CartWidget = () => {
    return (
        <ul className="navbar-nav me-auto list-group">
        <li className="list-group-item bg-success d-flex justify-content-between align-items-center">
            <a className="nav-link text-white" href="google.com">Carrito</a>
          <span className="badge bg-danger rounded-pill">0</span>
        </li>
      </ul>
    );
}

export default CartWidget;
