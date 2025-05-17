'use client';

import HeliusBlogs from '@/components/HeliusBlogs';
import MarkdownViewer from '@/components/MarkdownViewer';
import Sections, { TopNav, SubNav } from '@/components/Navigation';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const photos = ['/photos/1.jpg', '/photos/2.jpeg'];
const nfts = ['/nfts/1.png', '/nfts/2.png'];


export default function HomePage() {
  const [mode, setMode] = useState<'photos' | 'nfts' | 'random'>('photos');
  const [index, setIndex] = useState(0);
  const [activeMain, setActiveMain] = useState<string>('Gray Body Radiation');
  const mainItems = Sections.map((s) => s.title);

  const getMedia = () => {
    const pool = mode === 'photos' ? photos : mode === 'nfts' ? nfts : [...photos, ...nfts];
    return pool[index % pool.length];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 7000); // change every 3 seconds
    return () => clearInterval(interval);
  }, [mode]);

  return (
    <>
      <Head>
        <title>Amy | solanagirl.dev</title>
        <meta name="description" content="The magnetic winter aesthetic of Amy's web3 world." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container z-auto">
        {/* Hero Section */}
      <section className="section z-40">
      <TopNav active={activeMain} setActive={setActiveMain} items={mainItems} />
        <div className="w-full flex-between gap-32 z-40">
        <div className='flex-vertical h-full w-1/4 z-40 gap-2 mt-xl'>
        <div
              className="relative overflow-hidden"
              style={{ width: '300px', height: '300px' }}
            >
              <Image
                src={getMedia()}
                alt="Amy Media"
                fill
                style={{ objectFit: 'cover' }}
                key={mode + index}
              />
            </div>
          <p className="text-xs text-gray-700">
            unassuming operational efficiency maxi 
          </p>
          <Image src={'/assets/art_chain.png'} width={300} height={600} alt="art"/>
          <SubNav active={activeMain} items={Sections} />
          <div className='flex gap-4 mt-md'>
          <div className=" btn text-sm text-gray-800 px-sm py-xs rounded-xl shadow-sm relative">
                  💬 GitHub
          </div>
          <div className=" btn text-sm text-gray-800 px-sm py-xs rounded-xl shadow-sm relative">
                  💬 Inbox Me!
          </div>
          </div>
            {/* <div className='h-1/2 mt-xxxl'>
            <p className='text-right'>uwu whats this?</p>
            <div className='rounded-full bg-black w-48 h-48 skew-y-36 '>

            </div>
            <p>Click to {"a"}Void</p>
            </div> */}
          
          </div>
          <div className="mb-md mt-xl z-40">
          <Image src={'/assets/blob.gif'} width={300} height={600} alt="art"/>
            <hr className='h-4 mb-md' />
              <div className='flex flex-row flex-wrap z-50'>
              <MarkdownViewer title='TransientState' />
              <Image src={"/assets/DeWiChart.png"}              
                  width={1024}
                  height={768}
                  alt="DeWi Market Chart"
                  style={{ objectFit: 'scale-down' }}
                  />
                <MarkdownViewer title='DeWiMarket' />
                <Link href={`articles/DeWiMarket`} className="text-lg text-primary"><h2>Decentralized Wireless Network Markets on Solana</h2></Link>
                <hr className='h-2 mt-xl w-full'/>
                <HeliusBlogs />
                <hr className='h-2 mt-xl w-full'/>
                <Image src={"/assets/AICompanion.webp"}              
                  width={1024}
                  height={768}
                  alt="AI Companion Blade Runner"
                  style={{ objectFit: 'scale-down', marginTop: '2em' }}
                  />
                <MarkdownViewer title='LoveOnDemand' />
              
                <Link href={`articles/LoveOnDemand`} className="text-lg text-primary"><h2>Digital Love on Demand, Fulfillment from AI Companions </h2></Link>
                </div>
            </div>
        </div>
      </section>
      <div className='absolute w-screen h-screen right-0 bottom-0 z-50'>
        <iframe
                src="https://open.spotify.com/embed/track/4nCksrW8Dga2tMKQGIJsCd?utm_source=generator"
                width="100%"
                height="81px"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: '12px', position: "fixed", bottom: 0, right: 0, width: "28vw" }}
              ></iframe>

        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-md text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Amy @ solanagirl.dev. All rights reserved.</p>
        <p>
          Built with ☕, 🧠, and a sprinkle of ✨.
        </p>
      </footer>
    </>
  );
}
