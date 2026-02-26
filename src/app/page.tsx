import Header from "../components/Header";
import Hero from "../components/Hero";
import SignupForm from "../components/SignupForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SignupForm />
      </main>
      <Footer />
    </>
  );
}
