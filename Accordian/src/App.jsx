
import './App.css'
import Accordian from './components/Accordian'

function App() {

  const data = [
    {
      title: "Javascript",
      content: "Js is a high level programming language."
    },
    {
      title: "React",
      content: "React is javacript labirary for building dynamic user interfaces."
    },
    {
      title: "Express JS",
      content: "Its a frameWork built in top of node js."
    },
    {
      title: "Node JS",
      content: "Node js is a js runtime environment."
    }
  ]

  return (
    <div className='container'>
      <Accordian data={data} />
    </div>
  )
}

export default App
