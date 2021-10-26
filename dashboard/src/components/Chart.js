import React, { Component } from 'react';
import ChartRow from './ChartRow';



class Chart extends Component {
    constructor() {
        super()
        this.state = {
            productsList: []
        }
    }

    componentDidMount() {
        const api = 'http://localhost:3333/api/products'
        fetch(api)
            .then(respuesta => {
                return respuesta.json()
            })
            .then(Products => {
                console.log(Products)
                this.setState({ productsList: Products.data })

            })
            .then(productsList => {
                console.log(this.state.productsList)
            })
            .catch(error => console.log(error))
    }




    render() {
        return (
            <React.Fragment>

                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Stock</th>
                                        <th>Descripción</th>
                                        <th>Precio</th>
                                        <th>Categoría</th>

                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Stock</th>
                                        <th>Descripción</th>
                                        <th>Precio</th>
                                        <th>Categoría</th>

                                    </tr>
                                </tfoot>
                                <tbody>
                                    {this.state.productsList.map(product => {
                                        return <ChartRow {...product} key={product.id} />
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}


export default Chart;