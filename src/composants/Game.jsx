import React, {useState } from 'react';
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
export function initBoard() {
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

export function initBoardLayout(board) {
  const layout = [TOUR, CHEVAL, FOU, REINE, ROI, FOU, CHEVAL, TOUR];
  const newBoard = [ ...board ];
  for (var c = 0; c < 8; c++) {
    newBoard[0][c].piece = { type: layout[c], couleur: NOIR };
    //ajouteOrigine(NOIR, 0, c);
    newBoard[1][c].piece = { type: PION, couleur: NOIR };
    //ajouteOrigine(NOIR, 1, c);
    newBoard[6][c].piece = { type: PION, couleur: BLANC };
    //ajouteOrigine(BLANC, 6, c);
    newBoard[7][c].piece = { type: layout[c], couleur: BLANC };
    //ajouteOrigine(BLANC, 7, c);
    for (let r = 2; r < 6; r++) {
      newBoard[r][c].piece = undefined;
    }
  }
  return newBoard;
}

function Game() {
  const [board] = useState(initBoardLayout(initBoard()));
  const [selection, updateSelection] = useState(null);

  function onClick(e) {
    if (selection) {
      board[e.r][e.c].piece = board[selection.r][selection.c].piece;
      board[selection.r][selection.c].selected = false;
      board[selection.r][selection.c].piece = null;
      updateSelection(null);

    } else {
      updateSelection({ r: e.r, c: e.c });
      board[e.r][e.c].selected = true;
    }
  }

  function Row({brow: row}) {
  return (<tr>{ row.map((cell, index) => (
      <td key={`c-${index}`} onClick={() => onClick(cell)}><Cell black={cell.black} piece={cell.piece} r={cell.r} c={cell.c} selected={cell.selected}/></td>
  ))}</tr>);
  }

  return (<div>
        <table><tbody>
        { board.map((row, index) => (
            <Row key={`r-${index}`} brow={row} />
        )) }
        </tbody></table>
    </div>);
}
        
export default Game
