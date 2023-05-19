import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/About%20Sardis">
            Let's Start ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Documents`}
      description="Sardis Network (Sardis) is a high-efficiency and energy-saving multichain crypto ecosystem aiming to bring new areas of operation to the crypto landscape. Our network is compatible with smart contracts and supports high- performance transactions. The endogenous coins of Sardis are SRDX and SRDS. SRDX coin is pegged to the US dollar in value and is only used internally within the network, while SRDS is a floating value. Users are expected to earn SRDX (through dPOS staking, stakedex staking or DEX operations) and convert their earning to SRDS for when they want to monetize. <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
