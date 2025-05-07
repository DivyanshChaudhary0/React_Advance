
import React from 'react'
import {Route,Routes} from "react-router-dom"
import App from '../App'
import Comments from '../components/Comments'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/comments' element={<Comments/>} />
    </Routes>
  )
}

export default AppRoutes