import {FeaturesTitle} from './FeaturesTitle'
import {FeaturesDropdown} from './FeaturesDropdown'
import {FeaturesTable} from './FeaturesTable'
import {FeaturesAction} from './FeaturesAction'


export const FeaturesSection = () => {
  // dropdown logic here

  return <>
    <FeaturesTitle/>
    <div className={'h-[37px]'}/>
    <FeaturesDropdown/>
    <div className={'h-[73px]'}/>
    <FeaturesTable/>
    <div className={'h-[27px]'}/>
    <FeaturesAction/>
  </>
}
