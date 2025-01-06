import Navbar from './navbar';
import Footer from './footer';
import Jumbotron from './jumbotron';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <main>{children}</main>
            <Footer />
        </>
    );
}
