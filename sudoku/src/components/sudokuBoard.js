import React from 'react';
import { useSudokuContext } from '../context/sudokuContext';

export const SudokuBoard = (props) => {
    const rows = [0,1,2,3,4,5,6,7,8,9];
    let {
        numberSelected,
        gameArray,
        fastMode,
        cellSelected,
        initArray 
    } = useSudokuContext();

    function _selectedCell(indexOfArray, value, highlight) {
        if (value !== '0') {
          if (initArray[indexOfArray] === '0') {
            return (
              <td className={`game__cell game__cell--userfilled game__cell--${highlight}selected`} key={indexOfArray} onClick={() => props.onClick(indexOfArray)}>{value}</td>
            )
          } else {
            return (
              <td className={`game__cell game__cell--filled game__cell--${highlight}selected`} key={indexOfArray} onClick={() => props.onClick(indexOfArray)}>{value}</td>
            )
          }
        } else {
          return (
            <td className={`game__cell game__cell--${highlight}selected`} key={indexOfArray} onClick={() => props.onClick(indexOfArray)}>{value}</td>
          )
        }
      }

    return (
        <section className="board_section">
            <table className="board_game">
                <tbody>
                    {
                        rows.map((row) => {
                            return (
                                <tr className="board_row" key={row}>
                                    {
                                        rows.map((column)=> {
                                            const indexOfArray = row*9 + column
                                            const value = gameArray[indexOfArray];

                                            if (cellSelected === indexOfArray) {
                                                return _selectedCell(indexOfArray, value, 'highlight');
                                            }
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}