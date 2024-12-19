import { account } from '../../lib/appwrite';

const userPromptAction = async (formData) => {
  const userPrompt = formData.get('user_prompt');
  const user = await account.get();
  return null;
};

const appAction = async ({ request }) => {
  const formData = await request.formData();
  const requestType = formData.get('request_type');

  if (requestType === 'user_prompt') {
    return await userPromptAction(formData);
  }
};

export default appAction;
