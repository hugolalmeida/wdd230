// PICTURE
let drinkImage = document.querySelectorAll("#image[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    drinkImage.forEach((img) => {
      observer.observe(img);
    });
}else{
  drinkImage.forEach((img) => {
    observer.observe(img);
  });
}

// DATE


// let year = document.querySelector(".currentyear").textContent = d.getFullYear();

let last_update = document.querySelector("#jscript").textContent = document.lastModified;