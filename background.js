const filter = {
  urls: [
    '*://facebook.com/*',
    '*://news.ycombinator.com/*',
    '*://twitter.com/*',
  ],
};

const opt = ['blocking'];

window.chrome.webRequest.onBeforeRequest.addListener(
  () => {
    cancel: true;
  },
  filter,
  opt
);
