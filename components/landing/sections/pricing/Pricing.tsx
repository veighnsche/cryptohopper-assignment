import {PricingTitle} from './PricingTitle'
import {PricingPeriodSwitch} from './PricingPeriodSwitch'
import {PricingCard} from './PricingCard'
import {useState} from 'react'
import {PeriodOptions} from '../../../../enums'
import {PricingContentRemote} from '../../../../interfaces/pricing'

export interface PricingSectionProps {
  data: PricingContentRemote[];
}

export const PricingSection = ({data}: PricingSectionProps) => {
  const [period, setPeriod] = useState(PeriodOptions.ANNUALLY)

  return <>
    <PricingTitle/>
    <div className={'h-[40px]'}/>
    <PricingPeriodSwitch periodState={[period, setPeriod]}/>
    <div className={'h-[55px]'}/>
    <div className={'flex justify-around items-center'}>
      {data.map(c => <PricingCard key={c.name} content={{...c, costPeriod: c.cost?.[period]}}/>)}
    </div>
  </>
}
