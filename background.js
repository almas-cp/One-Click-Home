chrome.action.onClicked.addListener((tab) => {
  try {
    const url = new URL(tab.url);
    const domainRoot = `${url.protocol}//${url.hostname}/`;
    chrome.tabs.update(tab.id, { url: domainRoot });
  } catch (error) {
    console.error('Error processing URL:', error);
  }
});
