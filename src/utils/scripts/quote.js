``












    function screenshot(url, format = 'png', quality = 1) {
      const canvas = document.createElement('canvas')
      const imgNode = document.createElement('img');

      var retPromise = new Promise(function (resolve) {
          imgNode.onload = function () {

              canvas.height = imgNode.height
              canvas.width = imgNode.width;
              const context = canvas.getContext('2d')
              context.filter = 'brightness(0.5)';
              context.drawImage(imgNode, 0, 0, imgNode.width, imgNode.height)
              const url = canvas.toDataURL(`image/${format}`, quality);
              resolve(url)
          }
      });
      imgNode.src = url;
      return retPromise;
  }
  function getRandomFromArray(arr){
      return arr[Math.floor(Math.random() * (arr.length - 0.1))];
  }
function generate(text){
  if(text.length > 115)
  document.querySelector('.text').style.fontSize = '23px';
  document.querySelector('.text').textContent = text;
  const prom = new Promise((resolve, reject) => {
      getDataUri('https://source.unsplash.com/random/'+ getRandomFromArray(dimension) +'?'+selected+'&sig=' + Math.floor(Math.random() * 100), function (dataURL) {
      const img = document.querySelector('.quote-container');
      screenshot(dataURL).then(function(url){
          img.style.backgroundImage = 'url(' + url + ')';
          html2canvas(document.querySelector('.quote-container'), { scrollY: -window.scrollY }).then(function (canvas) {
          resolve(canvas.toDataURL());
      });
      }
      );
  });
  });
  return prom;
}



const topics = [
  "bikes",
  "cars",
  "ship",
  "sea",
  "nature",
  "sky",
  "plane",
  "people",
  "lion",
  "tiger",
  "success",
  "art",
  "creation",
  "birds",
  "wildlife",
  "clown",
  "joker",
  "sea",
  "machine",
  "animals",
  "cheetah",
];
const dimension = [
  "400x700",
  "400x600",
  "800x600",
  "400x800",
  "500x1000",
  "",
  "",
  "",
  "",
];
let imageContainer = null;

export function initImage() {
  imageContainer = document.querySelector(".image-container");
  refreshImage()
}
var getDataUri = function (targetUrl, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    var reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  var proxyUrl = "https://cors-anywhere.herokuapp.com/";
  xhr.open("GET", targetUrl);
  xhr.responseType = "blob";
  xhr.send();
};

export function refreshImage() {
  console.log('adfadf')
  const selected = getRandomFromArray(topics);
  getDataUri("https://source.unsplash.com/random/", function (dataURL) {
    screenshot(dataURL).then(function (url) {
      imageContainer.style.filter = "brightness(1)";
      imageContainer.style.backgroundImage = "url(" + url + ")";
    });
  });
}

export function downloadImage() {
  const clone = $(".quote-container").clone();
  clone.appendTo(document.body);
  clone.width(400);
  html2canvas(document.querySelector(".quote-container"), {
    scrollY: -window.scrollY,
  }).then(function (canvas) {
    var link = document.createElement("a");
    link.download = "image_from_samuellawrentz.png";
    link.href = canvas.toDataURL();
    link.click();
    clone.remove();
  });
}
