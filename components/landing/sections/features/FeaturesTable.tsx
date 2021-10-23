import {Feature} from '../../../../interfaces/feature'
import {PricingOptions} from '../../../../enums'
import {CheckIcon} from '../../../utils/icons/CheckIcon'
import {CrossIcon} from '../../../utils/icons/CrossIcons'

interface CellContentProps {
  feature: Feature;
  pricingOption: PricingOptions;
}

const CellContent = ({feature, pricingOption}: CellContentProps) => {
  switch (true) {
    case !!feature.text?.[pricingOption]:
      return <p className={'text-[21px]'}>{feature.text[pricingOption]}</p>
    case feature.checkedAt?.includes(pricingOption):
      return <CheckIcon/>
    default:
      return <CrossIcon/>
  }
}

interface FeaturesTableProps {
  features: Feature[];
}

export const FeaturesTable = ({features}: FeaturesTableProps) => (
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
