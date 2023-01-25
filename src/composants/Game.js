import React from 'react';
import "../styles/Game.css";
import Cell from './Cell';

const PION = 1;
const TOUR = 2;
const ROI = 3;
const FOU = 4;
const CHEVAL = 5;
const REINE = 6;
const NOIR = "noir";
const BLANC = "blanc";
const board = initBoard();
initBoardLayout();
function initBoard() {
    const board = [];
    let currentBlack = false;
    for (var r = 0; r < 8; r++) {
      board[r] = [];
      for (var c = 0; c < 8; c++) {
        board[r][c] = { r, c, black: currentBlack };
        currentBlack = !currentBlack;
      }
      currentBlack = !currentBlack;
    }
    return board;
}

function initBoardLayout() {
    const layout = [TOUR, CHEVAL, FOU, REINE, ROI, FOU, CHEVAL, TOUR];
    for (var c = 0; c < 8; c++) {
      board[0][c].piece = { type: layout[c], couleur: NOIR };
      //ajouteOrigine(NOIR, 0, c);
      board[1][c].piece = { type: PION, couleur: NOIR };
      //ajouteOrigine(NOIR, 1, c);
      board[6][c].piece = { type: PION, couleur: BLANC };
      //ajouteOrigine(BLANC, 6, c);
      board[7][c].piece = { type: layout[c], couleur: BLANC };
      //ajouteOrigine(BLANC, 7, c);
      for (let r = 2; r < 6; r++) {
        board[r][c].piece = undefined;
      }
    }
}

function handleClick(e) {
    console.log("handleClick", e);
}

function Row({brow: row}) {
return (<tr>{ row.map((cell, index) => (
    <td key={`c-${index}`} onClick={() => handleClick(cell)}><Cell black={cell.black} piece={cell.piece} r={cell.r} c={cell.c}/></td>
))}</tr>);
}

function Game() {
    return (<div>
        <table><tbody>
        { board.map((row, index) => (
            <Row key={`r-${index}`} brow={row} />
        )) }
        </tbody></table>
    </div>);
}
        
export default Game
