import { Outlet } from 'react-router-dom';
import { Navbar } from './ui/components/NavBar';
// import { Navbar } from './ui/components/NavBar';
export const HeroesApp = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
