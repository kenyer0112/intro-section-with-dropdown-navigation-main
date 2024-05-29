import Section from "./Section";
import Menu from "./Menu";
import image_hero_mobile from "../src/assets/image-hero-mobile.png";
import Footer from "./Footer";

function App() {
  return (
    <main className="m-auto w-[95%]">
      <Menu />
      <img src={image_hero_mobile} alt="" className="sm:hidden w-full" />
      <Section />
      <Footer />
    </main>
  );
}

export default App;
