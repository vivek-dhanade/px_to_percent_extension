// Create a panel in DevTools
browser.devtools.panels.create(
    "PX to % Converter", // Title of the panel
    "",                  // Path to an icon (optional)
    "index.html",        // Path to the page displayed within the panel
    function(panel) {
        console.log("PX to Percent panel created successfully!");
    }
);
