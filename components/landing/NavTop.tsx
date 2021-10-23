export const NavTop = () => (
  <nav className={'px-4 flex justify-between h-16'}>
    <ul className={'w-[400px] flex items-center'}>
      <li className={'h-6 w-6'}>logo</li>
    </ul>

    <ul className={'flex items-center'}>
      <li className={'px-4'}>Features 𝅏</li>
      <li className={'px-4'}>Charts</li>
      <li className={'px-4'}>Pricing</li>
      <li className={'px-4'}>Marketplace</li>
      <li className={'px-4'}>Learn</li>
      <li className={'px-4'}>Company</li>
    </ul>

    <ul className={'w-[400px] flex items-center justify-end'}>
      <li className={'px-4'}>Log in</li>
      <li className={'px-4 py-1 border-2 rounded-[18px]'}>Signup</li>
    </ul>
  </nav>
)
