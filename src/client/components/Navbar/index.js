import { Button } from '@components'
import { DARK, LIGHT } from '@themes/themeTypes'

// redux
import { useDispatch } from 'react-redux';
import { setThemeKey } from '@lib/redux/action';
import withRedux from '@lib/redux/withRedux';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav>
      <Button text='Dark' onClick={() => dispatch(setThemeKey(DARK))} />
      <Button text='Light' onClick={() => dispatch(setThemeKey(LIGHT))} />
    </nav>
  )
}

export default withRedux(Navbar)
