import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works } from "./components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <div className='relative z-0 bg-primary'>
                    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                        <Navbar />
                        <Hero />
                    </div>
                    <About />
                    <Experience />
                    <Tech />
                    <Works />
                    <div className='relative z-0'>
                        <Contact />
                        <StarsCanvas />
                    </div>
                </div>
            </BrowserRouter>
            <ToastContainer />
        </>
    )
}

export default App
