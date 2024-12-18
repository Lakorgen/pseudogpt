import { IconBtn } from './Button';
import Avatar from './Avatar';
import Menu from './Menu';
import MenuItems from './MenuItems';
import { LinearProgress } from './Progress';
import { AnimatePresence } from 'motion/react';
import Logo from './Logo';

import { useToggle } from '../hooks/useToggle';

import logout from '../utils/logout';

import { useNavigation, useNavigate, useLoaderData } from 'react-router-dom';

const TopAppBar = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const { user } = useLoaderData();
  console.log(user);

  const [showMenu, setShowMenu] = useToggle();

  const isNormalLoad = navigation.state === 'loading' && !navigation.formData;

  return (
    <header className='relative flex justify-between items-center h-16 px-4'>
      <div className='flex items-center gap-1'>
        <IconBtn
          icon='menu'
          title='menu'
          classes='lg:hidden'
        />
        <Logo classes='lg:hidden' />
      </div>
      <div className='menu-wrapper'>
        <IconBtn onClick={setShowMenu}>
          <Avatar name={user.name} />
        </IconBtn>

        <Menu classes={showMenu ? 'active' : ''}>
          <MenuItems
            labelText='Log out'
            onClick={() => logout(navigate)}
          />
        </Menu>
        <AnimatePresence>{isNormalLoad && <LinearProgress />}</AnimatePresence>
      </div>
    </header>
  );
};

export default TopAppBar;
