import React from "react";
import PropTypes from 'prop-types'

function Card({ nombre, imagen, opiniones, url }) {
    const imagePath = require(`../../../assets/${imagen}`);
    return (
        <div className="card  text-center animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={imagePath} alt="a wallpaper" className="card-img-top" />
            </div>
            <div className="card-body ">
                <h2 className="card-title">{nombre}</h2>
                <p className="card-text text-secondary" >{opiniones}</p>
                <a href={url} className="btn btn-warning border-0" target="_blank">
                    Visitar Sitio web
                </a>
            </div>
        </div>
    )
}
Card.propTypes = {
    nombre: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    opiniones :PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
export default Card;