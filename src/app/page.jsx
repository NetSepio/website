import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Platforms from '../components/Platforms';
import Winners from '../components/Winner';
import Connectivity from '../components/Connectivity';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-void w-full overflow-hidden">
            <NavBar />
            <Hero />
            <Platforms />
            <Winners />
            <Connectivity />
            <Subscribe />
            <Footer />
        </main>
    );
}
