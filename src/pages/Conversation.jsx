import { motion } from 'motion/react';
import { useLoaderData, useLocation } from 'react-router-dom';

import PageTitle from '../components/PageTitle';
import UserPrompt from '../components/UserPrompt';
import AiResponse from '../components/AiResponse';
import PromptPreloader from '../components/PromptPreloader';

import { usePromptPreloader } from '../hooks/usePromptPreloader';

const Conversation = () => {
  const {
    conversation: { title, chats },
  } = useLoaderData() || {};
  // console.log(chats);

  const { promptPreloaderValue } = usePromptPreloader();

  const location = useLocation();

  return (
    <>
      <PageTitle title={`${title} - PseudoGPT`} />
      <motion.div
        className='max-w-[700px] mx-auto !will-change-auto'
        initial={!location.state?._isRedirect && { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.05,
          ease: 'easeOut',
        }}
      >
        {chats.map((chat) => {
          return (
            <div key={chat.$id}>
              <UserPrompt text={chat.user_prompt} />
              <AiResponse aiResponse={chat.ai_response} />
              {/* <p className=''>{chat.ai_response}</p> */}
            </div>
          );
        })}
      </motion.div>
      {promptPreloaderValue && (
        <PromptPreloader promptValue={promptPreloaderValue} />
      )}
    </>
  );
};

export default Conversation;
