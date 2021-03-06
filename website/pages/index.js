import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ThemeColors from "../public/colors.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spades</title>
        <meta name="description" content="A VS Code Asexual-Themed Extension" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.h1}>Spades</h1>
        <h2 className={styles.h2}>
          A minimal, Asexual-styled VSCode Theme inspired by the Microsoft
          Palenight Theme
        </h2>
        <div className={styles.editor}>
          <Image
            src="/img/example.png"
            width={1919}
            height={979}
            quality={100}
          />
        </div>
        <h3 className={styles.h3}>Color Palette</h3>
        <div className={styles.palette}>
          {ThemeColors.palette.map((color, index) => {
            return (
              <div className={styles["color-box"]} key={index + 1}>
                <div className={styles["color-label"]} key={(index + 1) * -1}>
                  {color}
                </div>
                <button
                  className={styles["color-button"]}
                  style={{ backgroundColor: color }}
                  key={index}
                ></button>
              </div>
            );
          })}
        </div>
      </main>
      <footer className={styles.footer}>
        <Image src="/favicon.svg" width={80} height={80} />
      </footer>
    </div>
  );
}
