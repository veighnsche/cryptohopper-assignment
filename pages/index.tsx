import Head from 'next/head'
import {NavTop} from '../components/landing/NavTop'
import {PricingSection} from '../components/landing/sections/pricing/Pricing'
import {PricingContentRemote} from '../interfaces/pricing'
import {pricing} from '../data/pricing'
import {FeaturesSection} from '../components/landing/sections/features/Features'
import {ReviewsSection} from '../components/landing/sections/reviews/Reviews'
import {features} from '../data/features'
import {Feature} from '../interfaces/feature'
import {PricingSectionWave} from '../components/utils/svg/waves/PricingSection'
import {ReviewsCards} from '../components/landing/sections/reviews/ReviewsCards'
import {reviews} from '../data/reviews'
import {Review} from '../interfaces/review'
import {ReviewSectionWaves} from '../components/utils/svg/waves/ReviewSection'

interface LandingProps {
  pricingSectionData: PricingContentRemote[];
  featuresSectionData: Feature[];
  reviewsSectionData: Review[];
}

export async function getStaticProps() {
  // data should be remote
  const pricingSectionData = pricing
  const featuresSectionData = features
  const reviewSectionData = reviews

  return {
    props: {pricingSectionData, featuresSectionData, reviewSectionData},
  }
}

const Landing = ({pricingSectionData, featuresSectionData, reviewsSectionData}: LandingProps) => <>
  <Head>
    <title>Cryptohopper</title>
    <meta name="description" content="Generated by create next app"/>
    <link rel="icon" href="/favicon.ico"/>
  </Head>

  <div className={'absolute top-[441px] z-0'}>
    <PricingSectionWave/>
  </div>

  <div className={'relative flex flex-col z-10'}>
    <div className={'flex justify-center'}>
      <div className={'w-[1520px]'}>
        <NavTop/>
        <div className={'flex flex-col items-center'}>
          <div className={'h-[143px]'}/>
          <PricingSection data={pricingSectionData}/>
          <div className={'h-[173px]'}/>
          <FeaturesSection data={featuresSectionData}/>
        </div>
        <div className={'h-[80px]'}/>
      </div>
    </div>
    <div className={'w-auto flex flex-col items-center'} style={{backgroundColor: '#F7FDFD'}}>
      <div className={'absolute z-20'}>
        <ReviewSectionWaves/>
      </div>
      <div className={'relative z-30'}>
        <div className={'h-[150px]'}/>
        <ReviewsSection data={reviewsSectionData}/>
        <div className={'h-[290px]'}/>
      </div>
    </div>
    <div className={'h-[1000px]'}/>
  </div>
</>

export default Landing
