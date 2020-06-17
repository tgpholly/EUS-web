function fetchStatsFromAPI() {
    updateFileStats();
    getServerInfo();
}

function updateFileStats() {
    let xhr = new XMLHttpRequest();
    let pngLabel = document.getElementById("png"),
        jpgLabel = document.getElementById("jpg"),
        gifLabel = document.getElementById("gif"),
        spaceBar = document.getElementById("spaceBar"),
        percentLabel = document.getElementById("percent"),
        usedspaceLabel = document.getElementById("usedspace");
    xhr.open("GET", "/api/get-stats?f=1&s=1", true);
    xhr.onload = (e) => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const apiData = JSON.parse(xhr.responseText);
            console.log(apiData);
            const perper = (apiData.space.mb / 1887436.8 * 100); // I still need to add disk space to the api
            pngLabel.innerHTML = apiData.files.png;
            jpgLabel.innerHTML = apiData.files.jpg + apiData.files.jpeg;
            gifLabel.innerHTML = apiData.files.gif;
            spaceBar.value = perper;
            percentLabel.innerHTML = `${perper.toFixed(2)}% Usage`;
            usedspaceLabel.innerHTML = apiData.space.string;
        } else console.error(e);
    }
    xhr.send(null);
}

function getServerInfo() {
    let xhr2 = new XMLHttpRequest();
    let vernumLabel = document.getElementById("vernum"),
        instaLabel = document.getElementById("insta");
    xhr2.open("GET", "/api/get-info", true);
    xhr2.onload = (e) => {
        if (xhr2.readyState === 4 && xhr2.status === 200) {
            const apiData = JSON.parse(xhr2.responseText);
            console.log(apiData);
            vernumLabel.innerHTML = apiData.version;
            instaLabel.innerHTML = apiData.instance;
        } else console.error(e);
    }
    xhr2.send(null);
}