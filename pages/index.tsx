import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import impactImg from '../public/home/impact.svg';
import logoImg from '../public/heliosdao-logo.png';
import monitorImg from '../public/home/monitor.svg';
import powerImg from '../public/home/power.svg';
import profitImg from '../public/home/profit.svg';
import returnsImg from '../public/home/returns.svg';
import tokensImg from '../public/home/tokens.svg';
import transparencyImg from '../public/home/transparency.svg';
import votesImg from '../public/home/votes.svg';
import imgProject1 from '../public/home/project1.png';
// import imgProject2 from '../public/home/project2.png';

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>HeliosDAO</title>
        <meta name="description" content="HeliosDAO: Invest Crypto, Fund Solar, Save Our Climate." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='flex justify-between pt-4 px-6 pb-6 sm:pb-48 bg-yellow-gradient bg-no-repeat bg-bottom bg-[length:100%_400%]'>
        <div>
          <Image src={logoImg} width={52} height={46} />
        </div>
        <nav className="text-lg font-semibold">
          {/* <a href='#'>Invest</a> */}
        </nav>
      </header>

      <main className="">
        <div className="max-w-3xl mx-auto text-center pb-36 px-6">
          <h1 className="font-semibold text-7xl mb-6">
            <div className='mb-4'>
              Invest Crypto
            </div>
            <div className='mb-4'>
              Fund Solar
            </div>
            <div>
              Save Our Climate
            </div>
          </h1>

          <p className="mb-16 text-2xl">
            Stable crypto returns from real world solar projects around the globe.
          </p>

          <p>
            <a className="bg-yellow rounded-2xl py-2 px-4 text-xl display-inline-block" href='https://www.notion.so/heliosdao/Investment-Process-e27d1ff6a7de4d6981328b990966fa5a' rel='noopener noreferrer nofollow'>Start Investing</a>
            <a className="bg-yellow rounded-2xl py-2 px-4 text-xl display-inline-block ml-8" href='https://discord.gg/9sstTzZVFJ' rel='noopener noreferrer nofollow'>Join Discord</a>
          </p>
        </div>

        <div className='px-8'>
          <Image src={tokensImg} />
        </div>

        <div className='bg-gradient-to-b from-white to-light-yellow'>
          <div className="container max-w-screen-lg mx-auto pt-20 pb-16 px-6">
            <div className="flex sm:gap-0 gap-2 mb-12 sm:mb-24 sm:items-center flex-col sm:flex-row">
              <div className="basis-1/2 sm:order-2 sm:text-center">
                <Image src={impactImg} width='200px' />
              </div>
              <div className='basis-1/2'>
                <h3 className="font-semibold text-2xl mb-3">Invest in Impact</h3>
                <p>Directly fund high impact solar projects reducing thousands of tonnes of CO2 emissions</p>
              </div>
            </div>
            <div className="flex sm:gap-0 gap-2 mb-12 sm:mb-24 sm:items-center flex-col sm:flex-row">
              <div className="basis-1/2 sm:text-center">
                <Image src={transparencyImg} width='200px' />
              </div>
              <div className='basis-1/2'>
                <h3 className="font-semibold text-2xl mb-3">Maximum Transparency</h3>
                <p>Track your money in real time, from placement to production to power generation</p>
              </div>
            </div>
            <div className="flex sm:gap-0 gap-2 mb-12 sm:mb-24 sm:items-center flex-col sm:flex-row">
              <div className="basis-1/2 sm:order-2 sm:text-center">
                <Image src={returnsImg} width='200px' />
              </div>
              <div className='basis-1/2'>
                <h3 className="font-semibold text-2xl mb-3">Industry Leading Returns</h3>
                <p>Investing in clean energy generates 15%+ APY, safe from the volatility of crypto markets</p>
              </div>
            </div>
            <div className="flex sm:gap-0 gap-2 sm:items-center flex-col sm:flex-row">
              <div className="basis-1/2 sm:text-center">
                <Image src={powerImg} width='200px' />
              </div>
              <div className='basis-1/2'>
                <h3 className="font-semibold text-2xl mb-3">Power of Crypto</h3>
                <p>Borderless digital currency allows Helios to invest where big banks fear to tread.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container max-w-screen-lg mx-auto pt-20 pb-16 px-6">
          <h2 className="font-semibold text-5xl text-center mb-16">How It Works</h2>
          <div className='flex mb-16 items-center flex-col sm:flex-row'>
            <div className='basis-1/2 text-center mb-6 sm:order-2 sm:mb-0'>
              <Image src={votesImg} width='300px' />
            </div>
            <div className='basis-1/2 flex'>
              <p className="font-semibold text-2xl pr-12">1</p>
              <div>
                <h3 className="font-semibold text-2xl mb-2.5">Community Votes</h3>
                <p className='text-base'>The Helios community votes on which projects are added to Solar Pools based on Impact and Yield</p>
              </div>
            </div>
          </div>
          <div className='flex mb-16 items-center flex-col sm:flex-row'>
            <div className='basis-1/2 text-center mb-6 sm:order-2 sm:mb-0'>
              <Image src={profitImg} width='300px' />
            </div>
            <div className='basis-1/2 flex'>
              <p className="font-semibold text-2xl pr-12">2</p>
              <div>
                <h3 className="font-semibold text-2xl mb-2.5">Invest, Profit</h3>
                <p className='text-base'>Sunvestors provide capital to Solar Pools to fund real world solar projects and profit from the clean energy generated</p>
              </div>
            </div>
          </div>
          <div className='flex mb-16 items-center flex-col sm:flex-row'>
            <div className='basis-1/2 text-center mb-6 sm:order-2 sm:mb-0'>
              <Image src={monitorImg} width='300px' />
            </div>
            <div className='basis-1/2 flex'>
              <p className="font-semibold text-2xl pr-12">3</p>
              <div>
                <h3 className="font-semibold text-2xl mb-2.5">Monitor Impact &amp; Returns</h3>
                <p className='text-base'>Monitor the progress of projects, energy produced, carbon offset, and returns in real time with our intuitive dashboard</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light-yellow py-16">
          <div className='container mx-auto px-6'>
            <div className='text-center'>
              <h2 className='font-semibold text-5xl mb-2'>Our Projects</h2>
              <p className='mb-12 max-w-sm mx-auto'>HeliosDAO works with experienced solar developers around the world to deploy capital into high impact, high return projects.</p>
            </div>
          </div>
          <div>
            <div className='relative overflow-hidden'>
              <div className='flex w-800 mx-auto max-w-full'>
                <div className='px-10 min-w-full'>
                  <div className='bg-white border border-solid rounded-md border-slate-200'>
                    <Image src={imgProject1} width={800} height={451} />
                    <div className='py-7 px-9'>
                      <h3 className='font-semibold text-2xl'>Rooftop Solar in Pune</h3>
                      <p className='mb-6'>Pune, Maharashtra, India</p>
                      <p>Our solar installation in Pune provides clean energy for a mall-multiplex in addition to providing excess energy to the local grid. This 15 year power purchase agreement will reduce our customer&apos;s energy bill by 47% while preventing more than 1,000 tonnes of CO2 emissions per year. This initial installation serves as a proof of concept, demonstrating our ability to effectively deploy capital, build solar, and generate strong returns for our investors.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className='bg-dark-blue text-white'>
        <div className="container mx-auto flex justify-between py-16 px-6">
          <div>
            <p>&copy; HeliosDAO</p>
          </div>
          <div>
            <p className='text-right'>
              team@helios.eco<br />
              112 S Park St, San Francisco, CA 94107
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
