import React, { Component } from 'react';
import SmallCardQuantity from './SmallCardQuantity'

class ContentRowProducts extends Component {
    constructor() {
        super()
        this.state = {
            productsInDB: [],
            totalCategories: [],
            usersQuantity: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3333/api/categories/last')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(category => {
                console.log(category)
                this.setState({ totalCategories: category.data })
            })
            .catch(error => console.log(error))
            .then(fetch('http://localhost:3333/api/users/last')
                .then(respuesta => {
                    return respuesta.json()
                })
                .then(user => {
                    console.log(user)
                    this.setState({ usersQuantity: user.data })
                })
                .catch(error => console.log(error)))
            .then(fetch('http://localhost:3333/api/products/last')
                .then(respuesta => {
                    return respuesta.json()
                })
                .then(product => {
                    console.log(product)
                    this.setState({ productsInDB: product.data })
                })
                .catch(error => console.log(error)))
    }



    render() {
        return (

            <div className="row">

                <div className="col-md-4 mb-4">
                    <div className={`card border-left-primary shadow h-100 py-2`}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}> Products in Data Base</div>
                                    {this.state.productsInDB.map((product) => {

                                        return <SmallCardQuantity {...product} key={product.id} />

                                    })}
                                </div>
                                <div className="col-auto">
                                    <i className={`fas fa-clipboard-list fa-2x text-gray-300`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className={`card border-left-success shadow h-100 py-2`}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className={`text-xs font-weight-bold text-success text-uppercase mb-1`}> Categories in Data Base</div>
                                    {this.state.totalCategories.map((category) => {
                                        return <SmallCardQuantity {...category} key={category.id} />
                                    })}

                                </div>
                                <div className="col-auto">
                                    <i className={`fas fa-database fa-2x text-gray-300`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className={`card border-left-warning shadow h-100 py-2`}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className={`text-xs font-weight-bold text-warning text-uppercase mb-1`}> Users in Data Base</div>
                                    {this.state.usersQuantity.map((user) => {

                                        return <SmallCardQuantity {...user} key={user.id} />

                                    })}

                                </div>
                                <div className="col-auto">
                                    <i className={`fas fa-user-check fa-2x text-gray-300`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>








            </div>
        )
    }
}

export default ContentRowProducts


