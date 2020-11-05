
const subSideBarNavs = document.querySelectorAll(".sub-sidebar-nav")
const mainContent = document.querySelector(".main-content");

function subSidebarshift(element) {
    subSideBarNavs.forEach(x => {
        x.classList.remove('sub-sidebar-nav-clicked');
    });
    element.classList.add('sub-sidebar-nav-clicked');
    if (element.id === "nav1") {
        mainContent.src = '../內容/公司概況及薪資福利政策/01資料分析方法/資料分析方法.html'
    }
}