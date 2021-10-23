import {Fragment} from 'react'

export enum PricingOptions {Pioneer, Explorer, Adventurer, Hero}

interface ThisProps {
  pricingOption: PricingOptions
}

interface PricingContent {
  name: string,
  cost: string,
  list: string[],
}

const content: Record<PricingOptions, PricingContent> = {
  [PricingOptions.Pioneer]: {
    name: 'Pioneer',
    cost: null,
    list: ['20 positions', 'portfolio management', 'manual trading', 'all available exchanges'],
  },
  [PricingOptions.Explorer]: {
    name: 'Explorer',
    cost: '16.58',
    list: ['80 positions', 'portfolio management', 'manual trading', 'all available exchanges'],
  },
  [PricingOptions.Adventurer]: {
    name: 'Adventurer',
    cost: '41.58',
    list: ['200 positions', 'portfolio management', 'manual trading', 'all available exchanges'],
  },
  [PricingOptions.Hero]: {
    name: 'Hero',
    cost: '83.25',
    list: ['500 positions', 'portfolio management', 'manual trading', 'all available exchanges', 'market arbitrage', 'algorithm intelligence'],
  },
}

const BestValue = ({disabled}: { disabled: boolean }) => {
  if (disabled) {
    return <div className={'h-[52px]'}/>
  }
  return <>
    <div className={'h-[40px]'}/>
    <p className={'w-[130px] h-[43px] flex justify-center items-center rounded-[18px] font-medium'}
       style={{color: '#00b2c8', backgroundColor: '#00b2c80f'}}>
      Best Value
    </p>
    <div className={'h-[23px]'}/>
  </>
}

const Name = ({pricingOption}: ThisProps) => {
  if (pricingOption === PricingOptions.Hero) {
    return <p className={'font-semibold text-[44px] leading-none'}>{content[pricingOption].name}</p>
  }
  return <p className={'font-semibold text-[32px] leading-none'}>{content[pricingOption].name}</p>
}

const Price = ({pricingOption}: ThisProps) => {
  if (content[pricingOption].cost === null) {
    return <p className={'text-[32px] leading-none'}>Free</p>
  }
  return (
    <p className={'text-[32px] leading-none'}
       style={{fontWeight: pricingOption === PricingOptions.Hero ? 500 : 400}}>
      <span>${content[pricingOption].cost}</span>
      <span className={'text-[22px]'}>/month</span>
    </p>
  )
}

const List = ({pricingOption}: ThisProps) => {
  return (
    <div className={'flex'}>
      <div className={'w-[18px]'}/>
      <ul className={'list-disc'}>
        {content[pricingOption].list.map(item => (
          <Fragment key={item}>
            <div className={'h-[13px]'}/>
            <li className={'leading-[150%]'}>{item}</li>
          </Fragment>
        ))}
      </ul>
    </div>
  )
}

const Action = ({pricingOption}: ThisProps) => {
  if (pricingOption === PricingOptions.Hero) {
    return (
      <div className={'w-[140px] h-[43px] flex justify-center items-center rounded-[18px] font-semibold text-white'}
           style={{backgroundColor: '#00b2c8'}}>
        Get started
      </div>
    )
  }
  return (
    <div className={'w-[140px] h-[43px] flex justify-center items-center border-2 rounded-[18px] font-semibold'}>
      Get started
    </div>
  )
}

const HelperText = ({pricingOption}: ThisProps) => {
  if (pricingOption !== PricingOptions.Explorer) {
    return null
  }
  return (
    <p className={'text-[14px] font-medium'} style={{ color: '#00b2c8'}}>
      Try 7 days for free
    </p>
  )
}

export const PricingCard = ({pricingOption}: ThisProps) => (
  <div className={'w-[357px] rounded-[37px] pl-[45px]'}
       style={{
         boxShadow: '0px 10px 32px rgba(5, 85, 95, 0.06), 0px 8px 24px rgba(5, 85, 95, 0.04)',
         height: pricingOption === PricingOptions.Hero ? '590px' : '470px',
       }}>
    <BestValue disabled={pricingOption !== PricingOptions.Hero}/>
    <Name pricingOption={pricingOption}/>
    <div className={'h-[15px]'}/>
    <Price pricingOption={pricingOption}/>
    <div className={'h-[16px]'}/>
    <List pricingOption={pricingOption}/>
    <div className={'h-[31px]'}/>
    <Action pricingOption={pricingOption}/>
    <div className={'h-[10px]'}/>
    <HelperText pricingOption={pricingOption}/>
  </div>
)
