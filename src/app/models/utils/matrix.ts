export class Matrix {
    private _matrix : Array<Array<number>>;
    private _size: { x: number, y: number };

    constructor(xSize: number, ySize: number = null) {
        this._size = { x: xSize, y: ySize ? ySize : xSize };
        this._matrix = [];
        let row = [];
        for (let y = 0; y < this._size.y; y++) {
            row.push(0);
        }
        for (let x = 0; x < this._size.x; x++) {
            this._matrix.push(row);
        }
        console.log(this._matrix);
    }

    public setValue(x: number, y: number, value: number): void {
        if (x >= this._size.x || x < 0 || y >= this._size.y || y < 0) {
            throw new Error("Index out of Matrix range.");
        }
        this._matrix[x][y] = value;
    }
}