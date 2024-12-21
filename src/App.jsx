import PageTitle from './components/PageTitle';
import { motion } from 'motion/react';
import {
  Outlet,
  useParams,
  useNavigation,
  useActionData,
} from 'react-router-dom';
import { useEffect, useRef } from 'react';

import { useToggle } from './hooks/useToggle';
import { useSnackbar } from './hooks/useSnackbar';
import { usePromptPreloader } from './hooks/usePromptPreloader';

import TopAppBar from './components/TopAppBar';
import Sidebar from './components/Sidebar';
import Greetings from './pages/Greetings';
import PromptField from './components/PromptField';

const App = () => {
  const params = useParams();

  const navigation = useNavigation();

  const actionData = useActionData();

  const chatHistoryRef = useRef();

  const [isSidebarOpen, toggleSidebar] = useToggle();

  const { promptPreloaderValue } = usePromptPreloader();

  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    const chatHistory = chatHistoryRef.current;
    if (promptPreloaderValue) {
      chatHistory.scroll({
        top: chatHistory.scrollHeight - chatHistory.clientHeight,
        behavior: 'smooth',
      });
    }
  }, [chatHistoryRef, promptPreloaderValue]);

  useEffect(() => {
    if (actionData?.conversationTitle) {
      showSnackbar({
        message: `Deleted '${actionData.conversationTitle}' conversation.`,
      });
    }
  }, [actionData, showSnackbar]);

  const isNormalLoad = navigation.state === 'loading' && !navigation.formData;

  return (
    <>
      <PageTitle title='PseudoGPT - chat' />
      <div className='lg:grid lg:grid-cols-[320px,1fr]'>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <div className='h-dvh grid grid-rows-[max-content,minmax(0,1fr),max-content]'>
          <TopAppBar toggleSidebar={toggleSidebar} />
          <div
            ref={chatHistoryRef}
            className='px-5 flex flex-col overflow-y-auto'
          >
            <div className='max-w-[840px] w-full mx-auto grow'>
              {isNormalLoad ? null : params.conversationId ? (
                <Outlet />
              ) : (
                <Greetings />
              )}
            </div>
            <div className='bg-light-background dark:bg-dark-background'>
              <div className='max-w-[870px] px-5 w-full mx-auto'>
                <PromptField />
                <motion.p
                  initial={{ opacity: 0, translateY: '-4px' }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.2, delay: 0.8, ease: 'easeOut' }}
                  className='text-bodySmall text-center
              text-light-onSurfaceVariant
              dark:text-dark-onSurfaceVariant p-3
              '
                >
                  PseudoGPT
                  <a
                    href='https://github.com/Lakorgen/pseudogpt'
                    className='inline underline ms-1'
                    target='_blank'
                  >
                    Your private chat
                  </a>
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
