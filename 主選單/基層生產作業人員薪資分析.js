
const subSideBarNavs = document.querySelectorAll(".sub-sidebar-nav")
const mainContent = document.querySelector(".main-content");

function subSidebarshift(element) {
    subSideBarNavs.forEach(x => {
        x.classList.remove('sub-sidebar-nav-clicked');
    });
    mainContent.classList.add("main-content-clicked")
    element.classList.add('sub-sidebar-nav-clicked');
    if (element.id === "nav1") {
        mainContent.src = '../內容/基層生產作業人員薪資分析/01基層人員整體市場/基層人員整體市場.html'
    } else if (element.id === "nav2") {
        mainContent.src = '../內容/基層生產作業人員薪資分析/02生產人員整體市場/生產人員整體市場.html'
    } else if (element.id === 'nav3') {
        mainContent.src = '../內容/基層生產作業人員薪資分析/03生產作業人員-北部地區/生產作業人員-北部地區.html'
    } else if (element.id === 'nav4') {
        mainContent.src = '../內容/基層生產作業人員薪資分析/04生產作業人員-新竹地區/生產作業人員-新竹地區.html'
    } else if (element.id === 'nav5') {
        mainContent.src = '../內容/基層生產作業人員薪資分析/05生產作業人員-南部地區/生產作業人員-南部地區.html'
    } else if (element.id === 'nav6') {
        mainContent.src = '../內容/基層生產作業人員薪資分析/06生產作業人員-石化製造類/生產作業人員-石化製造類.html'
    } else if (element.id === "nav7") {
        mainContent.src = '../內容/基層生產作業人員薪資分析/07生產作業人員-食品製造類/生產作業人員-食品製造類.html'
    } else if (element.id === 'nav8') {
        mainContent.src = '../內容/基層生產作業人員薪資分析/08生產作業人員-資訊電子製造類/生產作業人員-資訊電子製造類.html'
    } else if (element.id === 'nav9'){
        mainContent.src = '../內容/基層生產作業人員薪資分析/09生產作業人員-機械機電製造類/生產作業人員-機械機電製造類.html'
    } 
}