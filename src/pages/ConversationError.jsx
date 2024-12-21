import { useRouteError, Link } from 'react-router-dom';

const ConversationError = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className='grid grid-cols-1 justify-items-center content-center h-full'>
      <p className='text-displayMedium font-semibold'>{error.code}</p>
      <p className='text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-2 mb-4'>
        {error.message}
      </p>
      <Link
        to='/'
        className='btn filled primary'
      >
        Create new chat
        <div className="state-layer"></div>
      </Link>
    </div>
  );
};

export default ConversationError;
