import React from "react";
import { Logo } from "./components/Logo/Logo";
import { Footer } from "./components/Footer/Footer";
import styles from "./App.module.css";
import "./App.css";

function App() {
  return (
    <div className={styles.app}>
      <Logo />
      <main className={styles.content} />
      <Footer />
    </div>
  );
}

export default App;
