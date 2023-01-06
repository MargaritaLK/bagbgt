import express from 'express';
import response from 'express';
import fetch from 'node-fetch';
import * as dotenv from 'dotenv'

dotenv.config()


const app = express();
const port = 3000;
app.use(express.static("public"))
app.use(express.json({ limit: '1mb' }));
app.listen(port, () => {
  console.log(`listening on port ${port}!`);
})
