const heading = document.querySelector("h1");
const header = document.querySelector("header");

const options = {
  threshold: 0,
  rootMargin: "-200px"
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    console.log(entry.target);
    if(!entry.isIntersecting){
      header.classList.add("heavy");
    } else if(entry.isIntersecting){
      header.classList.remove("heavy")
    }
  });
}, options);

observer.observe(heading);
