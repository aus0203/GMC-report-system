
const subSideBarNavs = document.querySelectorAll(".sub-sidebar-nav")
const mainContent = document.querySelector(".main-content");

function subSidebarshift(element) {
    subSideBarNavs.forEach(x => {
        x.classList.remove('sub-sidebar-nav-clicked');
    });
    mainContent.classList.add("main-content-clicked")
    element.classList.add('sub-sidebar-nav-clicked');
    if (element.id === "nav1") {
        mainContent.src = '../內容/公司概況及薪資福利政策/01資料分析方法/資料分析方法.html'
    } else if (element.id === "nav2") {
        mainContent.src = '../內容/公司概況及薪資福利政策/02摘要分析/摘要分析.html'
    } else if (element.id === 'nav3') {
        mainContent.src = '../內容/公司概況及薪資福利政策/03參加公司名單與行業別分類/參加公司名單與行業別分類.html'
    } else if (element.id === 'nav4') {
        mainContent.src = '../內容/公司概況及薪資福利政策/04參加公司概況/參加公司概況.html'
    } else if (element.id === 'nav5') {
        mainContent.src = '../內容/公司概況及薪資福利政策/05薪資調整/薪資調整.html'
    } else if (element.id === 'nav6') {
        mainContent.src = '../內容/公司概況及薪資福利政策/06現金津貼/現金津貼.html'
    } else if (element.id === "nav7") {
        mainContent.src = '../內容/公司概況及薪資福利政策/07獎金/獎金.html'
    } else if (element.id === 'nav8') {
        mainContent.src = '../內容/公司概況及薪資福利政策/08保險/保險.html'
    } else if (element.id === 'nav9'){
        mainContent.src = '../內容/公司概況及薪資福利政策/09教育訓練/教育訓練.html'
    } else if (element.id === 'nav10'){
        mainContent.src = '../內容/公司概況及薪資福利政策/10汽車/汽車.html'
    } else if (element.id === 'nav11'){
        mainContent.src = '../內容/公司概況及薪資福利政策/11其他福利/其他福利.html'
    } else if (element.id === 'nav12')[
        mainContent.src = '../內容/公司概況及薪資福利政策/12應屆畢業生起用薪資/應屆畢業生起用薪資.html'
    ]
}