
import axios from "axios";

var campingPhotos = [];
var firePhotos = [];
var foodPhotos = [];
var forestPhotos = [];
var nightPhotos = [];
var peoplePhotos = [];
var plantPhotos = [];
var sunsetPhotos = [];
var woodPhotos = [];

var sortedPhotosMap = {};
axios({
    method: "GET",
    url:"http://127.0.0.1:5000/sort",
})
.then((response) => {
    sortedPhotosMap = response.data
}).catch((error) => {
    if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
    }
})


console.log(sortedPhotosMap);

for (const [key, value] of Object.entries(sortedPhotosMap)) {
    switch (key) {
        case "Camping":
            for (let filename of value) {
                //console.log("../assets/" + filename);
                campingPhotos.push({
                    src: require("../assets/" + filename),
                    width: 4,
                    height: 3
                });
            }
            break;

        case "Fire":
            for (let filename of value) {
                console.log("../assets/" + filename);
                firePhotos.push({
                    src: require("../assets/" + filename),
                    width: 4,
                    height: 3
                });
            }
            break;

        case "Food":
            for (let filename of value) {
                console.log("../assets/" + filename);
                foodPhotos.push({
                    src: require("../assets/" + filename),
                    width: 4,
                    height: 3
                });
            }
            break;

        case "Forest":
            for (let filename of value) {
                console.log("../assets/" + filename);
                forestPhotos.push({
                    src: require("../assets/" + filename),
                    width: 4,
                    height: 3
                });
            }
            break;
        
        case "Night":
            for (let filename of value) {
                console.log("../assets/" + filename);
                nightPhotos.push({
                    src: require("../assets/" + filename),
                    width: 4,
                    height: 3
                });
            }
            break;

        case "People":
            for (let filename of value) {
                console.log("../assets/" + filename);
                peoplePhotos.push({
                    src: require("../assets/" + filename),
                    width: 4,
                    height: 3
                });
            }
            break;

        case "Plant":
            for (let filename of value) {
                console.log("../assets/" + filename);
                plantPhotos.push({
                    src: require("../assets/" + filename),
                    width: 4,
                    height: 3
                });
            }
            break;

        case "Sunset":
            for (let filename of value) {
                console.log("../assets/" + filename);
                sunsetPhotos.push({
                    src: require("../assets/" + filename),
                    width: 4,
                    height: 3
                });
            }
            break;
            
        case "Wood":
            for (let filename of value) {
                console.log("../assets/" + filename);
                woodPhotos.push({
                    src: require("../assets/" + filename),
                    width: 4,
                    height: 3
                });
            }
            break;
        
        default:
            break;
    }
}

export { campingPhotos, firePhotos, foodPhotos, forestPhotos, nightPhotos, peoplePhotos, plantPhotos, sunsetPhotos, woodPhotos };

/*
export const photos = [
    {
      src: require("../assets/food1.jpg"),
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 1,
      height: 1
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3
    }
  ];
*/
  