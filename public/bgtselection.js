console.log('');

let downloadStatus;

document.getElementById('requestDownload').addEventListener('click', async event => {
  const data = await requestBGTAPI()
  downloadStatus =  {
    downloadID: data.downloadRequestId
  }
  console.log(downloadStatus);

})


document.getElementById('requestStatus').addEventListener('click', async event => {
  const downloadID = downloadStatus.downloadID
  const data = await checkStatus(downloadID)

  downloadStatus.status = data.status


  const divstatus = document.getElementById('downloadStatus')
  const status = document.createElement('div')
  status.classList.add('status')
  status.textContent = `download ${downloadStatus.status}`
  divstatus.append(status)


})








// async function UpdateCheckStatus() {
//   try {
//     if (downloadStatus) {
//       checkStatus(downloadStatus)
//     }
//   } catch (error){
//     console.log(error);
//   }


// }




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
