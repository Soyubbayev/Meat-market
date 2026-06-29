let datas = [
   {
    id: 1,
    image: "./images/1-meat-rasm.jpg",
    title__h4: "BEEF FOR NUTRITIONS",
    title__h2: "Beef 1 Kg Pack",
    subtitle: "Flowbase is the largest webflow resource site, with. Flowbase is the ",
    button: "Add To Cart - $12"
  },
  {
    id: 2,
    image: "./images/2-meat-rasm.jpg",
    title__h4: "BEEF FOR NUTRITIONS",
    title__h2: "Beef 1 Kg Pack",
    subtitle: "Flowbase is the largest webflow resource site, with. Flowbase is the ",
    button: "Add To Cart - $12"
  },
  {
    id: 3,
    image: "./images/3-meat-rasm.jpg",
    title__h4: "BEEF FOR NUTRITIONS",
    title__h2: "Beef 1 Kg Pack",
    subtitle: "Flowbase is the largest webflow resource site, with. Flowbase is the ",
    button: "Add To Cart - $12"
  },
  {
    id: 4,
    image: "./images/4-meat-rasm.jpg",
    title__h4: "BEEF FOR NUTRITIONS",
    title__h2: "Beef 1 Kg Pack",
    subtitle: "Flowbase is the largest webflow resource site, with. Flowbase is the ",
    button: "Add To Cart - $12"
  },
  {
    id: 5,
    image: "./images/5-meat-rasm.jpg",
    title__h4: "BEEF FOR NUTRITIONS",
    title__h2: "Beef 1 Kg Pack",
    subtitle: "Flowbase is the largest webflow resource site, with. Flowbase is the ",
    button: "Add To Cart - $12"
  },
  {
    id: 6,
    image: "./images/6-meat-rasm.jpg",
    title__h4: "BEEF FOR NUTRITIONS",
    title__h2: "Beef 1 Kg Pack",
    subtitle: "Flowbase is the largest webflow resource site, with. Flowbase is the ",
    button: "Add To Cart - $12"
  },
  {
    id: 7,
    image: "./images/7-meat-rasm.jpg",
    title__h4: "BEEF FOR NUTRITIONS",
    title__h2: "Beef 1 Kg Pack",
    subtitle: "Flowbase is the largest webflow resource site, with. Flowbase is the ",
    button: "Add To Cart - $12"
  },
  {
    id: 8,
    image: "./images/8-meat-rasm.jpg",
    title__h4: "BEEF FOR NUTRITIONS",
    title__h2: "Beef 1 Kg Pack",
    subtitle: "Flowbase is the largest webflow resource site, with. Flowbase is the ",
    button: "Add To Cart - $12"
  }
]

let boxes = document.querySelector(".boxes")
let home = null

datas.forEach((item) => {
  const box = document.createElement("div")
  box.innerHTML = `
  <img style="border-radius:15px" width="325" height="300" src="${item.image}" alt=""
  <h4>${item.title__h4}</h4>
  <h2>${item.title__h2}</h2>
  <p style="width:250px; color:#656D89">${item.subtitle}</p>
  <button style="padding:12px 60px; border-radius:20px; border:2px solid #E31244; color:#E31244; background-color:#fff">${item.button}</button>
  <span>${item.id}</span>`;

  boxes.appendChild(box)
  box.style.width="270pxpx"
  box.style.height="476px"
 box.style.display="flex"
 box.style.flexDirection="column"
 box.style.alignItems="center"
 box.style.gap="7px"
  box.addEventListener("click", () => {
    home = item.id
    console.log("Selected home:", home);
    window.location.href = `home.html?id=${home}`
  })
})
