import React from 'react';

const Table = ({ items }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
               {items.map((item, index) => (
                   <tr>
                       <td>{ index }</td>
                       <td>{ item.name }</td>
                       <td>{ item.phone }</td>
                       <td>{ item.age }</td>
                   </tr>
                ))}
            </tbody>               
        </table>     
    );
}

export default Table;