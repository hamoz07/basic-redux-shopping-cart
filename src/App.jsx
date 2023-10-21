import { Route, Routes } from 'react-router-dom'
import Products from './components/products'
import NavBar from './components/nav'
import Cart from './components/cart'
import NavApp from './components/nav'

function App() {

  return (
    <div className='App'>
      <NavApp />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  )
}

export default App
