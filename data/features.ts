import {PricingOptions} from '../enums'

// data should be remote
export const features = [
  {
    feature: 'Available on all exchanges',
    text: {
      [PricingOptions.PIONEER]: 'All exchanges',
      [PricingOptions.HERO]: 'All exchanges',
    }
  },
  {
    feature: 'Live trading terminal',
    checkedAt: [PricingOptions.PIONEER, PricingOptions.HERO],
  },
  {
    feature: 'Portfolio Management',
    checkedAt: [PricingOptions.PIONEER, PricingOptions.HERO],
  },
  {
    feature: 'Manual trading',
    checkedAt: [PricingOptions.HERO],
  },
  {
    feature: 'Syncing positions',
    checkedAt: [PricingOptions.HERO],
  },
  {
    feature: 'Reserve positions',
    checkedAt: [PricingOptions.HERO],
  },
  {
    feature: 'Personal stats',
    checkedAt: [PricingOptions.HERO],
  },
  {
    feature: 'Global stats',
    checkedAt: [PricingOptions.HERO],
  },
  {
    feature: 'Strategy builder',
    checkedAt: [PricingOptions.PIONEER, PricingOptions.HERO],
  }
]
