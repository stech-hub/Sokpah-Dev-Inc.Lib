
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="hero">
        <h1>Sokpah Dev Browser</h1>
        <p>Build. Learn. Solve.</p>
        <a href="/subscribe"><button>Go Pro</button></a>
      </section>
      <Footer />
    </main>
  );
}
