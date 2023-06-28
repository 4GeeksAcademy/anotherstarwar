import { Link, useParams, useLocation } from 'react-router-dom';
import logo from '../../img/logo.png';
import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      
      
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} className="img-fluid" style={{ width: '200px' }} />
        </Link>
        <div className="dropstart">
          <button
            className="btn btn1 custom-btn"
            id="dropdownMenuClickable"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            <strong>Favoritos</strong>
          </button>
          <ul className="dropdown-menu bg-dark border border-light" aria-labelledby="dropdownMenuClickableInside">
            {store.favoritos.length > 0 ? (
              store.favoritos.map((item, index) => {
                return (
                  // realizo un map de favorito para leer cada item agregado por el usuario y recibe props desde home  (name, id y cateogoria) para formar la ruta de cada item asi acceder a la vista detallada
                  <li key={index} className="dropdown-item bg-dark text-light">
                    <span>
                      <Link className="text-decoration-none text-warning" to={`/${item.categoria}/${item.id}`}>
                        {item.name}
                      </Link>
                    </span>
                    <button
                      className="badge badge-danger text-white ms-2 justify-content-end"
                      onClick={() => actions.borrarFavoritos(item)}
                    >
                      <i className="far fa-trash-alt text-dark" />
                    </button>
                  </li>
                );
              })
            ) : (
              <blockquote className="custom-blockquote">
                <p className="quote-text">Add your favorites.</p>
                <footer className="quote-author">Star War</footer>
              </blockquote>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
