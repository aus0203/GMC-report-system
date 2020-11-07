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
        mainInfoBox.src = "./資料擺放/01年終獎金.html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02年終獎金扣除方式.html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03整體市場年終獎金分析.html"
    }else if(element.id === 'page4'){
        mainInfoBox.src = "./資料擺放/04長期服務獎.html"
    }
}