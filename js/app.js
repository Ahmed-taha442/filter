(function () {
  let changes = [
    {
      title: "Ahmed",
      text: "loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmkjipuiphiuhuphpuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuhpiuh",
      pic: "img/customer-1.jpg",
    },
    {
      title: "reda",
      text: "gfhfhhfemmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmkjipuiphiuhuphpuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuhpiuh",
      pic: "img/customer-2.jpg",
    },
    {
      title: "khaled",
      text: "ereoremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmkjipuiphiuhuphpuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuhpiuh",
      pic: "img/customer-3.jpg",
    },
    {
      title: "mahmoud",
      text: "dffgdgemmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmkjipuiphiuhuphpuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuhpiuh",
      pic: "img/customer-4.jpg",
    },
  ];
  let index = 0;
  let par = document.getElementById("customer-text");
  let name = document.getElementById("customer-name");
  let btns = document.querySelectorAll(".btn");
  let img = document.getElementById("customer-img");

  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      value = e.target;
      if (value.classList.contains("prevBtn")) {
        if (index === 0) {
          index = changes.length;
        }
        index--;
        name.innerHTML = changes[index].title;
        par.innerHTML = changes[index].text;
        img.src = changes[index].pic;
      }
      if (value.classList.contains("nextBtn")) {
        if (index === changes.length - 1) {
          index = 0;
        }
        index++;
        name.innerHTML = changes[index].title;
        par.innerHTML = changes[index].text;
        img.src = changes[index].pic;
      }
    });
  });
})();
