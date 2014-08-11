'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function (tabId, status, tab) {
    // Hide page action as defaul
    chrome.pageAction.hide(tabId);


    if(status.status === 'complete') {
        console.log(tab);
        if(tab) {
            if (tab.url.indexOf('facebook') !== -1) {
                chrome.pageAction.show(tabId);
                chrome.tabs.executeScript(null, {code: 'console.log(window.onscroll = function(e) {console.log(this); })'});
            }
        }
    }
});

console.log('\'Allo \'Allo! Event Page for Page Action');
