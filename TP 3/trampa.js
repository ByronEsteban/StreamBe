ipcontent = document.getElementById('ip');

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    ipcontent.innerHTML = data.ip;
  })
  .catch(error => {
    ipcontent.innerHTML = "No la encontre :(";

  });