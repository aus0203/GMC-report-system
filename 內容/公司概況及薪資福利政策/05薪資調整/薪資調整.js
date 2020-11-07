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
        mainInfoBox.src = "./資料擺放/01調薪頻率.html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02調薪日期.html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03調薪幅度2018年度.html"
    }else if(element.id === 'page4'){
        mainInfoBox.src = "./資料擺放/04調薪幅度2019年度.html"
    }else if(element.id === 'page5'){
        mainInfoBox.src = "./資料擺放/05調薪幅度2020年度.html"
    }else if(element.id === 'page6'){
        mainInfoBox.src = "./資料擺放/06員工人數與調薪幅度分析.html"
    }else if(element.id === 'page7'){
        mainInfoBox.src = "./資料擺放/07調薪幅度分析.html"
    }else if(element.id === 'page8'){
        mainInfoBox.src = "./資料擺放/08調薪方式分析.html"
    }else if(element.id === 'page9'){
        mainInfoBox.src = "./資料擺放/09調薪幅度範圍.html"
    }
}