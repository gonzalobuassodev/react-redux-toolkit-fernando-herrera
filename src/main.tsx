import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store'
// import { Pokemon } from './Pokemon.tsx'
import { TodoApp } from './TodoApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      {/* <Pokemon /> */}
      <TodoApp />
    </Provider>
  </StrictMode>,
)
