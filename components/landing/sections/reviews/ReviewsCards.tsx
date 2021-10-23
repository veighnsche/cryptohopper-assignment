import {Review} from '../../../../interfaces/review'
import {boxShadow} from '../../../../styles/utils/styles'

interface ReviewsCardsProps {
  reviews: Review[];
}

export const ReviewsCards = ({reviews}: ReviewsCardsProps) => {
  return (
    <div className={'w-auto h-[494px] flex items-end'}>
      <div className={'w-[451.96px] h-[494px] bg-white rounded-[38.88px]'} style={{boxShadow}}>

      </div>
    </div>
  )
}
