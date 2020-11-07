
const subSideBarNavs = document.querySelectorAll(".sub-sidebar-nav")
const mainContent = document.querySelector(".main-content");

function subSidebarshift(element) {
    subSideBarNavs.forEach(x => {
        x.classList.remove('sub-sidebar-nav-clicked');
    });
    mainContent.classList.add("main-content-clicked")
    element.classList.add('sub-sidebar-nav-clicked');
    if (element.id === "nav1") {
        mainContent.src = '../內容/附錄/01參加公司概況分析/參加公司概況分析.html'
    } else if (element.id === "nav2") {
        mainContent.src = '../內容/附錄/02薪資調整分析/薪資調整分析.html'
    } else if (element.id === 'nav3') {
        mainContent.src = '../內容/附錄/03津貼分析/津貼分析.html'
    } else if (element.id === 'nav4') {
        mainContent.src = '../內容/附錄/04獎金分析/獎金分析.html'
    } else if (element.id === 'nav5') {
        mainContent.src = '../內容/附錄/05長期獎酬分析/長期獎酬分析.html'
    } else if (element.id === 'nav6') {
        mainContent.src = '../內容/附錄/06團保分析/團保分析.html'
    } else if (element.id === "nav7") {
        mainContent.src = '../內容/附錄/07福利項目分析/福利項目分析.html'
    } else if (element.id === 'nav8') {
        mainContent.src = '../內容/附錄/08應屆畢業生起用薪資分析/應屆畢業生起用薪資分析.html'
    } else if (element.id === 'nav9'){
        mainContent.src = '../內容/附錄/09生產作業人員薪資分析/生產作業人員薪資分析.html'
    } else if (element.id === 'nav10'){
        mainContent.src = '../內容/附錄/10行業別整體分析/行業別整體分析.html'
    } else if (element.id === 'nav11'){
        mainContent.src = '../內容/附錄/11地區別整體分析/地區別整體分析.html'
    } else if (element.id === 'nav12') {
        mainContent.src = '../內容/附錄/12薪酬分配比例分析/薪酬分配比例分析.html'
    } else if (element.id === 'nav13') {
        mainContent.src = '../內容/附錄/13其他分析/其他分析.html'
    } 
}