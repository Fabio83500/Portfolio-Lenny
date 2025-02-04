import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import imgCV from "../public/assets/images/imgCv.jpg";
import Image from 'next/image';

import pizzLundi from "../public/assets/images/PizzLundi.jpeg";
import gardenPizz from "../public/assets/images/gardenPizz.jpeg";
import gardenPizzMatch from "../public/assets/images/gardenPizzMatch.jpeg";
import flyer from "../public/assets/images/flyer.jpeg";









export default function Home() {

 

  return (
    <>
      <div className='bg-white py-4'>
        <div className='flex justify-between max-w-7xl mx-auto'>
        <Link href="/" className='text-2xl'>LDS</Link>
          <ul className='flex items-center space-x-6'>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/about">A propos</Link></li>
            <li><Link href="/realisations">Mes réalisation</Link></li>

          </ul>
        </div>
      </div>

      <section className='bg-gradient-to-r from-green-500 to-green-900 pb-10' >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
          <h1 className='text-center'>PROJETS</h1>
          <div className='grid gap-x-10 gap-y-10 text-textBlack sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 my-8 lg:my-10'>
            <div className='bg-white rounded-2xl shadow-custom-md hover:shadow-custom-lg transition-custom  '>
              <div className=' object-cover'>
                <Image src={pizzLundi} className='object-cover' width={900} height={900} />
                 </div>
              <div className='px-6 py-4'>
                <p className='text-gray-600'>J'ai réalisé pour garden pizz une affiche pour sa story instagram, pour informer les clients de l'ouverture du lundi. </p>
              </div>
            </div>
            <div  className='bg-white h-fit rounded-2xl shadow-custom-md hover:shadow-custom-lg transition-custom  '>
              <div className=' object-cover'>
                <Image src={gardenPizz} className='object-cover rounded-t-2xl' width={900} height={900} />
                 </div>
              <div className='px-6 py-4'>
                <p className='text-gray-600'>
                  Pour la société garden pizz, j'ai réalisé une publication pour l'instagram de la société, pour entretenir l'imag de celle-ci.
                  </p>
              </div>
            </div>
            <div  className='bg-white h-fit rounded-2xl shadow-custom-md hover:shadow-custom-lg transition-custom  '>
              <div className=' object-cover'>
                <Image src={gardenPizzMatch} className='object-cover rounded-t-2xl' width={900} height={900} />
                 </div>
              <div className='px-6 py-4'>
                <p className='text-gray-600'>
                  Pour la société garden soccer, j'ai présenté une affiche pour but d'informer les clients d'un évènement match.
                  </p>
              </div>
            </div>
            <div  className='bg-white h-fit rounded-2xl shadow-custom-md hover:shadow-custom-lg transition-custom  '>
              <div className=' object-cover'>
                <Image src={flyer} className='object-cover rounded-t-2xl' width={900} height={900} />
                 </div>
              <div className='px-6 py-4'>
                <p className='text-gray-600'>
                  Dans le cadre d'une publicité concernant la société garden pizz j'ai réalisé un flyer.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}