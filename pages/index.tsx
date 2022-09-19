import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import logoImg from '../public/logo@2x.png';
import logoBigImg from '../public/logo1@2x.png';
import planetImg from '../public/earth@2x.png';
import weightImg from '../public/weight@2x.png';
import walletImg from '../public/wallet@2x.png';
import tickImg from '../public/tick@2x.png';
import rocketImg from '../public/rocket@2x.png';

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Helios</title>
        <meta name="description" content="Helios: The evolution of solar, powered by crypto." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className='bg-purple-gradient'>
          <header className=' pt-10'>
            <div className='container mx-auto flex items-center justify-center'>
              <Image src={logoImg} width={72} height={72} />
            </div>
          </header>
          <section className='flex flex-col md:flex-row items-center container mx-auto max-w-5xl px-4 md:px-0 mt-10 md:mt-0'>
            <div className='max-w-lg md:mr-10'>
              <h1 className="text-6xl mb-4 uppercase font-semibold">The evolution of solar, powered by crypto</h1>
              <p className='mb-4'>Helios enables anyone anywhere to profitably fight climate change. Fund high-impact solar projects around the world today!</p>
              <div>
                <a className="text-purple" href="https://discord.gg/9sstTzZVFJ" target="_blank" rel="noopener noreferrer">Learn more</a>
              </div>
            </div>
            <div>
              <Image src={planetImg} width={684} height={684} />
            </div>
          </section>
        </div>
        <section className='mt-32 container mx-auto max-w-5xl px-4 md:px-0'>
          <h2 className='text-3xl uppercase font-semibold text-center mb-8'>Make a difference with Defi</h2>
          <div className='flex flex-col md:grid md:grid-cols-4 md:grid-gap-4 border-2 border-pink shadow-lg rounded-lg px-10 py-6'>
            <div className='flex flex-col items-center'>
              <Image src={weightImg} height={144} width={144} />
              <h3 className='text-lg font-semibold'>42,000 KG</h3>
              <p className=''>Emissions Averted</p>
            </div>
            <div className='flex flex-col items-center'>
              <Image src={rocketImg} height={144} width={144} />
              <h3 className='text-lg font-semibold'>$250,000</h3>
              <p className=''>TVL</p>
            </div>
            <div className='flex flex-col items-center'>
              <Image src={tickImg} height={144} width={144} />
              <h3 className='text-lg font-semibold'>7</h3>
              <p className=''>Projects Funded</p>
            </div>
            <div className='flex flex-col items-center'>
              <Image src={walletImg} height={144} width={144} />
              <h3 className='text-lg font-semibold'>$10,000</h3>
              <p className=''>Returns Generated</p>
            </div>
          </div>
        </section>
        <div className='bg-blue-gradient'>
          <div className='container mx-auto max-w-5xl px-4 md:px-0'>
            <section className='mt-32 flex flex-col items-center'>
              <h2 className='text-3xl uppercase font-semibold text-center mb-8'>How it works</h2>
              <p className='max-w-lg text-center'>We fund profitable solar projects around the world, averting millions of tonnes of CO2 emissions while earning market-leading yield. It&apos;s that simple.</p>
              <ol className='mt-10'>
                <li className='p-8 border-2 border-pink shadow-lg w-80 rounded-lg text-center'>
                  <h3 className='text-lg mb-2 font-semibold'>1. Invest USDC</h3>
                  <p>Deposit USDC into Solar Pools through Helios</p>
                </li>
                <li className='p-8 border-2 border-pink shadow-lg w-80 rounded-lg text-center mt-8'>
                  <h3 className='text-lg mb-2 font-semibold'>2 Build Solar</h3>
                  <p>Helios works with world-class solar developers to build high impact projects around the world.</p>
                </li>
                <li className='p-8 border-2 border-pink shadow-lg w-80 rounded-lg text-center mt-8'>
                  <h3 className='text-lg mb-2 font-semibold'>3. Sell Clean Energy</h3>
                  <p>Our installations sell clean energy to commercial customers backed by 20-year PPA contracts.</p>
                </li>
              </ol>
            </section>
            <section className='mt-32'>
              <h2 className='text-3xl uppercase font-semibold mb-8'>Impact beyond energy</h2>
              <div className='flex flex-col md:flex-row'>
                <div className='md:w-2/3 mb-4 md:mb-0 rounded-lg aspect-[4/3] flex flex-col place-content-end bg-no-repeat bg-center bg-cover' style={{backgroundImage: `url("/bg2@2x.png")`}}>
                  <div className='bg-black-gradient pt-8 pb-4 px-6'>
                    <h3 className='text-2xl uppercase font-semibold text-white'>Illuminating hospitals in Guatemala</h3>
                    <p className='text-white'>Women should never have to go through childbirth in the dark. That&apos;s why Helios is funding reliable solar for seven hospitals across the country.</p>
                  </div>
                </div>
                <div className='flex flex-col md:w-1/3 md:ml-4'>
                  <div className='rounded-lg aspect-[4/3] flex flex-col place-content-end mb-4 bg-no-repeat bg-center bg-cover' style={{backgroundImage: `url("/bg1@2x.png")`}}>
                    <div className='bg-black-gradient pt-8 pb-4 px-6'>
                      <h3 className='text-2xl uppercase font-semibold text-white'>Pune</h3>
                      <p className='text-white'>We&apos;re saving our commercial customers 47% on their energy bill. Less coal, more solar. </p>
                    </div>
                  </div>
                  <div className='rounded-lg aspect-[4/3] flex flex-col place-content-end bg-no-repeat bg-center bg-cover' style={{backgroundImage: `url("/bg@2x.png")`}}>
                    <div className='bg-black-gradient pt-8 pb-4 px-6'>
                      <h3 className='text-2xl uppercase font-semibold text-white'>Kerala</h3>
                      <p className='text-white'>The largest auto dealership in India trusts Helios to provide clean energy for dozens of locations. </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className='bg-pink-gradient'>
          <div className='container mx-auto max-w-5xl px-4 md:px-0'>
            <section className='mt-32'>
              <h2 className='text-3xl uppercase font-semibold mb-8'>Our mission</h2>
              <div className='md:flex'>
                <p className='md:w-1/2 md:mr-8'>Helios aims to avert 10 million tons of CO2 by 2030. To achieve this ambitious goal, we&apos;ll need the full support of the web3 community, united against the existential threat of our changing climate.</p>
                <p className='md:w-1/2 md:ml-8'>Over the last decade, blockchain technology has matured from a theoretical solution to a fully fledged financial ecosystem. It&apos;s time to use this technology for a cause worthy of its transformative power. Through Helios, crypto can save the world.</p>
              </div>
            </section>
            <section className='mt-32 text-center'>
              <p className='text-4xl mb-8 font-semibold'>“People feel hopeless in the fight against climate change. Helios provides the power to make a real difference”</p>
              <p>William Skinner - CEO</p>
            </section>
            <section className='mt-32'>
              <div className='flex flex-col md:flex-row items-center border-2 border-pink shadow-lg rounded-lg max-w-3xl py-20 px-16 mx-auto'>
                <div className=''>
                  <Image src={logoBigImg} width={300} height={300} />
                </div>
                <div className='mt-4 md:mt-0 md:ml-10'>
                  <h2 className="text-3xl uppercase font-semibold mb-4">Join our Discord</h2>
                  <p className='mb-8'>Stay up to date on all the latest Helios updates by joining our community on Discord. </p>
                  <div>
                    <a className="text-white rounded-full bg-purple px-8 py-2" href="https://discord.gg/9sstTzZVFJ" target="_blank" rel="noopener noreferrer">Join Us</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className='flex flex-col md:flex-row items-center container mx-auto max-w-5xl mt-32 px-4 md:px-0'>
          <div className='max-w-lg md:mr-10'>
            <h1 className="text-6xl mb-4 uppercase font-semibold">Invest in solar projects around the world</h1>
            <p className='mb-4'>Join us in funding high-impact projects making a real difference in the fight against climate change</p>
            <div>
              <a className="text-purple" href="https://discord.gg/9sstTzZVFJ" target="_blank" rel="noopener noreferrer">Learn more</a>
            </div>
          </div>
          <div>
            <Image src={planetImg} width={684} height={684} />
          </div>
        </section>
      </main>

      <footer className='bg-purple-gradient-inverted mt-32 pb-10 px-4 md:px-0'>
        <div className='container mx-auto flex items-center'>
          <Image src={logoImg} width={72} height={72} />
          <span className='ml-6'>Helios Copyright Limited</span>
        </div>
      </footer>
    </div>
  )
}

export default Home
