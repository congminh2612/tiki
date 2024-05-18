import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layouts/Layout'
import HomeScreen from './features/home/HomeScreen'
import BookScreen from './features/book/BookScreen'
import { CartScreen } from './features/cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path='/book/:id' element={<BookScreen />} />
          <Route path='/cart' element={<CartScreen />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
