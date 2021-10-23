import {PricingOptions} from '../enums'

export interface Feature {
  feature: string;
  text?: Partial<Record<PricingOptions, string>>;
  checkedAt?: PricingOptions[];
}
