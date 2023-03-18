const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);


const getInfoWithOpenAi = async(prompt,tokenSize) => {
    const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens:tokenSize,
    });
    return completion.data.choices[0].text;
};

const chatWithOpenAi = async (req, res) => {
    const { prompt } = req.body;
    console.log(prompt);
    const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens:500,
    });
    console.log(completion.data.choices)
    res.send(completion.data.choices[0].text);
};

module.exports = {chatWithOpenAi,getInfoWithOpenAi};