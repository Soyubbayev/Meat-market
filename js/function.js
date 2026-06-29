let datas = [
  {
    id: 1,
    image: "./images/13-meat-rasm.png",
    title__h4: "BEEF FOR NUTRITIONS",
    title__h2: "Beef 1 Kg Pack",
    subtitle: "Flowbase is the largest webflow resource site, with. Flowbase is the ",
    button: "Add To Cart - $12"
  },
  {
    id: 2,
    image: "./images/14-meat-rasm.avif",
    title__h4: "BEEF FOR NUTRITIONS",
    title__h2: "Beef 1 Kg Pack",
    subtitle: "Flowbase is the largest webflow resource site, with. Flowbase is the ",
    button: "Add To Cart - $12"
  },
  {
    id: 3,
    image: "./images/15-meat-rasm.jpg",
    title__h4: "BEEF FOR NUTRITIONS",
    title__h2: "Beef 1 Kg Pack",
    subtitle: "Flowbase is the largest webflow resource site, with. Flowbase is the ",
    button: "Add To Cart - $12"
  },
  {
    id: 4,
    image: "./images/16-meat-rasm.avif",
    title__h4: "BEEF FOR NUTRITIONS",
    title__h2: "Beef 1 Kg Pack",
    subtitle: "Flowbase is the largest webflow resource site, with. Flowbase is the ",
    button: "Add To Cart - $12"
  }
]

const params = new URLSearchParams(window.location.search)
const id = Number(params.get("id"))

const item = datas.find((d) => d.id === id)
if (item) {
  document.body.innerHTML = `
    <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      gap: 15px;
      font-family: sans-serif;
    ">
      <img src="${item.image}" width="350" style="border-radius: 20px;" alt="">
      <h4 style="color: #F8BA12;">${item.title__h4}</h4>
      <h2>${item.title__h2}</h2>
      <p style="width: 300px; text-align: center; color: #656D89;">${item.subtitle}</p>
      <button style="
        padding: 12px 60px;
        border-radius: 20px;
        border: 2px solid #E31244;
        color: #E31244;
        background-color: #fff;
        font-size: 16px;
        cursor: pointer;
      ">${item.button}</button>
    </div>
  `
} else {
  document.body.innerHTML = `<p style="text-align:center; margin-top:50px;">Mahsulot topilmadi</p>`
}