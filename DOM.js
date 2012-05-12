module.exports = function DOM(f) {
  return "<!doctype html><script type='text/javascript'>("+f.toString()+").call(this)</script>"
}
