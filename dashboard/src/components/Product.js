import React from 'react';
function Product(props) {
    return (
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 100 + 'rem' }} src={`http://localhost:3333/images/products/${props.image}`} alt=" Pic " />
                    </div>
                    <h1>{props.name}</h1>
                    <p>{props.description}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Product;