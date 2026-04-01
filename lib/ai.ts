import { Configuration, OpenAIApi } from 'openai';

// Initialize OpenAI API configuration
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/**
 * Function to get a response from OpenAI
 * @param {string} prompt - The input message for the chatbot
 * @returns {Promise<string>} - The response from OpenAI chatbot
 */
export async function getChatbotResponse(prompt) {
    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
        });
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error fetching response from OpenAI:', error);
        throw new Error('Failed to get response from chatbot.');
    }
}