import {PricingTitle} from './PricingTitle'
import {PricingPeriodSwitch} from './PricingPeriodSwitch'
import {PricingCard} from './PricingCard'
import {useState} from 'react'
import {PeriodOptions, PricingOptions} from '../../../../enums'
import {PricingContentRemote} from '../../../../interfaces/pricing'
import {PioneerWave} from '../../../utils/svg/waves/Pioneer'
import {ExplorerWave} from '../../../utils/svg/waves/Explorer'
import {AdventurerWave} from '../../../utils/svg/waves/Adventurer'
import {HeroWave} from '../../../utils/svg/waves/Hero'

export interface PricingSectionProps {
  data: PricingContentRemote[];
}

const waves = {
  [PricingOptions.PIONEER]: <PioneerWave/>,
  [PricingOptions.EXPLORER]: <ExplorerWave/>,
  [PricingOptions.ADVENTURER]: <AdventurerWave/>,
  [PricingOptions.HERO]: <HeroWave/>,
}

export const PricingSection = ({data}: PricingSectionProps) => {
  const [period, setPeriod] = useState(PeriodOptions.ANNUALLY)

  return <>
    <PricingTitle/>
    <div className={'h-[40px]'}/>
    <PricingPeriodSwitch periodState={[period, setPeriod]}/>
    <div className={'h-[55px]'}/>
    <div className={'flex justify-around items-center'}>
      {data.map(c => {
        return <PricingCard key={c.id} content={{...c, costPeriod: c.cost?.[period]}} wave={waves[c.id]}/>
      })}
    </div>
  </>
}
