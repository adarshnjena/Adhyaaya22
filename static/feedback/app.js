document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.testimonial .indicators li').forEach((element, key) => {
        element.addEventListener('click', function () {
            //var i = $(this).index();
            var i = key;
            var targetElements = document.querySelectorAll('.testimonial .tabs li');
            targetElements[i].classList += 'active';
            var nodes = [...targetElements];
            // targetElement.eq(i).addClass("active");
            nodes.forEach((node, key2) => {
                if (key2 !== i) {
                    node.classList.remove('active');
                }
            });
            // targetElements.not(targetElements[i]).removeClass("active");
        });
    });
    document.querySelectorAll('.testimonial .tabs li').forEach((element, key) => {
        element.addEventListener('click', function () {
            var i = key;
            var targetElements = document.querySelectorAll('.testimonial .tabs li');
            targetElements[i].classList += 'active';
            var nodes = [...targetElements];
            nodes.forEach((node, key2) => {
                if (key2 !== i) {
                    node.classList.remove('active');
                }
            });
            //targetElements.classList += "active";
            //targetElements.not($(this)).removeClass("active");
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.slider .swiper-pagination span').forEach(function (element, key) {
        element.textContent = '0' + (key + 1).toString();
    });
});
console.log('PSO');
/*
document.querySelector(document).ready(function () {
  document.querySelector(".testimonial .indicators li").click(function () {
    var i = document.querySelector(this).index();
    var targetElement = document.querySelector(".testimonial .tabs li");
    targetElement.eq(i).classList.add("active");
    targetElement.not(targetElement[i]).removeClass("active");
  });
  document.querySelectorAll(".testimonial .tabs li").forEach((element) => {
    element.addEventListener('click',function () {
      var targetElement = document.querySelector(".testimonial .tabs li");
      targetElement.classList += "active";
      targetElement.not(document.querySelector(this)).removeClass("active");
    });
  })
});
document.querySelector(document).ready(function () {
  document.querySelector(".slider .swiper-pagination span").each(function (i) {
    document.querySelector(this)
      .text(i + 1)
      .prepend("0");
  });
}); */
