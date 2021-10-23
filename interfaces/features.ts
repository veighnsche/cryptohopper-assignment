import {PricingOptions} from '../enums'

export interface Features {
  feature: string;
  text?: Partial<Record<PricingOptions, string>>;
  checkedAt?: PricingOptions[];
}
