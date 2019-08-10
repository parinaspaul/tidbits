import Head from 'next/head';
import Navbar from './NavBar';

const Layout = (props) => (
    <div>
        <head>
            <title>tidbits</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"></link>
        </head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;