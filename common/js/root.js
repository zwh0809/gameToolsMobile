
var hostname = "http://didi-gz4.jiaoyou365.com";
var hostname2 = "http://didi-gz4.jiaoyou365.com";
var  host = "http://didi-gz4.jiaoyou365.com";
const root = {
  localUrl: hostname,
  host: host,
  backUrl: hostname2 + ":18082", // gz5
  // loginUrl: hostname + ':6636',  // zzy接口
  loginUrl: hostname + ":18083", // didi-gz3 --ZSM端口 新接口
  talkUrl: hostname2,
  listenUrl: hostname2 + ":9663", //gz5
};
// export default root
module.exports = root;
