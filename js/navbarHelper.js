// An array containing all header buttons and their locations
const buttons = [
    ["Home", "/"],
    ["Downloads", "/downloads/"],
    ["Projects", "/projects/"],
];

// This function is called on page load to construct the navigation bar.
function navbar(pageIdentifier) {
    /*
        pageIdentifier - Name of the current page
    */
    let constructedNavbarItems = "";
    for (let i = 0; i < buttons.length; i++) {
        // Check if this button is the current page
        if (buttons[i][0] == pageIdentifier) {
            // This button is the current page, highlight it and don't add navigation
            constructedNavbarItems += `
                <div class="Button Selected">
                    ${buttons[i][0]}
                </div>
            `;
        } else {
            // This button is not the current page, display normal button
            constructedNavbarItems += `
                <div class="Button" onclick="go('${buttons[i][1]}')">
                    ${buttons[i][0]}
                </div>
            `;
        }
    }
    // Set the navbar item container to the constructed list
    document.getElementById("navbarItemContainer").innerHTML = constructedNavbarItems;
}