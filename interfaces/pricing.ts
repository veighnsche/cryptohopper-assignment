import {PeriodOptions} from '../enums'

interface PeriodCost {
  [PeriodOptions.ANNUALLY]: string;
  [PeriodOptions.MONTHLY]: string;
}

export interface PricingContentRemote {
  id: PeriodOptions;
  forward: boolean;
  name: string;
  cost: PeriodCost;
  list: string[];
  promo: string;
}

export interface PricingContent extends PricingContentRemote {
  costPeriod: string;
}
