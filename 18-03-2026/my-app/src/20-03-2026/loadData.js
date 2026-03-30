import React, { useState } from 'react';
import shopStock from './shopstock.json'
export default function LoadData() {
    let [show, showTable] = useState(false);

    function handleClick() {
        showTable(true);
    }

    return <>

        {
            show ? (
                <table border={1} style={{ "borderCollapse": "collapse" }}>
                    <caption>Item Info</caption>
                     <thead key={"t1"}>

                     <tr>
                        <th>Id</th>
                        <th>Item</th>
                        <th>Price</th>
                    </tr>
                     </thead>
                   <tbody key={"t2"}>

                    {
                        shopStock.map((data) => {
                            return <React.Fragment key={data.id + 1}>
                                <tr>
                                    <td >{data.id}</td>
                                    <td >{data.item_name}</td>
                                    <td >{data.unit_cost}</td>
                                </tr>
                            </React.Fragment>
                        })
                    }
                   </tbody>
                </table>
            ) : (
                <button onClick={handleClick}>Show data</button>
            )
        }



    </>
} 

