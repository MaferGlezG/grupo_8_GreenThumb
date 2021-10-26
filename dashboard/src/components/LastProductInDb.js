import { render } from '@testing-library/react';
import React, { Component } from 'react';
import imagenFondo from '../assets/images/bckg.jpg';

class LastProductInDb extends Component {
    constructor() {
        super()
        this.state = {
            LastProduct: []
        }
    }

    componentDidMount() {
        const api = 'http://localhost:3333/api/products/3'

        fetch(api)
            .then(respuesta => {
                return respuesta.json()
            })
            .then(Product => {
                console.log(Product)
                this.setState({ LastProduct: Product })
            })
            .catch(error => console.error())
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={imagenFondo} alt=" Pic " />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                            <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}






export default LastProductInDb;