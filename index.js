function solveSudoku(board) {
  // Fonction récursive pour résoudre la grille
  function backtrack(row, col) {
    // Si on est arrivé à la fin de la grille, c'est que la grille est résolue
    if (row === 9) {
      return true;
    }

    // Si on est arrivé à la fin de la ligne, on passe à la ligne suivante
    if (col === 9) {
      return backtrack(row + 1, 0);
    }

    // Si la case est déjà remplie, on passe à la case suivante
    if (board[row][col] !== 0) {
      return backtrack(row, col + 1);
    }

    // On essaie tous les chiffres possibles dans la case
    for (let num = 1; num <= 9; num++) {
      // Si le chiffre est valide, on l'insère dans la case et on passe à la case suivante
      if (isValid(row, col, num)) {
        board[row][col] = num;
        if (backtrack(row, col + 1)) {
          return true;
        }
        board[row][col] = 0;
      }
    }

    // Si aucun chiffre n'est valide, on doit revenir en arrière
    return false;
  }

  // Fonction pour vérifier si un chiffre est valide dans une case
  function isValid(row, col, num) {
    // Vérifier la ligne
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num) {
        return false;
      }
    }

    // Vérifier la colonne
    for (let j = 0; j < 9; j++) {
      if (board[j][col] === num) {
        return false;
      }
    }

    // Vérifier la région
    const regionRow = Math.floor(row / 3) * 3;
    const regionCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[regionRow + i][regionCol + j] === num) {
          return false;
        }
      }
    }

    // Si le chiffre est valide dans la case, retourner true
    return true;
  }

  // Appeler la fonction backtrack avec les indices (0, 0) pour commencer à résoudre la grille
  backtrack(0, 0);
}

// Grille de Sudoku à résoudre
const board = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

// Résoudre la grille de Sudoku
solveSudoku(board);

// Afficher la grille résolue
console.table(board);


const boardhard = [
  [0, 0, 0, 7, 9, 0, 0, 6, 0],
  [0, 8, 0, 0, 0, 0, 0, 0, 0],
  [0, 7, 9, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 7, 0, 0, 0, 0],
  [9, 0, 2, 0, 0, 0, 0, 0, 5],
  [0, 5, 0, 0, 0, 0, 0, 9, 0],
  [0, 0, 0, 0, 0, 4, 1, 0, 0],
  [0, 0, 0, 2, 0, 0, 9, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
solveSudoku(boardhard);
console.table(boardhard);

/* const boardhard2 = [
  [4, 2, 0, 0, 0, 3, 0, 0, 5],
  [8, 0, 7, 0, 2, 0, 0, 0, 0],
  [9, 0, 0, 0, 0, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 2, 1, 7, 0],
  [9, 0, 0, 0, 0, 0, 0, 8, 0],
  [0, 6, 0, 0, 0, 0, 0, 0, 3],
  [8, 4, 0, 5, 0, 0, 0, 0, 0],
  [0, 7, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 1, 0, 0, 0, 3, 0, 0],
];
solveSudoku(boardhard2);
console.table(boardhard2); */