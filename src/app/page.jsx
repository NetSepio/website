import Hero from '../components/Hero';
import Connectivity from '../components/Connectivity';
import Erebrus from '../components/Erebrus';
import Winners from '../components/Winner';
import Technology from '../components/Technology';
import Success from '../components/Success';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-black w-full overflow-hidden">
            <Hero />
            <Connectivity />
            <Erebrus />
            <Winners />
            <Technology />
            <Success />
            <Subscribe />
            <Footer />
        </main>
    );
}
