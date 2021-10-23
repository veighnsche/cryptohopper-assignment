import {PeriodOptions, PricingOptions} from '../enums'

// data should be remote
export const pricing = [
  {
    id: PricingOptions.PIONEER,
    forward: false,
    name: 'Pioneer',
    cost: null,
    list: ['20 positions', 'portfolio management', 'manual trading', 'all available exchanges'],
    promo: '',
  },
  {
    id: PricingOptions.EXPLORER,
    forward: false,
    name: 'Explorer',
    cost: {[PeriodOptions.ANNUALLY]: '16.58', [PeriodOptions.MONTHLY]: '19.00'},
    list: ['80 positions', 'portfolio management', 'manual trading', 'all available exchanges'],
    promo: 'Try 7 days for free',
  },
  {
    id: PricingOptions.ADVENTURER,
    forward: false,
    name: 'Adventurer',
    cost: {[PeriodOptions.ANNUALLY]: '41.58', [PeriodOptions.MONTHLY]: '49.00'},
    list: ['200 positions', 'portfolio management', 'manual trading', 'all available exchanges'],
    promo: '',
  },
  {
    id: PricingOptions.HERO,
    forward: true,
    name: 'Hero',
    cost: {[PeriodOptions.ANNUALLY]: '83.25', [PeriodOptions.MONTHLY]: '99.00'},
    list: ['500 positions', 'portfolio management', 'manual trading', 'all available exchanges', 'market arbitrage', 'algorithm intelligence'],
    promo: '',
  },
]
