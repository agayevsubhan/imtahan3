const service = document.querySelector(".service");
console.log("cg");
fetch("https://northwind.vercel.app/api/categories")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      const div = document.createElement("div");
      const h2 = document.createElement("h2");
      const p = document.createElement("p");
      const img = document.createElement("img");

      div.classList.add("box");
      h2.innerText = data[i].name;
      p.innerText = data[i].description;

      div.append(img, h2, p);
      service.append(div);
    }
  });
