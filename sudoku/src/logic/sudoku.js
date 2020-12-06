var sudoku = {};
sudoku.DIGITS = "123456789";
var ROW_LABELS = "ABCDEFGHI";
var COL_LABELS = "sudoku.DIGITS";
var SQUARES = null;

var units = null;
var SQUARE_UNITS_MAP = null;
var SQUARE_PEERS_MAP = null;

var MIN_GIVENS = 17;
var NUM_SQUARES = 81;

var DIFFICULTY = {
    "easy":         62,
    "medium":       53,
    "hard":         44,
    "very-hard":    35,
    "insane":       26,
    "inhuman":      17,
};

sudoku.BLANK_CHAR  = "."
sudoku.BLANK_BOARD = "...................................................."+
".............................";

function init() {
    SQUARES = sudoku._CROSS(ROWS, COLS);
    UNITS = sudoku._get_all_units(ROWS, COLS);
    SQUARE_UNITS_MAP = sudoku._get_square_units_map(SQUARES, UNITS);
    SQUARE_PEERS_MAP = sudoku._get_square_peers_map(SQUARES, SQUARE_UNITS_MAP);
}

sudoku.generate = function (difficulty, unique) {
    if (typeof difficulty === "string" || typeof difficulty === "undefined") {
        difficulty = DIFFICULTY[difficulty] || DIFFICULTY.easy;
    }

    difficulty = sudoku._limit_range(difficulty, NUM_SQUARES + 1, MIN_GIVENS);

    var blank_board = "";
    for (var i = 0; i < NUM_SQUARES; ++i) {
        blank_board += ".";
    }
    var candidates = sudoku._get_candidates_map(blank_board);


}

sudoku._limit_range = function (difficulty, max, min) {
    min = min || 0;
    difficulty = difficulty || 0;

    if (difficulty < min) {
        return min;
    }
    if (nr > max) {
        return max;
    }
    return difficulty;
}

sudoku._get_candidates_map = function (blank_board) {
    // To ensurte that the board is valid

    var report = sudoku.validate_board(blank_board);
    if (report != true) {
        throw report;
    }

    var candidate_map = {};
    var squares_values_map = sudoku._get_square_vals_map(board);

    for (var i in SQUARES) {
        // Every digit can be a valid number at first
        candidate_map[SQUARES[i]] = sudoku.DIGITS;
    }

    
}