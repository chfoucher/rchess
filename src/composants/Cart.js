import React from 'react';

function Cart() {
    const prixBegonia = 5;
    const prixRosier = 7;
    const prixTulipes = 12;
    const prixTotal = prixBegonia + prixRosier + prixTulipes;
    return (<div>
    <h2>Panier</h2>
    <ul>
        <li>Bégonia: { prixBegonia } €</li>
        <li>Rosier: { prixRosier } €</li>
        <li>Tulipes: { prixTulipes } €</li>
    </ul>
    <p>Total : { prixTotal } €</p>
    </div>
    );
}

export default Cart
