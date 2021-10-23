import {Fragment} from 'react'
import {boxShadow} from '../../../../styles/utils/styles'
import {PricingContent} from '../../../../interfaces/pricing'

interface PricingCardProps {
  content: PricingContent;
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

const Name = ({forward, name}: Pick<PricingContent, 'forward' | 'name'>) => {
  if (forward) {
    return <p className={'font-semibold text-[44px] leading-none'}>{name}</p>
  }
  return <p className={'font-semibold text-[32px] leading-none'}>{name}</p>
}

const Price = ({cost, forward, costPeriod}: Pick<PricingContent, 'forward' | 'cost' | 'costPeriod'>) => {
  if (cost === null) {
    return <p className={'text-[32px] leading-none'}>Free</p>
  }
  return (
    <p className={(forward ? 'font-medium' : 'font-normal') + ' text-[32px] leading-none'}>
      <span>${costPeriod}</span>
      <span className={'text-[22px]'}>/month</span>
    </p>
  )
}

const List = ({list}: Pick<PricingContent, 'list'>) => {
  return (
    <div className={'flex'}>
      <div className={'w-[18px]'}/>
      <ul className={'list-disc'}>
        {list.map(item => (
          <Fragment key={item}>
            <div className={'h-[13px]'}/>
            <li className={'leading-[150%]'}>{item}</li>
          </Fragment>
        ))}
      </ul>
    </div>
  )
}

const Action = ({forward}: Pick<PricingContent, 'forward'>) => {
  if (forward) {
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

const HelperText = ({promo}: Pick<PricingContent, 'promo'>) => {
  return (
    <p className={'text-[14px] font-medium'} style={{color: '#00b2c8'}}>
      {promo}
    </p>
  )
}

export const PricingCard = ({content: {forward, name, cost, costPeriod, list, promo}}: PricingCardProps) => (
  <div className={(forward ? 'h-[590px]' : 'h-[470px]') + ' w-[357px] rounded-[37px] pl-[45px] mx-[15px]'}
       style={{boxShadow}}>
    <BestValue disabled={!forward}/>
    <Name forward={forward} name={name}/>
    <div className={'h-[15px]'}/>
    <Price forward={forward} cost={cost} costPeriod={costPeriod}/>
    <div className={'h-[16px]'}/>
    <List list={list}/>
    <div className={'h-[31px]'}/>
    <Action forward={forward}/>
    <div className={'h-[10px]'}/>
    <HelperText promo={promo}/>
  </div>
)
