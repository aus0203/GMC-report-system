/*Main info box*/
/*tab shift*/
/*Main info box*/
const pageTabs = document.querySelectorAll(".page-tab");
const mainInfoBox = document.querySelector('.main-info-box')
 
function mainTabshift(element){
    pageTabs.forEach(x=>{
        x.classList.remove('page-click');
    });
    element.classList.add('page-click');
    if(element.id === 'page1'){
        mainInfoBox.src = "./資料擺放/01教育訓練對象及費用限制.html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02教育訓練費用率a.html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03教育訓練費用率b.html"
    }
}