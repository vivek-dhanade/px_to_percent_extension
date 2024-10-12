// throw 'Hey! Looks like things are hooked up right.'
chrome.devtools.panels.elements.createSidebarPane('My Pane',(pane)=>{
    // pane.setObject({hey:'there'})
    pane.setPage('my-sidebar-pane.html')
})