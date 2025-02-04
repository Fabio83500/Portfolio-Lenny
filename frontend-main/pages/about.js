import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import imgCV from "../public/assets/images/imgCv.jpg";
import Image from 'next/image';
import CV from "@/public/assets/Lenny_desalvo_CV.pdf"

export default function Home() {

  return (
    //   <section id="CV">
    //   <div class="container">
    //     <div class="left-side">
    //       <div class="profileText">
    //         <div class="imgBx">
    //           <Image src="image" src={imgCV} width="500" height="500" />
    //         </div>
    //       </div>
    //       <div class="contactInfo">
    //         <h3 class="title">Informations personelles</h3>
    //         <ul>
    //           <li>

    //             <span class="text"> 06 30 19 46 63</span>
    //           </li>
    //           <li>

    //           </li>
    //           <li>

    //             <span class="text"> La seyne sur mer, France</span>
    //           </li>
    //           <li>

    //             <span class="text"> www.linkedin.com</span>
    //           </li>

    //           <li>

    //             <span class="text"> www.github.com</span>
    //           </li>


    //         </ul>
    //       </div>
    //       <div class="contactInfo centreInteret">
    //         <h3 class="title">Centre d'interet</h3>
    //         <ul>
    //           <li>Le football</li>
    //           <li>Sport de combat</li>
    //           <li>Automobile</li>

    //         </ul>
    //       </div>
    //     </div>




    //     <div class="right-side"></div>

    //   </div>
    // </section>
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

      <section className='bg-gradient-to-r from-green-500 to-green-900' >
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-0 pb-10'>
          <h1 className='text-center mb-4 text-lg pt-8 lg:pt-4 lg:text-6xl'>Informations personelles</h1>
          <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 justify-between items-center'>
            <div className='md:w-1/3 bg-gray-100 rounded-lg p-4 shadow-custom-lg'>
              <h1 className='text-black text-base font-medium mb-8 text-center'>Experiences professionelles</h1>
              <div className='flex flex-col space-y-6'>
                <div>
                  <span className='block text-gray-700'>2022-2025: équipier polyvalent du commerce à Garden Soccer  </span>
                  <span className='text-sm text-gray-700 block'>Société Garden Soccer </span>
                </div>
                <div>
                  <span className='block text-gray-700'>2024-2025: Pizzaiolo et livreur à Garden pizz  </span>
                  <span className='text-sm text-gray-700 block'>Société GardenPizz </span>
                </div>



              </div>

            </div>
            <div className='w-fit h-fit bg-gray-100 rounded-lg p-4 shadow-custom-lg'>
              <Link href={CV} className='text-black text-base font-medium mb-8 text-center underline text-red-500'>Telechargez mon CV</Link>
            </div>
            <div className='md:w-1/3 bg-gray-100 rounded-lg p-4 custom-lg'>
              <h1 className='text-black text-base font-medium mb-8 text-center'>Parcours scolaire</h1>
              <div className='flex flex-col space-y-6'>
                <div>
                  <span className='block text-gray-700'>2022-2023: CAP équipier polyvalent du commerce   </span>
                  <span className='text-sm text-gray-700 block'>CFA La Seyne </span>
                </div>
                <div>
                  <span className='block text-gray-700'>2021 brevet des collège  </span>
                  <span className='text-sm text-gray-700 block'>Collège Reynier </span>
                </div>

              </div>

            </div>

          </div>

          <div className='bg-gray-100 shadow-custom-lg w-full p-3 rounded-lg flex flex-col items-center mt-10'>
          
            <span className='text-2xl'>Lenny De Salvo</span>
            <p className='pt-8'>
            Je souhaite suivre cette formation car elle représente un réel intérêt, tant sur le plan personnel que professionnel. En effet, elle me permettrait non seulement d'améliorer mes compétences et d'enrichir mon expérience, mais aussi de contribuer activement à l'amélioration de l'image de l'entreprise au sein de laquelle je travaille. En acquérant de nouvelles connaissances et en développant des compétences spécifiques, je pourrais ainsi apporter une valeur ajoutée à l'organisation, tout en poursuivant mon développement professionnel
            </p>
          </div>
        </div>
      </section>
    </>
  )
}