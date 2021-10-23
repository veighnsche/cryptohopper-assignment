export function FeaturesDropdown() {
  return <>
    <p style={{color: '#7A7998'}}>
      Select plans to compare
    </p>
    <div className={'h-[37px]'}/>
    <div className={'flex items-center'}>
      <select className={'w-[175px] h-[49px] border-2 rounded-[8px] pl-[20px]'}>
        <option>Pioneer</option>
      </select>
      <div className={'w-[17px]'}/>
      <p>to</p>
      <div className={'w-[17px]'}/>
      <select className={'w-[175px] h-[49px] border-2 rounded-[8px] pl-[20px]'}>
        <option>Hero</option>
      </select>
    </div>
  </>
}
