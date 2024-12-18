import PropTypes from 'prop-types';
import { ExtendedFab, IconBtn } from './Button';
import { NavLink } from 'react-router-dom';

import Logo from './Logo';

const Sidebar = () => {
  return (
    <>
      <div className='sidebar active'>
        <div className='sidebar-inner'>
          <div className='h-16 grid items-center px-4 mb-4'>
            <Logo />
          </div>
          <ExtendedFab
            href='/'
            text='New chat'
            classes=''
          />

          <div className='overflow-y-auto -me-2 pe-1'>
            <p className='text-titleSmall h-9 grid items-center px-4'>Recent</p>
            <nav className=''>
              <div className='relative group'>
                <NavLink
                  to=''
                  className='nav-link'
                >
                  <span className='material-symbols-rounded icon-small'>
                    chat_bubble
                  </span>
                  <span className='truncate'>New conversation</span>
                  <div className='state-layer'></div>
                </NavLink>
                <IconBtn
                  icon='delete'
                  size='small'
                  classes='absolute top-1/2 right-1.5 -translate-y-1/2 z-10'
                  title='Delete'
                />
              </div>
            </nav>
          </div>

          <div className='mt-auto mx-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-bodyMedium lg:mx-0'>
            &copy; 2024 Lakorgen
          </div>
        </div>
      </div>

      <div className='overlay active'></div>
    </>
  );
};

export default Sidebar;
