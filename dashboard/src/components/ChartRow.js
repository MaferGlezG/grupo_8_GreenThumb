import React from 'react';


function ChartRow(props) {
    console.log(props);
    return (

        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.stock}</td>
            <td>{props.description}</td>
            <td>{props.price}</td>
            <td>{props.category.name}</td>

        </tr>
    )
}



export default ChartRow;