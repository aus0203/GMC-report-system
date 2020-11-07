
const sidebarButtons = document.querySelectorAll(".sidebar-button");
const mainScreen = document.querySelector(".main-screen");
const overviewScreen = document.querySelector('.overviewScreen');
const landingNav = document.querySelector(".landing-nav");

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
        mainScreen.src = "./主選單/公司概況及薪資福利政策.html"
    } else if (element.id === 'sidebarButton2') {
        mainScreen.src = "./主選單/基層生產作業人員薪資分析.html"
    } else if (element.id === 'sidebarButton3') {
        mainScreen.src = "./主選單/整體薪資市場分析.html"
    } else if (element.id === 'sidebarButton4') {
        mainScreen.src = "./主選單/附錄.html"
    } else if (element.id === 'sidebarButton5'){
        mainScreen.src = "./主選單/總覽.html"
    }
  
}

/*Landing nav buttons*/

function navInfoClick(element){
    const sidebarButton1 = document.getElementById('sidebarButton1');
    const sidebarButton2 = document.getElementById('sidebarButton2');
    const sidebarButton3 = document.getElementById('sidebarButton3');
    const sidebarButton4 = document.getElementById('sidebarButton4');
    const sidebarButton5 = document.getElementById('sidebarButton5');

    landingNav.style.opacity = 0;
    if(element.id === 'navButton1'){
        sidebarclick(sidebarButton1);
    }else if (element.id ==='navButton2'){
        sidebarclick(sidebarButton2);
    }else if (element.id === 'navButton3'){
        sidebarclick(sidebarButton3);
    }else if (element.id === 'navButton4'){
        sidebarclick(sidebarButton4);
    }else if(element.id === 'navButton5'){
        sidebarclick(sidebarButton5);
    }
}


