
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './user'
import Friends from './Friends'
// import Friend from './Friend'
function App() {
  function hendelClick() {
    alert('button clicked')
  }
  const hendleClick2 = () => {
    alert('Button 2 Clicked')
  }
  const hendelClick4 = (num) =>{
    alert(num + 5);
  }
  return (
    <>
      <h1>React Core Concept Part 2</h1>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>

      <button onClick={hendelClick}>Click Me</button>
      <button onClick={()=>hendleClick2()}>Click 2</button>
      <button onClick={() =>{alert('Click 3')}}>Click 3</button>
      <button onClick={() => hendelClick4(3)}>Click 4</button>
    </>
  )
}

export default App
