import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import OrientationContext from './store/orientationContext';

// components
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Trainers from './pages/Trainers';
import Classes from './pages/Classes';
import Footer from './components/Footer/Footer';

function App() {
	const [orientation, setOrientation] = useState(undefined);
    const [activeNav, setActiveNav] = useState('home');

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
			<Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
			<Routes>
                <Route path="/" element={<Navigate to="/home" />}/>
				<Route path='/home' element={<Home setActiveNav={setActiveNav} />}/>
				<Route path='/classes' element={<Classes/>}/>
                <Route path='/classes/:classId' element={<Classes/>}/>
				<Route path='/trainers' element={<Trainers/>}/>
				<Route path='/aboutUs' element={<AboutUs/>}/>
			</Routes>
            <Footer setActiveNav={setActiveNav} />
		</OrientationContext.Provider>
	)
}

export default App;
