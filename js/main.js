let datas = [
   {
    id:1,
    image:"./images/13-meat-rasm.png",
    title__h4:"BEEF FOR NUTRITIONS",
    title__h2:"Beef 1 Kg Pack",
    subtitle:"Flowbase is the largest webflow resource site, with. Flowbase is the ",
    button:"Add To Cart - $12"
  },
  {
    id:2,
    image: "./images/14-meat-rasm.avif",
    title__h4:"BEEF FOR NUTRITIONS",
    title__h2:"Beef 1 Kg Pack",
     subtitle:"Flowbase is the largest webflow resource site, with. Flowbase is the ",
     button:"Add To Cart - $12"
  },
  {
    id:3,
    image:"./images/15-meat-rasm.jpg",
    title__h4:"BEEF FOR NUTRITIONS",
    title__h2:"Beef 1 Kg Pack",
      subtitle:"Flowbase is the largest webflow resource site, with. Flowbase is the ",
      button:"Add To Cart - $12"
  },
  {
    id:4,
    image:"./images/16-meat-rasm.avif",
    title__h4:"BEEF FOR NUTRITIONS",
    title__h2:"Beef 1 Kg Pack",
    subtitle:"Flowbase is the largest webflow resource site, with. Flowbase is the ",
    button:"Add To Cart - $12"
  }

]

let boxes = document.querySelector(".boxes")
let card = null

datas.forEach((item) => {
  const box = document.createElement("div")
  box.innerHTML = `
  <img style="border-radius:15px" width="300px" height="400" src="${item.image}" alt=""
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
    card = item.id
    console.log("Selected card:", card);
    window.location.href = `card.html?id=${card}`
  })
})

let category = document.querySelector(".category");
    let ochil = document.querySelector("#ochil");

    category.addEventListener("mouseenter", function () {
        ochil.hidden = false;
    });

    category.addEventListener("mouseleave", function () {
        ochil.hidden = true;
    });