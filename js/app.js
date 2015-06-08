(function(require) {
  LazyLoader.load('lib/dom-scheduler.js', () => {
    var scheduler = new DomScheduler();
    LazyLoader.load(['gaia-header.js'], () => {
      var gaiaHeadersElements = document.querySelectorAll('gaia-header');
      Array.prototype.forEach.call(gaiaHeadersElements, elm => {
          elm.attachBehavior(scheduler);
      });

      append.addEventListener('click', function() {
        var div = document.createElement('div');
        div.innerHTML = '<gaia-header action="menu"><h1>Gaia Header</h1>' +
                        '</gaia-header>';
        div.firstElementChild.attachBehavior(scheduler);
        document.body.insertBefore(div.firstElementChild, message);
      });
    });
  });
})();