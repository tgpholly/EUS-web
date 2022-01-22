fetchStatsFromAPI(false);

function fetchStatsFromAPI(b) {
	if (!b) return;
	// Call both api endpoints, used for the homepage stats
	updateFileStats();
	getServerInfo();
}

// Call EUS's space API
function updateFileStats() {
	let xhr = new XMLHttpRequest(),
		// Referance all elements that need to be updated
		apiFilesDiv = document.getElementById("APIFiles"),
		spaceBar = document.getElementById("spaceBar"),
		percentLabel = document.getElementById("percent"),
		usedspaceLabel = document.getElementById("usedspace"),
		totalspaceLabel = document.getElementById("totalspace");
	xhr.open("GET", "/api/get-stats?f=1&s=1", true);
	xhr.onload = (e) => {
		if (xhr.readyState === 4 && xhr.status === 200) {
			const apiData = JSON.parse(xhr.responseText),
				  fileKeys = Object.keys(apiData.fileCounts),
				  // Calculate percentage for the progress bar and the label
				  percentage = (apiData.space.usage.mb / apiData.space.total.mb * 100);

			let apiFiles = "";
			for (let i = 0; i < fileKeys.length; i++) {
				const key = fileKeys[i];
				apiFiles += `${key.toUpperCase()}: ${apiData.fileCounts[key]}${(i == fileKeys.length - 1) ? "" : " | "}`;
			}
			apiFilesDiv.innerHTML = apiFiles;

			spaceBar.value = percentage;
			percentLabel.innerHTML = `${percentage.toFixed(2)}% Usage`;
			usedspaceLabel.innerHTML = apiData.space.usage.string;
			totalspaceLabel.innerHTML = apiData.space.total.string;
		} else console.error(e);
	}
	xhr.send(null);
}

// Call EUS's server info API
function getServerInfo() {
	let xhr = new XMLHttpRequest(),
		// Referance all elements that need to be updated
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