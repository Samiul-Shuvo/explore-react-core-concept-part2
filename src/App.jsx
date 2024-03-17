
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';
function App() {

  function handleCLick(){
    alert('button Clicked');
  }

  const addToFive = (num) =>{
    alert (num+5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>





      <button onClick={handleCLick}>Click Me</button>
      <button onClick={() => {alert('third Click')}}>Click Me</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
