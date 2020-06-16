$(".jsContent").slideUp();

let btnFree = $(".btnFree");
let severalsPlans__button = $(".severalsPlans__button");
let severalsPlans__buttonGold = $(".severalsPlans__button--gold");
let btnBasic = $(".btnBasic");
let btnSilver = $(".btnSilver");
let btnGold = $(".btnGold");
let plusFree = $("#plusFree");
let plusBasic = $("#plusBasic");
let plusSilver = $("#plusSilver");
let plusGold = $("#plusGold");

btnFree.on("click", function (event) {
  event.preventDefault();
  $(this).next().slideToggle(300);
  severalsPlans__button.toggleClass("severalsPlans__button__active");
  plusFree.toggle();
});

$(btnBasic).click(function () {
  $(this).next().slideToggle(300);
  severalsPlans__button.toggleClass("severalsPlans__button__active");
  plusBasic.toggle();
});

$(btnSilver).click(function () {
  $(this).next().slideToggle(300);
  severalsPlans__button.toggleClass("severalsPlans__button__active");
  plusSilver.toggle();
});

$(btnGold).click(function () {
  $(this).next().slideToggle(300);
  severalsPlans__buttonGold.toggleClass(
    "severalsPlans__button--gold__activeRed"
  );
  plusGold.toggle();
});

