class TicTacToe {
    constructor() {
      this.matrix = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
        ];
      this.currSym = 'x';
    }

    getCurrentPlayerSymbol() {
       return this.currSym;
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.matrix[rowIndex][columnIndex] == null) {
        if (this.currSym === 'o') {
            this.matrix[rowIndex][columnIndex] = this.currSym;
            this.currSym = 'x';
        } else {
       this.matrix[rowIndex][columnIndex] = this.currSym;
       this.currSym = 'o';
   }
    }
    }

    isFinished() {
        if ((this.getWinner() != null) || (this.isDraw() === true)){
            return true;
        }      
       return false;
    }

    getWinner() {
        let symb;
        if (this.currSym === 'x') {
            symb = 'o';
        } else {
            symb = 'x';
        }
        if ((symb === this.matrix[0][0] && symb === this.matrix[0][1] && symb === this.matrix[0][2])
        || (symb === this.matrix[0][0] && symb === this.matrix[1][0] && symb === this.matrix[2][0])
        || (symb === this.matrix[0][0] && symb === this.matrix[1][1] && symb === this.matrix[2][2])
        || (symb === this.matrix[0][2] && symb === this.matrix[1][2] && symb === this.matrix[2][2])
        || (symb === this.matrix[0][2] && symb === this.matrix[1][1] && symb === this.matrix[2][0])
        || (symb === this.matrix[2][0] && symb === this.matrix[2][1] && symb === this.matrix[2][2])
        || (symb === this.matrix[0][1] && symb === this.matrix[1][1] && symb === this.matrix[2][1])
        || (symb === this.matrix[1][0] && symb === this.matrix[1][1] && symb === this.matrix[1][2])) {
            return symb;
        }
        else{
        return null;
         }
     }

    noMoreTurns() {
         if(this.matrix[0][0] == null || this.matrix[0][1] == null || this.matrix[0][2] == null
        || this.matrix[1][0] == null || this.matrix[1][1] == null || this.matrix[1][2] == null
        || this.matrix[2][0] == null || this.matrix[2][1] == null || this.matrix[2][2] == null) {
            return false;
         }
         return true;


    }

    isDraw() {
        if ((this.noMoreTurns() === true) && (this.getWinner() === null)) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.matrix[rowIndex][colIndex] === null){
            return null;
        }
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
