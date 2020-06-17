const buttons = [
    ["Home", "/"],
    ["Downloads", "/downloads/"],
    ["Projects", "/projects/"],
];

function navbar(pageIdentifier) {
    let constructedNavbarItems = "";
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i][0] == pageIdentifier) {
            constructedNavbarItems += `
                <div class="Button Selected">
                    ${buttons[i][0]}
                </div>
            `;
        } else {
            constructedNavbarItems += `
                <div class="Button" onclick="go('${buttons[i][1]}')">
                    ${buttons[i][0]}
                </div>
            `;
        }
    }
    document.getElementById("navbarItemContainer").innerHTML = constructedNavbarItems;
}