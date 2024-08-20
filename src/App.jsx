import './App.css';
import { Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Trainers from './pages/Trainers';
import Classes from './pages/Classes';

function App() {
	return (
		<>
			<Navigation/>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/classes' element={<Classes/>}/>
				<Route path='/trainers' element={<Trainers/>}/>
				<Route path='/aboutUs' element={<AboutUs/>}/>
			</Routes>
		</>
	)
}

export default App;
