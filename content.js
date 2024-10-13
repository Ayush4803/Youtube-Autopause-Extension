chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "play") {
      const video = document.querySelector("video");
      if (video && video.paused) {
        video.play();
      }
    } else if (request.action === "pause") {
      const video = document.querySelector("video");
      if (video && !video.paused) {
        video.pause();
      }
    }
  });
  