var parallaxTarget = document.querySelectorAll('.parallax');
var navigationListItems = document.querySelectorAll('.navigation__list__item');
var navigationListItemsArr = Array.prototype.slice.call(navigationListItems); 
var sitemapListItems = document.querySelectorAll('.site-map__list__item');
var sitemapListItemsArr = Array.prototype.slice.call(sitemapListItems); 

const compactCards = [...document.querySelectorAll('.card')];
compactCards.forEach(compactCard => {
  compactCard.style.cursor = 'pointer';
  let down, up, link = compactCard.querySelector('h4 a');
  compactCard.onmousedown = () => down = +new Date();
  compactCard.onmouseup = () => {
    up = +new Date();
    if ((up - down) < 150) {
      link.click();
    }
  }
});

window.addEventListener("scroll", function() 
{
    let offset = window.pageYOffset;

    var index = 0, length = parallaxTarget.length;

    for (index; index < length; index++) {
        
        parallaxTarget[index].style.backgroundPositionY = offset * 0.3 + "px";
    }
})

navigationListItemsArr.forEach((e) => {
  if (/profile/.test(window.location.href)) {
    navigationListItemsArr[1].classList.add('current-page');
    showCurrentPageIndicator();
  } else if (/work/.test(window.location.href)) {
    navigationListItemsArr[2].classList.add('current-page');
    showCurrentPageIndicator();
  } else if (/articles/.test(window.location.href)) {
    navigationListItemsArr[3].classList.add('current-page');
    showCurrentPageIndicator();
  } else if (/talks/.test(window.location.href)) {
    navigationListItemsArr[4].classList.add('current-page');
    showCurrentPageIndicator();
  } else {
    navigationListItemsArr[0].classList.add('current-page');
    showCurrentPageIndicator();
  }
});

sitemapListItemsArr.forEach((e) => {
  if (/profile/.test(window.location.href)) {
    sitemapListItemsArr[1].classList.add('current-page');
    showCurrentPageIndicator();
  } else if (/work/.test(window.location.href)) {
    sitemapListItemsArr[2].classList.add('current-page');
    showCurrentPageIndicator();
  } else if (/articles/.test(window.location.href)) {
    sitemapListItemsArr[3].classList.add('current-page');
    showCurrentPageIndicator();
  } else if (/talks/.test(window.location.href)) {
    sitemapListItemsArr[4].classList.add('current-page');
    showCurrentPageIndicator();
  } else {
    sitemapListItemsArr[0].classList.add('current-page');
    showCurrentPageIndicator();
  }
});

function showCurrentPageIndicator() {
  var currentPageIndicators = document.querySelectorAll('li.current-page > .current-page__indicator');
  var currentPageIndicatorsArr = Array.prototype.slice.call(currentPageIndicators); 
  currentPageIndicatorsArr.forEach((e) => {
    e.style.display = "inline";
  })
}