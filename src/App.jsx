import PageTitle from './components/PageTitle';

import TopAppBar from './components/TopAppBar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <>
      <PageTitle title='PseudoGPT - chat' />
      <div className=''>
        <Sidebar />
        <div className=''>
          <TopAppBar />
          <div className=''>
            <div className=''></div>
          </div>
          <div className=''>
            <p className=''>
              PseudoGPT
              <a
                href=''
                className=''
                target='_blank'
              >
                Your private gemini char
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
