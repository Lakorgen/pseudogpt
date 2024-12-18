import { Link } from 'react-router-dom';
import { logoDark, logoLight } from '../assets/assets';
import PropTypes from 'prop-types';

const Logo = ({ classes = '' }) => {
  return (
    <Link
      to='/'
      className={`min-w-max max-w-max h-[24px] ${classes}`}
    >
      <img
        src={logoLight}
        width={133}
        height={24}
        alt='logo'
        className='dark:hidden'
      />
      <img
        src={logoDark}
        width={133}
        height={24}
        alt='logo'
        className='hidden dark:block'
      />
    </Link>
  );
};

Logo.propTypes = {
  classes: PropTypes.string,
};

export default Logo;
