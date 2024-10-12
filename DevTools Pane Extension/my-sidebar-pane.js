let elementHeight = 0;
let elementWidth = 0;
let parentHeight = 0;
let parentWidth = 0;
let percentHeight = 100;
let percentWidth = 100;
let remHeight = 0;
let remWidth = 0;
let vHeight = 0;
let vWidth = 0;

chrome.devtools.panels.elements.onSelectionChanged.addListener(function () {
    // Execute JavaScript on the inspected page to get the selected element's dimensions
    chrome.devtools.inspectedWindow.eval(
        `(() => {
            const el = $0; // $0 references the selected element in the Elements panel
            if (!el) return null;

            // Get height and width of the selected element
            const height = el.offsetHeight || el.clientHeight;
            const width = el.offsetWidth || el.clientWidth;

            const parent = el.parentElement;

            const parentHeight = parent.offsetHeight || parent.clientHeight;
            const parentWidth = parent.offsetWidth || parent.offsetWidth;    
            
            const rootFontSize = getComputedStyle(document.documentElement).fontSize;
        
            return {height, width, parentHeight, parentWidth, rootFontSize};
        })()`,
        (result, isException) => {
            if (isException) {
                console.error('An error occurred:', isException);
            } else if (result) {
                console.log(result.rootFontSize);
                calcDimensions(result);
                setDimensions();

            } else {
                console.log('No element selected.');
            }
        }
    );
});

function calcDimensions(result) {

    elementHeight = result.height;
    elementWidth = result.width;
    parentHeight = result.parentHeight;
    parentWidth = result.parentWidth;


    if (parentHeight != 0 && parentWidth != 0) {
        //percent dimensions
        percentHeight = (elementHeight / parentHeight) * 100;
        percentWidth = (elementWidth / parentWidth) * 100;
    }

    //rem dimensions
    // remHeight = elementHeight / (result.rootFontSize);
    // remWidth = elementWidth / (result.rootFontSize);

    // //viewport dimensions
    // vHeight = elementHeight / document.documentElement.clientHeight;
    // vWidth = elementWidth / document.documentElement.clientWidth;



}

function setDimensions() {
    document.getElementById('pxHeight').textContent = elementHeight;
    document.getElementById('pxWidth').textContent = elementWidth;

    document.getElementById('percentHeight').textContent = percentHeight.toFixed(2);
    document.getElementById('percentWidth').textContent = percentWidth.toFixed(2);

    // document.getElementById('remHeight').textContent = remHeight;
    // document.getElementById('remWidth').textContent = remWidth;

    // document.getElementById('emHeight').textContent = emHeight;
    // document.getElementById('emWidth').textContent = emWidth;

    // document.getElementById('vHeight').textContent = vHeight;
    // document.getElementById('vWidth').textContent = vWidth;
}
