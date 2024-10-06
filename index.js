// get px input 
document.addEventListener('DOMContentLoaded', function () {
    getElementDimensions()
})

function getElementDimensions()
{
    const userAgent = navigator.userAgent;
    let selectedElement;
    if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
        chrome.debugger.attach({ tabId: currentTab }, "1.3", () => {
            chrome.debugger.sendCommand({ tabId: currentTabId }, "Runtime evaluate", { expression: "document:$0" }, (result) => {
                selectedElement = result;
            });
        });
    }

    if (userAgent.includes("Firefox")) {
        browser.devtools.inspectedWindow.eval("($0)", (result, isException) => {
            if (isException) {
                console.error("Error getting selected element:", isException);
                return;
            }

            selectedElement = result;
        });
    }

    let parentElement=selectedElement.parentElement;

    let input_px_height = document.getElementById("input-px-width").value;
    let input_px_width = document.getElementById("input-px-height").value;
    let output_percent_height = document.getElementById("output-percent-height").value;
    let output_percent_width = document.getElementById("output-percent-width").value;

    input_px_height.textContent = 45;
    input_px_width.textContent = selectedElement.width;

    output_percent_height.textContent = (input_px_height/parentElement.height)*100;
    output_percent_width.textContent = (input_px_width/parentElement.width)*100;

    document.getElementById('copy-1').addEventListener('click', function () {
        copyToClipboard('input-px-width');
    });
    document.getElementById('copy-2').addEventListener('click', function () {
        copyToClipboard('input-px-height');
    });
    document.getElementById('copy-3').addEventListener('click', function () {
        copyToClipboard('output-percent-height');
    });
    document.getElementById('copy-4').addEventListener('click', function () {
        copyToClipboard('output-percent-width');
    });
    
      function copyToClipboard(elementId) {
        const textarea = document.createElement('textarea');
        textarea.value = document.getElementById(elementId).innerText;
        
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        document.getElementById('copybutton').innerHTML = 'Copied';  // Reset the "Copy" button label after a delay (optional)
        setTimeout(() => {
          document.getElementById('copybutton').innerHTML = 'Copy';
        }, 3000); // Reset after 3 seconds
      }
}