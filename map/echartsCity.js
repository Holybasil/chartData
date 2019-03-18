const chinaCity = require("./chinaCity");
const fs = require("fs");

for (var key in chinaCity) {
  chinaCity[key] = [chinaCity[key].lng, chinaCity[key].lat];
}

// console.log(c);
fs.writeFileSync("./echart.js", JSON.stringify(chinaCity));
