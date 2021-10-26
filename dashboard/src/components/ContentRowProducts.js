import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Products in DB --> */

let productsInDB = {
    title: 'Products in Data Base',
    color: 'primary',
    cuantity: 3,
    icon: 'fa-clipboard-list'
}

/* <!-- Total categories --> */

let totalCategories = {
    title: ' Total categories',
    color: 'success',
    cuantity: '4',
    icon: 'fa-award'
}

/* <!-- Users quantity --> */

let usersQuantity = {
    title: 'Users quantity',
    color: 'warning',
    cuantity: '3',
    icon: 'fa-user-check'
}

let cartProps = [productsInDB, totalCategories, usersQuantity];

function ContentRowProducts() {
    return (

        <div className="row">

            {cartProps.map((movie, i) => {

                return <SmallCard {...movie} key={i} />

            })}

        </div>
    )
}

export default ContentRowProducts;