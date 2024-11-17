import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy, reset } from './store/slices/counter'
import { RootState } from './store'

function App() {
  // const [count, setCount] = useState(0)

  const { count }  =  useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>count in { count }</p>
        <button 
          onClick={() => dispatch( increment() )}
        >
          increment
        </button>
        <button 
          onClick={() => dispatch( decrement() )}
        >Decrement</button>

        <button 
          onClick={() => dispatch( incrementBy(5) )}
        >
          Increment by 2
        </button>
        <button
          onClick={() => dispatch( reset() )}
        >
          Reset
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
