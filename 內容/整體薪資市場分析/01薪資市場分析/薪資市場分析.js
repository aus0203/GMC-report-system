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
        mainInfoBox.src = "./資料擺放/01整體薪資分析.html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02本薪.html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03本薪+津貼.html"
    }else if(element.id === 'page4'){
        mainInfoBox.src = "./資料擺放/04本薪+津貼+獎金.html"
    }else if(element.id === 'page5'){
        mainInfoBox.src = "./資料擺放/05本薪+津貼+獎金+福利.html"
    }else if(element.id === 'page6'){
        mainInfoBox.src = "./資料擺放/06整體市場薪酬分配比例.html"
    }
}