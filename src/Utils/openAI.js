import OpenAI from 'openai';
import { OpenAI_APIKEY } from './constants';

 const openai = new OpenAI({
  apiKey: OpenAI_APIKEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true
  
})
export default openai;