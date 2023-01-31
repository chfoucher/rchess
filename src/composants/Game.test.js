import { initBoard, initBoardLayout } from "./Game";

describe('Fonction initBoard', () => {
    const board = initBoard();
    it('should return an 8x8 array', () => {
        expect(board.length).toBe(8);
        expect(board[0].length).toBe(8);
    })
    it('should alternate black and white cells', () => {
        expect(board[0][0]).toEqual({ r:0, c:0, black: false });
        expect(board[1][0]).toEqual({ r:1, c:0, black: true });
    })
});

describe('Fonction initBoardLayout', () => {
    const board = initBoardLayout(initBoard());
    it('should return an 8x8 array', () => {
        expect(board.length).toBe(8);
        expect(board[0].length).toBe(8);
    })
    it('should setup pieces for a new game', () => {
        expect(board[0][0]).toEqual({ r:0, c:0, black: false, piece: { type: 2, couleur: "noir" } });
        expect(board[2][0]).toEqual({ r:2, c:0, black: false, piece: undefined });
    })
});
