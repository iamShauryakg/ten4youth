import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home_page from './pages/Home'
import Solution from './pages/Solution'
import Strategy from './pages/Strategy'
import AccompaniedPage from './pages/AccompaniedPage'
import Action from './pages/Action'
import Impact from './pages/Impact'
import Initiatives from './pages/Initiatives'
import Layout from './Components/Layout'

import JoinTen4Youth from './pages/JoinTen4Youth'
import Usa from './pages/International_Network/Usa'
import France from './pages/International_Network/France'
import India from './pages/International_Network/India'
import Contact from './pages/Contact'
import Belgium from './pages/International_Network/Belgium'
import Lebanon_page from './pages/International_Network/Liban';
import Nepal from './pages/International_Network/Nepal'
import Philippines from './pages/International_Network/Philippines'
import PageNotFound from './pages/PageNotFound'
import Indonesia from './pages/International_Network/Indonesia'

import International_Network from './pages/International_Network_Page'
import Footer from './Components/Footer'
import England from "./pages/International_Network/England"
import Luxembourg from "./pages/International_Network/Luxembourg"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home_page />} />
          <Route path='/solution' element={<Solution />} />
          <Route path='/impact' element={<Impact />} />
          <Route path='/action' element={<Action />} />
          <Route path='/strategy' element={<Strategy />} />
          <Route path ='/accompaniedpage' element={<AccompaniedPage />} />
          <Route path='/initiatives' element={<Initiatives />} />
          <Route path='/usa' element={<Usa />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/belgium' element={<Belgium />} />
          <Route path='/france' element={<France />} />
          <Route path='/india' element={<India />} />
          <Route path='/jointen4youth' element={<JoinTen4Youth />} />
          <Route path='/join_ten4youth' element={<JoinTen4Youth />} />
          <Route path='/international-network' element={<International_Network />} />
          <Route path='/lebanon' element={<Lebanon_page />} />
          <Route path='/nepal' element={<Nepal />} /> 
          <Route path='/philippines' element={<Philippines />} />
          <Route path='/indonesia' element={<Indonesia />} />
          <Route path='/England' element={<England />} />
          <Route path='/*' element={<PageNotFound />} />
          <Route path='/luxembourg' element={<Luxembourg />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
