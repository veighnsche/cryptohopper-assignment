import React, {Dispatch, SetStateAction} from 'react'
import {boxShadow} from '../../../../styles/utils/styles'
import {PeriodOptions} from '../../../../enums'

interface ThisProps {
  periodState: [PeriodOptions, Dispatch<SetStateAction<PeriodOptions>>]
}

const classes = {
  container: 'w-[429px] h-[76px] bg-gray-200 rounded-[214.5px] p-[7px] flex',
  selected: `w-[208px] h-[64px] bg-white rounded-[104px] flex justify-center items-center font-semibold`,
  unselected: 'w-[208px] h-[64px] flex justify-center items-center font-medium',
}

const styles = {
  selected: {color: '#00B2C8', boxShadow},
  unselected: {},
}

export const PricingPeriodSwitch = ({periodState: [period, setPeriod]}: ThisProps) => {
  const annually = period === PeriodOptions.ANNUALLY ? 'selected' : 'unselected'
  const monthly = period === PeriodOptions.MONTHLY ? 'selected' : 'unselected'

  return (
    <div className={classes.container}>
      <p className={classes[annually]} style={styles[annually]} onClick={() => setPeriod(PeriodOptions.ANNUALLY)}>
        Annually
      </p>
      <p className={classes[monthly]} style={styles[monthly]} onClick={() => setPeriod(PeriodOptions.MONTHLY)}>
        Monthly
      </p>
    </div>
  )
}
