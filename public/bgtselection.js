console.log('');

let downloadStatus;

document.getElementById('requestDownload').addEventListener('click', async event => {
  const data = await requestBGTAPI()
  downloadStatus =  {
    ID: data.downloadRequestId
  }
  console.log(downloadStatus);
  const divstatus = document.getElementById('downloadRes')
  const downID = document.createElement('div')
  downID.classList.add('status')
  downID.textContent = `id ${downloadStatus.ID}`
  divstatus.append(downID)
})


document.getElementById('requestStatus').addEventListener('click', async event => {
  const downloadID = downloadStatus.ID
  const data = await checkStatus(downloadID)
  downloadStatus.status = data.status

  downloadStatus.url = data._links.download.href
  const divstatus = document.getElementById('downloadStatus')
  const status = document.createElement('div')
  status.classList.add('status')
  status.textContent = `download ${downloadStatus.status}`
  divstatus.append(status)
})


document.getElementById('downloadData').addEventListener('click', async event => {
  const download = await downloadData()
  const downloadUrl = download.url
  console.log(downloadUrl);

  const divstatus = document.getElementById('downloadURL')
  const linkD = document.createElement('a')
  linkD.classList.add('status')
  linkD.href = downloadUrl
  linkD.title = `downloadURL`
  linkD.textContent = 'click here to download data'
  divstatus.append(linkD)


})




async function downloadData() {
  const downloadEndpoint = downloadStatus.url
  const base_url = `https://api.pdok.nl${downloadEndpoint}`
  const response = await fetch(base_url, {
    method: 'GET',
    headers: {
      'accept': 'application/json',
    }
  })
  return response
}






async function checkStatus(downloadID) {
  const base_url = `https://api.pdok.nl/lv/bgt/download/v1_0/full/custom/${downloadID}/status`
  const response = await fetch( base_url, {
    method: 'GET',
    headers: {
      'accept': 'application/json',
    }
  })
  const responseJson = await response.json()
  console.log(responseJson);
  return responseJson
}





async function requestBGTAPI() {
  const data = {
    "featuretypes": ["waterdeel"],
    "format": "citygml",
    "geofilter": "POLYGON((213089 593892, 217076 593892, 217076 597981, 213089 597981, 213089 593892))"
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

  const returnJSON = await response.json()
  return returnJSON
}
