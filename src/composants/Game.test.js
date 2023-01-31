import { initBoard, initBoardLayout } from "./Game";

test('Fonction initBoard', () => {
    const board = initBoard();
    expect(board.length).toBe(8);
    expect(board[0].length).toBe(8);
    expect(board[0][0]).toEqual({ r:0, c:0, black: false });
    expect(board[1][0]).toEqual({ r:1, c:0, black: true });
});

test('Fonction initBoardLayout', () => {
    const board = initBoardLayout(initBoard());
    expect(board.length).toBe(8);
    expect(board[0].length).toBe(8);
    expect(board[0][0]).toEqual({ r:0, c:0, black: false, piece: { type: 2, couleur: "noir" } });
    expect(board[2][0]).toEqual({ r:2, c:0, black: false, piece: undefined });
});
