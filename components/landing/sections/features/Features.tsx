import {FeaturesTitle} from './FeaturesTitle'
import {FeaturesDropdown} from './FeaturesDropdown'
import {FeaturesTable} from './FeaturesTable'

const FeaturesAction = () => {
  return (
    <div className={'w-[270px] h-[47px] rounded-[18px] flex justify-center items-center font-medium'} style={{backgroundColor: '#00B2C8', color: 'white'}}>
      Get started with Hero plan
    </div>
  )
}

export const FeaturesSection = () => {
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
