var imgCategory = document.querySelectorAll('.category img');
var subCategory = document.querySelectorAll('.category .subtitle');
var searchBar = document.querySelector('#search-text');
var toolsBtn = document.querySelector('#header-tools i');
var toolsMenu = document.querySelector('#menu-tools');
var subValue = "";

subCategory.forEach((subtitle, index) => {
    subtitle.addEventListener('mouseover', () => {
        imgCategory[index].style.transform = "scale(1.15)";
        subtitle.style.opacity = "0.3";
        subtitle.style.cursor = "pointer";
        subValue = subtitle.innerHTML;
        subtitle.innerHTML = "";
    });

    subtitle.addEventListener('mouseout', () => {
        imgCategory[index].style.transform = "scale(1)";
        subtitle.style.opacity = "1";
        subtitle.innerHTML = subValue;
    });
});

document.addEventListener('mouseup', (e) => {
    if(!searchBar.contains(e.target)) {
        searchBar.style.background = "#aaa";
    } else {
        searchBar.style.background = "#fff";
    }
});

toolsBtn.addEventListener('mouseover', () => {
    toolsMenu.classList.add('active');
});

toolsMenu.addEventListener('mouseleave', () => {
    toolsMenu.classList.remove('active');
});


