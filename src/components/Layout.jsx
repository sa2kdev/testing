import { Link, Outlet } from "react-router-dom";

function Layout(){
console.log('layout has been imported here...')


    return (

        <>
        <header>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
        </header>

        <Outlet />


        <footer>This is the footer </footer>

        </>

    )


}

export default Layout;