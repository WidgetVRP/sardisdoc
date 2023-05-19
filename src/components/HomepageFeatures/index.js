import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList1 = [
  
  {
    title: 'About',
    Svg: require('@site/static/img/SardisBook2.svg').default,
    description: (
      <>
        Learn the basics of Sardis Network and how it works, 
        integrate Sardis Network technologies into your company
      </>
    ),
    href: '/docs/category/about'
  },
  {
    title: 'Sardis Stablecoins',
    Svg: require('@site/static/img/sardis-logo.svg').default,
    description: (
      <>
        Based on newest, tested blockchain technology 
        intensely built for speed, the dedicated Sardis Stablecoin
      </>
    ),
    href: '/docs/category/sardis-stablecoins'
  },
  {
    title: 'Build',
    Svg: require('@site/static/img/sardiswrench2.svg').default,
    description: (
      <>
        Find all the resources you need in order to start testing, deploying, and interacting with system contracts on the network.
      </>
    ),
    href: '/docs/category/developers'
  },
];


function Feature({Svg, title, description, href}) {
  return (
    
    <div className={clsx('col col--4')}>
      <div className={styles.eleman}>
      <div className={styles.card}>
        <div className="text--center">
          
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <a href= {href} >
            <h3>{title}</h3>
            <p>{description}</p>
          </a>
      </div>
      </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList1.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
