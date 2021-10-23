import {FeaturesTitle} from './FeaturesTitle'
import {FeaturesDropdown} from './FeaturesDropdown'
import {FeaturesTable} from './FeaturesTable'
import {FeaturesAction} from './FeaturesAction'
import {Feature} from '../../../../interfaces/feature'


interface FeatureSectionProps {
  data: Feature[];
}

export const FeaturesSection = ({data}: FeatureSectionProps) => {
  // dropdown logic here

  return <>
    <FeaturesTitle/>
    <div className={'h-[37px]'}/>
    <FeaturesDropdown/>
    <div className={'h-[73px]'}/>
    <FeaturesTable features={data}/>
    <div className={'h-[27px]'}/>
    <FeaturesAction/>
  </>
}
