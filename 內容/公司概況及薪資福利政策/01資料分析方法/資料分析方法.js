/*Main info box*/
/*tab shift*/
const pageTabs = document.querySelectorAll(".page-tab");
const mainInfoBox = document.querySelector('.main-info-box')
 
function mainTabshift(element){
    pageTabs.forEach(x=>{
        x.classList.remove('page-click');
    });
    element.classList.add('page-click');
    if(element.id === 'page1'){
        mainInfoBox.src = "./資料擺放/01百分數分析.html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02線性迴歸分析.html"
    }
}