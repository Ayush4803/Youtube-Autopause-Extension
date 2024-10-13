chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
      if (tab.url.includes("youtube.com/watch")) {
        chrome.tabs.sendMessage(tab.id, { action: "play" });
      } else {
        chrome.tabs.query({ url: "*://www.youtube.com/*" }, (tabs) => {
          tabs.forEach((ytTab) => {
            chrome.tabs.sendMessage(ytTab.id, { action: "pause" });
          });
        });
      }
    });
  });
  