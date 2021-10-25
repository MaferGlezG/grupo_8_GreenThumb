import React from 'react';
import imagenFondo from '../assets/images/404.png';

function NotFound() {
    return (
        <div className="text-center">
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 80 + 'rem' }} src={imagenFondo} alt=" 404 error " />
        </div>

    )
}


export default NotFound;