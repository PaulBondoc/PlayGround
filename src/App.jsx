import { useState } from "react";
import BlurBackground from "./components/BlurBackground";
import Categories from "./components/Categories";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Resources from "./components/Resources";
import Footer from "./components/Footer";

function App() {
  const [categoryId, setCategoryId] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(true);

  const handleCategoryClick = (categoryId) => {
    setCategoryId(categoryId);

    setCurrentCategory((prev) => !prev);

    setTimeout(() => {
      setCurrentCategory(true);
    }, 1);
  };
  return (
    <>
      <BlurBackground />

      <Navbar />

      <main className="px-3 xs:px-5 lg:px-10">
        <HeroSection />

        <Categories onCategoryClick={handleCategoryClick} />

        <Resources categoryId={categoryId} categoryChange={currentCategory} />
      </main>

      <Footer />
    </>
  );
}

export default App;
