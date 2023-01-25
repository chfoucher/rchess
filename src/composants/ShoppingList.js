import React from 'react';
const catalog = [
    { nom: "Gazon" },
    { nom: "Begonia", topVente: true },
    { nom: "Laurier"},
];

function ShoppingList() {
    return (
        <ul>{ catalog.map((article, index) => (
        <li key={index}>{ article.nom } { article.topVente &&<span>🔥</span> }</li>
        )) }
        </ul>
    );
}
    
export default ShoppingList
    