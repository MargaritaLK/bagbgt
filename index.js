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



const extend = {
  minx: 77782,
  miny: 456224,
  maxx: 78906,
  maxy: 456903
}

console.log(extend.miny);

// curl - X POST "https://api.pdok.nl/lv/bgt/download/v1_0/full/custom"
// - H "accept: application/json"
// - H "Content-Type: application/json"
// - d "{\"featuretypes\":[\"waterdeel\"],\"format\":\"citygml\",\"geofilter\":\"POLYGON((213089 593892, 217076 593892, 217076 597981, 213089 597981, 213089 593892))\"}"


getdownloadID()

async function requestBGTAPI() {
  const acces_t = process.env.BAGKEY

  const data = {
  "featuretypes":["waterdeel"],
  "format":"citygml",
  "geofilter":"POLYGON((213089 593892, 217076 593892, 217076 597981, 213089 597981, 213089 593892))"
}

  const base_url = `https://api.pdok.nl/lv/bgt/download/v1_0/full/custom`
  const response = await fetch(base_url, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const returndata = await response.json()
  return returndata
}


async function getdownloadID() {
  const data = await requestBGTAPI()
  console.log(data);

}
