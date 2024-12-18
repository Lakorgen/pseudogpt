import { redirect } from 'react-router-dom';

import { account } from '../../lib/appwrite';

const appLoader = async () => {
  const data = {};
  try {
    data.user = await account.get();
  } catch (err) {
    console.log(`Error getting user session ${err.message}`);
    return redirect('/login');
  }
  return data;
};

export default appLoader;
