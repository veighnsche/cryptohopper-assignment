import {ReviewsTitle} from './ReviewsTitle'
import {Review} from '../../../../interfaces/review'
import {ReviewsCards} from './ReviewsCards'

interface ReviewsSectionProps {
  data: Review[];
}

export const ReviewsSection = ({data}: ReviewsSectionProps) => {
  return <>
    <ReviewsTitle/>
    <div className={'h-[80px]'}/>
    <ReviewsCards reviews={data}/>
  </>
}
