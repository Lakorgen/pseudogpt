import model from '../lib/googleAI';

const getConversationTitle = async (userPrompt) => {
  try {
    const result = await model.generateContent(`
      'Given a user prompt, generate a concise and informative title that accurately describes the conversation. Consider keywords, topics, and the overall intent of the prompt. Response in plain text format, not markdown.
      Prompt: ${userPrompt}`);
    return result.response.text();
  } catch (err) {
    console.log(`Error generating title: ${err.message}`);
  }
};

const getAIResponse = async (userPrompt, chats = []) => {
  const history = [];
  chats.forEach(({ user_prompt, ai_response }) => {
    history.push(
      {
        role: 'user',
        parts: [{ text: user_prompt }],
      },
      {
        role: 'model',
        parts: [{ text: ai_response }],
      },
    );
  });


  try {
    model.generationConfig = { temperature: 1.5 };
    const chat = model.startChat({ history });
    const result = await chat.sendMessage(userPrompt);
    return result.response.text();
  } catch (err) {
    console.log(`Error ai resonse: ${err.message}`);
  }
};

export { getConversationTitle, getAIResponse };
