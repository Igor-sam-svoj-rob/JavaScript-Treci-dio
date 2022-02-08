"use-strict";

document.querySelector("#input").addEventListener("keydown", (event) => {
  if (event.key == "Enter") apiRequest();
});

document.querySelector("#search").addEventListener("click", () => {
  apiRequest();
});

apiRequest = function () {
  document.querySelector("#grid").textContent = "";
  const url =
    "https://api.unsplash.com/search/photos?query=" +
    input.value +
    "&per_page=10&client_id=i9hSyYCj80PDDyJKB8ylf5SLwvBcSGj_AdQKY8WYK6E";

  fetch(url)
    .then(function (response) {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(function (data) {
      loadImages(data);
    });
};

loadImages = function (data) {
  for (let i = 1; i < data.results.length; i++) {
    let image = document.createElement("div");
    image.className = "img";
    image.style.backgroundImage =
      "url(" + data.results[i].urls.raw + "&w=1366&h=768" + ")";
    image.addEventListener("click", function () {
      window.open(data.results[i].links.download, "_blank");
    });
    document.querySelector("#grid").appendChild(image);
  }
};
