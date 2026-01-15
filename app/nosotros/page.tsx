import Nav from "../../components/Nav";
import AboutSection from "./AboutSection"; 

export default function NosotrosPage() {
  return (
    <main className="bg-black min-h-screen">
      <Nav />
      <div className="pt-32 text-center">
        <h1 className="text-5xl font-black text-white">Nosotros</h1>
      </div>
      <AboutSection />
    </main>
  );
}