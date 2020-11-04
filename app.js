
const sidebarButtons = document.querySelectorAll(".sidebar-button");
const subSidebar = document.querySelector('.subSidebar');
const overviewScreen = document.querySelector('.overviewScreen');
const landingNav = document.querySelector(".landing-nav");

function sidebarclick(element) {
    landingNav.style.opacity = 0;
    overviewScreen.classList.remove('overviewScreen-clicked');
    sidebarButtons.forEach(x => {
        x.classList.remove('sidebar-button-clicked')
    });
    element.classList.add("sidebar-button-clicked");
    subSidebar.classList.add('subSidebar-clicked');
    if (element.id === 'sidebarButton1') {
        subSidebar.src = "./SecondSidebar/公司概況及薪資福利政策.html"
    } else if (element.id === 'sidebarButton2') {
        subSidebar.src = "./SecondSidebar/基層生產作業人員薪資分析.html"
    } else if (element.id === 'sidebarButton3') {
        subSidebar.src = "./SecondSidebar/整體薪資市場分析.html"
    } else if (element.id === 'sidebarButton4') {
        subSidebar.src = "./SecondSidebar/附錄.html"
    }
}

function overviewClick(element){
    landingNav.style.opacity = 0;
    sidebarButtons.forEach(x => {
        x.classList.remove('sidebar-button-clicked')
    });
    subSidebar.classList.remove('subSidebar-clicked');
    overviewScreen.classList.add('overviewScreen-clicked');
    element.classList.add("sidebar-button-clicked");
    if(element.id === 'sidebarButton5'){
        overviewScreen.src = "./SecondSidebar/總覽.html"
    }
}