(function () {
  var hostname = window.location.hostname;
  if (hostname === "127.0.0.1" || hostname === "localhost") {
    return;
  }
  var _hmt = _hmt || [];
  (function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?2b662b46c9f40a56e285dd99686bf851";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
})();
