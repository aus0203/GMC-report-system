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
        mainInfoBox.src = "./資料擺放/01長期獎酬計劃.html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02長期獎酬發放對象.html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03長期獎酬發放考量因素.html"
    }
}