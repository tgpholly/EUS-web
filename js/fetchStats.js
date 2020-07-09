function fetchStatsFromAPI() {
    updateFileStats();
    getServerInfo();
}

function updateFileStats() {
    let xhr = new XMLHttpRequest(),
        pngLabel = document.getElementById("png"),
        jpgLabel = document.getElementById("jpg"),
        gifLabel = document.getElementById("gif"),
        spaceBar = document.getElementById("spaceBar"),
        percentLabel = document.getElementById("percent"),
        usedspaceLabel = document.getElementById("usedspace"),
        totalspaceLabel = document.getElementById("totalspace");
    xhr.open("GET", "/api/get-stats?f=1&s=1", true);
    xhr.onload = (e) => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const apiData = JSON.parse(xhr.responseText),
                  percentage = (apiData.space.usage.mb / apiData.space.total.mbvalue * 100);
            pngLabel.innerHTML = apiData.files.png;
            jpgLabel.innerHTML = apiData.files.jpg + apiData.files.jpeg;
            gifLabel.innerHTML = apiData.files.gif;
            spaceBar.value = percentage;
            percentLabel.innerHTML = `${percentage.toFixed(2)}% Usage`;
            usedspaceLabel.innerHTML = apiData.space.usage.string;
            totalspaceLabel.innerHTML = apiData.space.total.string;
        } else console.error(e);
    }
    xhr.send(null);
}

function getServerInfo() {
    let xhr = new XMLHttpRequest(),
        vernumLabel = document.getElementById("vernum"),
        instaLabel = document.getElementById("insta");
    xhr.open("GET", "/api/get-info", true);
    xhr.onload = (e) => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const apiData = JSON.parse(xhr.responseText);
            vernumLabel.innerHTML = apiData.version;
            instaLabel.innerHTML = apiData.instance;
        } else console.error(e);
    }
    xhr.send(null);
}