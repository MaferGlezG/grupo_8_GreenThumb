import React from 'react';
function SearchProducts() {

    const movies = [
        {
            "Name": "Aloe Vera",
            "Stock": "33",
            "Image": "N/A"
        },
        {
            "Title": "Planta",
            "Year": "17",
            "Poster": "N/A"
        },
    ];

    const keyword = 'Planta';

    // Credenciales de API
    const apiKey = 'X'; // Intenta poner cualquier cosa antes para probar

    return (
        <div className="container-fluid">
            {
                apiKey !== '' ?
                    <>
                        <div className="row my-4">
                            <div className="col-12 col-md-6">
                                {/* Buscador */}
                                <form method="GET">
                                    <div className="form-group">
                                        <label htmlFor="">Buscar por Nombre:</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <button className="btn btn-info">Search</button>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h2>Productos para la palabra: {keyword}</h2>
                            </div>
                            {/* Listado de películas */}
                            {
                                products.length > 0 && products.map((product, i) => {
                                    return (
                                        <div className="col-sm-6 col-md-3 my-4" key={i}>
                                            <div className="card shadow mb-4">
                                                <div className="card-header py-3">
                                                    <h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
                                                </div>
                                                <div className="card-body">
                                                    <div className="text-center">
                                                        <img
                                                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                                            src={product.image}
                                                            alt={product.name}
                                                            style={{ width: '90%', height: '400px', objectFit: 'cover' }}
                                                        />
                                                    </div>
                                                    <p>{product.stock}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {movies.length === 0 && <div className="alert alert-warning text-center">No se encontraron Productos</div>}
                    </>
                    :
                    <div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
            }
        </div>
    )
}

export default SearchMovies;
