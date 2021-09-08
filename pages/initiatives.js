import Head from 'next/head'
import Image from 'next/image'
import { Heading, Link } from '@chakra-ui/layout';
import Initiativeshero from './components/Initiativeshero';
import Features from './components/Features';
import Overhead from './components/OVerhead';
import Team from './components/Team';
import Change from './components/Change';
import Midpage from './components/Midpage';
import Featurestwo from './components/Featurestwo';
import { Flex, Stack } from "@chakra-ui/react";

export default function Initiatives() {
  return (
    <div>
      <Head>
        <title>Minds On | A Place To Grow</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" /> 
      </Head>

      <main>
      <Overhead/>
          <Initiativeshero/>
          <Change/>
          <Team/>
      </main>

    </div>
  )
}
