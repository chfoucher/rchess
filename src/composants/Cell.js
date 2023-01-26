import React from 'react';
import "../styles/Cell.css";
import Chess_hdt45 from "../assets/Chess_hdt45.svg";
import Chess_plt45 from "../assets/Chess_plt45.svg";
import Chess_mdt45 from "../assets/Chess_mdt45.svg";
import Chess_rlt45 from "../assets/Chess_rlt45.svg";
import Chess_fdt45 from "../assets/Chess_fdt45.svg";
import Chess_klt45 from "../assets/Chess_klt45.svg";
import Chess_Bdt45 from "../assets/Chess_Bdt45.svg";
import Chess_blt45 from "../assets/Chess_blt45.svg";
import Chess_Ndt45 from "../assets/Chess_Ndt45.svg";
import Chess_nlt45 from "../assets/Chess_nlt45.svg";
import Chess_gdt45 from "../assets/Chess_gdt45.svg";
import Chess_qlt45 from "../assets/Chess_qlt45.svg";
const images = [
  null,
  null,
  Chess_hdt45,
  Chess_plt45,
  Chess_mdt45,
  Chess_rlt45,
  Chess_fdt45,
  Chess_klt45,
  Chess_Bdt45,
  Chess_blt45,
  Chess_Ndt45,
  Chess_nlt45,
  Chess_gdt45,
  Chess_qlt45,
];

function Piece({type, couleur}) {
    const imgSrc = images[2 * type + (couleur === "noir"?0:1)];
    return <img src={imgSrc} alt="" />
}
function Cell( { black, r, c, selected, piece}) {
    const cName = 'chess-cell' + (black?' black':'') + (selected?' selected':'');
    return (<div className={cName} >
        { piece && <Piece type={piece.type} couleur={piece.couleur}/>}
    </div>);
}
        
export default Cell
    