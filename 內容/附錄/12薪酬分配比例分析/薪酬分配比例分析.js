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
        mainInfoBox.src = "./資料擺放/01整體市場薪酬分配比例.html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02製造業薪酬分配比例.html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03非製造業薪酬分配比例.html"
    }
}