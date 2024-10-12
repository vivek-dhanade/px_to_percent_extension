document.getElementById('getDimensions').addEventListener('click', function () {
    // Execute JavaScript on the inspected page to get the selected element's dimensions
    chrome.devtools.inspectedWindow.eval(
        `(() => {
            const el = $0; // $0 references the selected element in the Elements panel
            if (!el) return null;

            // Get height and width of the selected element
            const height = el.offsetHeight || el.clientHeight;
            const width = el.offsetWidth || el.clientWidth;
            
            return { height, width };
        })()`,
        (result, isException) => {
            if (isException) {
                console.error('An error occurred:', isException);
            } else if (result) {
                // Set the values in the input fields
                document.getElementById('input-px-height').value = result.height;
                document.getElementById('input-px-width').value = result.width;
            } else {
                console.log('No element selected.');
            }
        }
    );
});




// document.getElementById('getDimensions').addEventListener('click',()=>{
//     getElementDimensions();
// })
// // This function gets the dimensions of the selected element in DevTools
// function getElementDimensions() {
//     // Using devtools API to evaluate the selected element
//     chrome.devtools.inspectedWindow.eval("($0)", (selectedElement, isException) => {
//         if (isException) {
//             console.error("Error getting selected element:", isException);
//             return;
//         }

//         // Retrieve the parent element dimensions
//         let parentElement = selectedElement.parentElement;

//         // Get element dimensions
//         let input_px_height = selectedElement.offsetHeight;
//         let input_px_width = selectedElement.offsetWidth;
//         let parentHeight = parentElement.offsetHeight;
//         let parentWidth = parentElement.offsetWidth;

//         // Calculate percentage dimensions
//         let output_percent_height = (input_px_height / parentHeight) * 100;
//         let output_percent_width = (input_px_width / parentWidth) * 100;

//         // Assign values to the inputs
//         document.getElementById("input-px-height").value = input_px_height;
//         document.getElementById("input-px-width").value = input_px_width;
//         document.getElementById("output-percent-height").value = output_percent_height.toFixed(2);
//         document.getElementById("output-percent-width").value = output_percent_width.toFixed(2);
//     });
// }

// // Copy function
// function copyToClipboard(elementId) {
//     const textarea = document.createElement('textarea');
//     textarea.value = document.getElementById(elementId).value;

//     document.body.appendChild(textarea);
//     textarea.select();
//     document.execCommand('copy');
//     document.body.removeChild(textarea);
// }

// // Add event listeners for the copy buttons
// // document.getElementById('copy-1').addEventListener('click', function () {
// //     copyToClipboard('input-px-width');
// // });
// // document.getElementById('copy-2').addEventListener('click', function () {
// //     copyToClipboard('input-px-height');
// // });
// // document.getElementById('copy-3').addEventListener('click', function () {
// //     copyToClipboard('output-percent-height');
// // });
// // document.getElementById('copy-4').addEventListener('click', function () {
// //     copyToClipboard('output-percent-width');
// // });


// chrome.devtools.inspectedWindow.eval(
//     "inspect($$('head script[data-soak=main]')[0])",
//     function(result, isException) {

//      }
// );

// chrome.devtools.inspectedWindow.eval("setSelectedElement($0)",
//      { useContentScriptContext: true });

// function setSelectedElement(el)
// {
//     document.getElementById('input-px-height').value = el.OffsetHeight;
//     console.log(el.OffsetHeight);
// }

