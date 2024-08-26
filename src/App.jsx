import './App.css';
import { Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Trainers from './pages/Trainers';
import Classes from './pages/Classes';
import { useState, useEffect } from 'react';

import OrientationContext from './store/orientationContext';

function App() {
	const [orientation, setOrientation] = useState(undefined);

    useEffect(() => {
        window.matchMedia("(orientation: portrait)").addEventListener("change", e => {
            const portrait = e.matches;
        
            if (portrait) {
                setOrientation('portrait');
            } else {
                setOrientation('landscape');
                
            }
        });

        if (orientation == undefined){
            window.matchMedia("(orientation: portrait)").matches ? setOrientation('portrait') : setOrientation('landscape');
        }
    }, [])

	return (
		<OrientationContext.Provider value={orientation}>
			<Navigation/>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/classes' element={<Classes/>}/>
				<Route path='/trainers' element={<Trainers/>}/>
				<Route path='/aboutUs' element={<AboutUs/>}/>
			</Routes>
		</OrientationContext.Provider>
	)
}

export default App;
