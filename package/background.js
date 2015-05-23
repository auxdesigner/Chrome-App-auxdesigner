chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('ux.html', {
    'bounds': {
      'width': 800, 
      'height': 600
    }
  });
});
//