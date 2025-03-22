import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import CustomLayout from './components/layout/CustomLayout'

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<CustomLayout/>} />
    //   </Routes>
    // </BrowserRouter>
    <CustomLayout/>
  )
}

export default App
