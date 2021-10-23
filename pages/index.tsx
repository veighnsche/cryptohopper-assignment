import Head from 'next/head'
import {NavTop} from '../components/landing/NavTop'
import {PricingSection} from '../components/landing/sections/pricing/Pricing'
import {PricingOptions} from '../enums'
import {PricingContentRemote} from '../interfaces/pricing'
import {pricing} from '../data/pricing'
import {FeaturesSection} from '../components/landing/sections/features/Features'

interface LandingProps {
  pricingSectionData: Record<PricingOptions, PricingContentRemote>
}

export async function getStaticProps() {
  // data should be remote
  const pricingSectionData = pricing

  return {
    props: {pricingSectionData},
  }
}

const Landing = ({pricingSectionData}: LandingProps) => <>
  <Head>
    <title>Cryptohopper</title>
    <meta name="description" content="Generated by create next app"/>
    <link rel="icon" href="/favicon.ico"/>
  </Head>

  <div className={'flex flex-col'}>
    <div className={'flex justify-center'}>
      <div className={'w-[1520px]'}>
        <NavTop/>
        <div className={'flex flex-col items-center'}>
          <div className={'h-[143px]'}/>
          <PricingSection data={Object.values(pricingSectionData)}/>
          <div className={'h-[173px]'}/>
          <FeaturesSection/>
        </div>
        <div className={'h-[80px]'}/>
      </div>
    </div>
    <div className={'w-auto h-[400px]'} style={{backgroundColor: '#F7FDFD'}}>
      blablalba
    </div>
    <div className={'h-[1000px]'}/>
  </div>
</>

export default Landing
