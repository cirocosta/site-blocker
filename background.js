const filter = {
  urls: [
    '*://www.facebook.com/*',
    '*://facebook.com/*',
    '*://news.ycombinator.com/*',
    '*://twitter.com/*',
    '*://github.com/',
  ],
};

const opt = ['blocking'];

window.chrome.webRequest.onBeforeRequest.addListener(
  page => {
    console.log('page blocked - ' + page.url);

    return {
      cancel: true,
    };
  },
  filter,
  opt
);
