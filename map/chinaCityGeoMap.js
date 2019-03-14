const chinaCity = require("./chinaCity");
const fs = require("fs");

var a = Object.entries(chinaCity);
var b = a.map((item, index) => {
  return {
    type: "Feature",
    properties: {
      id: String(index),
      name: item[0]
    },
    geometry: {
      type: "Point",
      coordinates: [item[1].lng, item[1].lat]
    }
  };
});

var c = {
  type: "FeatureCollection",
  features: b
};

// console.log(c);
fs.writeFileSync("./chinaCityGeoMap.json", JSON.stringify(c));
