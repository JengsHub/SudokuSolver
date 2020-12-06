import './App.css';
import {SudokuProvider} from './context/sudokuContext';
import {Game} from './game';

function App() {
  return (
    <SudokuProvider>
      <Game /> 
    </SudokuProvider>
  )
}

export default App;
