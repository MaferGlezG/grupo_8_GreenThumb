import React, { Component } from "react";
import Category from './Category'

class Categories extends Component {

    constructor() {
        super()
        this.state = {
            categoriesList: []
        }
    }

    componentDidMount() {
        const api = 'http://localhost:3333/api/categories'
        fetch(api)
            .then(respuesta => {
                return respuesta.json()
            })
            .then(Categories => {
                console.log(Categories)
                this.setState({ categoriesList: Categories.data })
            })
            .catch(error => console.log(error))
    }


    cambiarFondo() {
        document.querySelector(".fondoCaja").classList.toggle("bg-secondary")
    }

    render() {
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-white-800" onMouseOver={this.cambiarFondo} onMouseOut={this.cambiarFondo}>Categories in Data Base</h6>
                        </div>
                        <div className="card-body fondoCaja">
                            <div className="row">
                                {this.state.categoriesList.map((category) => {
                                    return <Category {...category} key={category.id} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}

/*function Categories() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:3333/api/categories")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Nota: es importante manejar errores aquí y no en 
                // un bloque catch() para que no interceptemos errores
                // de errores reales en los componentes.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*//*}
<div className="col-lg-6 mb-4">
<div className="card shadow mb-4">
<div className="card-header py-3">
<h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.cambiarFondo} onMouseOut={this.cambiarFondo}>categories in Data Base</h6>
</div>
<div className="card-body fondoCaja">
<div className="row">
{this.state.categoriesList.map((category, index) => {
return <Category {...category} key={index} />
})}
</div>
</div>
</div>
</div>


</React.Fragment>
);
}
}*/




export default Categories;