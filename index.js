import { Configuration, OpenAIApi  } from "openai";
import  express  from "express";
import bodyParser from "body-parser";
import cors from "cors";

const configuration = new Configuration({
    organization: "org-bxzUwwbAF0qQefPAbWLAjHGC",
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/", async(req,res) => {

    const { messages } = req.body;

    console.log(messages)
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        message: [
            {"role": "system","content": "You are DesginGPT helpful assistant graphics desgin chatbot"},
            ...messages
        ]
    })
    
    res.json({   
        completion: completion.data.choices[0].message
    })
});

app.listen(port , () => {
    console.log(`Exemplu functioneaza la http://localhost:${port}`);
});

