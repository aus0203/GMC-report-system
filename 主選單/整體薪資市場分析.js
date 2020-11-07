
const subSideBarNavs = document.querySelectorAll(".sub-sidebar-nav")
const mainContent = document.querySelector(".main-content");

function subSidebarshift(element) {
    subSideBarNavs.forEach(x => {
        x.classList.remove('sub-sidebar-nav-clicked');
    });
    mainContent.classList.add("main-content-clicked")
    element.classList.add('sub-sidebar-nav-clicked');
    if (element.id === "nav1") {
        mainContent.src = '../內容/整體薪資市場分析/01薪資市場分析/薪資市場分析.html'
    } else if (element.id === "nav2") {
        mainContent.src = '../內容/整體薪資市場分析/02製造業整體市場分析/製造業整體市場分析.html'
    } else if (element.id === "nav3") {
        mainContent.src = '../內容/整體薪資市場分析/03非製造業整體市場分析/非製造業整體市場分析.html'
    } 
}