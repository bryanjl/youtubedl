
chrome.runtime.onMessage.addListener(function(request, sender, callback){
    console.log('recieved', request);

    chrome.downloads.download({url: request.url, filename: request.name});

    return true;
});