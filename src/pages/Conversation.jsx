import { motion } from 'motion/react';
import { useLoaderData } from 'react-router-dom';

import PageTitle from '../components/PageTitle';
import UserPrompt from '../components/UserPrompt';
import AiResponse from '../components/AiResponse';

const Conversation = () => {
  const {
    conversation: { title, chats },
  } = useLoaderData() || {};
  // console.log(chats);

  return (
    <>
      <PageTitle title={`${title} - PseudoGPT`} />
      <motion.div className=''>
        {chats.map((chat) => {
          return (
            <div key={chat.$id}>
              <UserPrompt text={chat.user_prompt} />
              <AiResponse aiResponse={chat.ai_response}/>
              {/* <p className=''>{chat.ai_response}</p> */}
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Conversation;
