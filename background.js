chrome.browserAction.onClicked.addListener(handleClick);

function handleClick() {
  chrome.tabs.create({
    active: true,
    url: chrome.extension.getURL("index.html")
  });
}
