
const sidebarButtons = document.querySelectorAll(".sidebar-button");
const mainScreen = document.querySelector(".main-screen");
const overviewScreen = document.querySelector('.overviewScreen');
const landingNav = document.querySelector(".landing-nav");

/*BreadCrumb*/
const breadCrumbLinks = document.querySelector(".breadCrumbLink");
const crumb1 = document.querySelector('.crumb1');

/*Main content frame*/
const mainInfoScreen =document.querySelector('mainInfoScreen')

/*First Side bar*/
function sidebarclick(element) {
    /*Landing page and Overview screen*/
    landingNav.style.opacity = 0;
    sidebarButtons.forEach(x => {
        x.classList.remove('sidebar-button-clicked', "no-hover")
    });
    element.classList.add("sidebar-button-clicked", "no-hover");
    mainScreen.classList.add('main-screen-clicked')
    if (element.id === 'sidebarButton1') {
        mainScreen.src = "./SecondSidebar/公司概況及薪資福利政策.html"
    } else if (element.id === 'sidebarButton2') {
        mainScreen.src = "./SecondSidebar/基層生產作業人員薪資分析.html"
    } else if (element.id === 'sidebarButton3') {
        mainScreen.src = "./SecondSidebar/整體薪資市場分析.html"
    } else if (element.id === 'sidebarButton4') {
        mainScreen.src = "./SecondSidebar/附錄.html"
    } else if (element.id === 'sidebarButton5'){
        mainScreen.src = "./SecondSidebar/總覽.html"
    }

    /*Bread Crumb shift first layer*/
    breadCrumbLinks.classList.add('nav-link-clicked');
    crumb1.classList.add('crumb-appeared');
    crumb1.getElementsByTagName('p')[0].innerText = element.getElementsByTagName('p')[0].innerText;
}


