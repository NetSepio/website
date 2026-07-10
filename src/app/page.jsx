import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Connectivity from '../components/Connectivity';
import Platforms from '../components/Platforms';
import Winners from '../components/Winner';
import Technology from '../components/Technology';
import Success from '../components/Success';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-void w-full overflow-hidden">
            <NavBar />
            <Hero />
            <Connectivity />
            <Platforms />
            <Winners />
            <Technology />
            <Success />
            <Subscribe />
            <Footer />
        </main>
    );
}
