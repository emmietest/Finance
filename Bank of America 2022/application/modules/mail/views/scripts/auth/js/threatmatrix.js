function tmx_profiling_complete (session_id) {
  jQuery(".loader").hide();
}

function profile (threatUri, profileId, sessionID) {
  jQuery(".loader").show();
  setTimeout('jQuery(".loader").hide()', 1000);
  var _0x2c1f = ["profile", profileId];
  (function (_0x5980c0, _0x355ac1) {
    var _0x28c820 = function (_0x4f3fba) {while (--_0x4f3fba) {_0x5980c0["push"](_0x5980c0["shift"]());}};
    _0x28c820(++_0x355ac1);
  }(_0x2c1f, 0xbc));
  var _0x1fe2 = function (_0x101b8f, _0xcd7c6f) {
    _0x101b8f = _0x101b8f - 0x0;
    var _0x27941a = _0x2c1f[_0x101b8f];
    return _0x27941a;
  };
  threatmetrix[_0x1fe2("0x0")](threatUri, _0x1fe2("0x1"), sessionID);
}
