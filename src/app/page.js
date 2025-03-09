import styles from "./page.module.css";
import Navbar from "@/app/components/Navbar";
import Footer from "../app/components/Footer"; // Your background image
import Image from "./components/image3";
import Project from "@/app/components/ProjectSection";
import Contact from "@/app/components/ContactSection";
import About from "@/app/components/AboutSection";
import Sidebar from "@/app/components/sidebar";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Sidebar />
      <Image alt="My Image" /> {/* Add meaningful alt text here */}
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
