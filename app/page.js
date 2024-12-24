import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ClearQuant - Transparent AI Trading on Solana</title>
        <meta
          name="description"
          content="ClearQuant is a verifiable AI-powered trading bot on Solana, ensuring transparent and secure cryptocurrency investments."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <img src="/logo.png" alt="ClearQuant Logo" className={styles.logo} />
        <nav>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>ClearQuant</h1>
          <p className={styles.description}>
            Transparent and verifiable AI trading bot on Solana. Manage your
            crypto investments with confidence.
          </p>
          <a href="#contact" className={styles.cta}>
            Get Started
          </a>
        </section>

        {/* Features Section */}
        <section id="features" className={styles.features}>
          <h2>Features</h2>
          <div className={styles.featureList}>
            <div className={styles.feature}>
              <h3>Transparent AI Decisions</h3>
              <p>
                Utilizes ZKML technology to ensure all AI decisions are
                verifiable and transparent.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Secure PKP Wallets</h3>
              <p>
                Employs multisignature wallets for secure and non-custodial fund
                management.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Optimal Trading</h3>
              <p>
                Integrates Jupiter API for the best trading routes and efficient
                token swaps.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className={styles.howItWorks}>
          <h2>How It Works</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <h3>Data Collection</h3>
              <p>
                Aggregates market and on-chain data from CoinMarketCap,
                CoinGecko, Dune Analytics, and Flipside Crypto.
              </p>
            </div>
            <div className={styles.step}>
              <h3>AI Decision Making</h3>
              <p>
                AI models analyze data to determine token investments and
                portfolio allocations.
              </p>
            </div>
            <div className={styles.step}>
              <h3>Trading Execution</h3>
              <p>
                Executes trades using Solana’s fast and cost-effective
                blockchain.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="contact" className={styles.contact}>
          <h2>Get Started with ClearQuant</h2>
          <p>
            Join us today and take control of your crypto investments with our
            transparent and secure AI trading bot.
          </p>
          <a href="mailto:contact@clearquant.com" className={styles.cta}>
            Contact Us
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} ClearQuant. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
