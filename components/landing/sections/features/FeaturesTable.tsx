import {features} from '../../../../data/features'
import {Features} from '../../../../interfaces/features'
import {PricingOptions} from '../../../../enums'

const CheckIcon = () => {
  return (
    <div className={'w-[30px] h-[30px] rounded-[15px] flex justify-center items-center'}
         style={{backgroundColor: '#e6f7f9'}}>
      <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.31481 4.40229L4.8465 7.88721" stroke="#00B1C7" strokeWidth="2" strokeLinecap="round"/>
        <path d="M11.769 1.25825L4.8462 7.88695" stroke="#00B1C7" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  )
}

const CrossIcon = () => (
  <div className={'w-[30px] h-[30px] rounded-[15px] flex justify-center items-center'}
       style={{backgroundColor: '#f9e6e6'}}>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.50018 1.24988L1.00018 8.24988" stroke="#EF6464" strokeWidth="2" strokeLinecap="round"/>
      <path d="M1.00018 1.24988L8.50018 8.24988" stroke="#EF6464" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </div>
)

const CellContent = ({feature, pricingOption}: { feature: Features, pricingOption: PricingOptions }) => {
  switch(true) {
    case !!feature.text?.[pricingOption]:
      return <p className={'text-[21px]'}>{feature.text[pricingOption]}</p>
    case feature.checkedAt?.includes(pricingOption):
      return <CheckIcon/>
    default:
      return <CrossIcon/>
  }
}

export const FeaturesTable = () => (
  <div className={'border-b-2 pb-[12.5px]'}>
    <table className={'table-fixed'}>
      <thead>
      <tr>
        <th className={'text-left pl-[25px] border-b-2 pb-[25px] w-[461px]'} style={{color: '#7a7998'}}>Features</th>
        <th className={'text-left pl-[25px] border-b-2 pb-[25px] w-[263px]'} style={{color: '#7a7998'}}>Pioneer</th>
        <th className={'text-left pl-[25px] border-b-2 pb-[25px] w-[263px]'} style={{color: '#7a7998'}}>Hero</th>
      </tr>
      </thead>
      <tbody>
      {features.map(feature => (
        <tr key={feature.feature} className={'h-[60px] items-center'}>
          <td className={'pl-[25px] text-[21px]'}>{feature.feature}</td>
          <td className={'pl-[25px]'}><CellContent feature={feature} pricingOption={PricingOptions.PIONEER}/></td>
          <td className={'pl-[25px]'}><CellContent feature={feature} pricingOption={PricingOptions.HERO}/></td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
)
