import { redirect } from 'react-router-dom';
import { account, databases } from '../../lib/appwrite';

const conversationLoader = async ({ params }) => {
  const { conversationId } = params;
  const data = {};
  try {
    data.user = await account.get();
  } catch (err) {
    console.log(`Error getting user account: ${err.message}`);
    return redirect('/login');
  }

  try {
    data.conversation = await databases.getDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'conversations',
      conversationId,
    );
  } catch (err) {
    console.log(`Error getting conversation ${err.message}`);
    throw err;
  }
  return data;
};
export default conversationLoader;