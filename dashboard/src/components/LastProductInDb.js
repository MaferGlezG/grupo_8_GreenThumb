import React, { Component } from "react";
import Product from './Product';


class LastProductInDb extends Component {

    constructor() {
        super()
        this.state = {
            LastProduct: []
        }
    }

    componentDidMount() {
        const api = 'http://localhost:3333/api/products/last'
        fetch(api)
            .then(respuesta => {
                return respuesta.json()
            })
            .then(Product => {
                console.log(Product)
                this.setState({ LastProduct: Product.data })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                        </div>
                        {this.state.LastProduct.map((product) => {
                            return <Product {...product} key={product.id} />
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}






export default LastProductInDb;