import React, {useState, useEffect} from 'react';
import moment from 'moment';

import {useSudokuContext} from './context/sudokuContext'
import { SudokuBoard } from './components/sudokuBoard';

export const Game = () => {
    let { 
        numberSelected, setNumberSelected,
        gameArray, setGameArray,
        difficulty, setDifficulty,
        setTimeGameStarted,
        fastMode, setFastMode,
        cellSelected, setCellSelected,
        initArray, setInitArray,
        setWon 
    } = useSudokuContext();

    let [ history, setHistory ] = useState([]);

    return (
        <div>
            <div className="innerContainer">
                <SudokuBoard>

                </SudokuBoard>
            </div>
        </div>
    )
}