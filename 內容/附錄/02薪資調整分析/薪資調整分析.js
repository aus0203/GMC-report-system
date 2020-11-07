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
        mainInfoBox.src = "./資料擺放/01調薪頻率-調薪日期.html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02新進員工調薪頻率.html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03調薪幅度分析.html"
    }else if(element.id === 'page4'){
        mainInfoBox.src = "./資料擺放/04薪資調幅分析-整體.html"
    }else if(element.id === 'page5'){
        mainInfoBox.src = "./資料擺放/05薪資調幅分析-行業別.html"
    }
}