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
        mainInfoBox.src = "./資料擺放/01非製造業整體薪資分析.html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02非製造業本薪.html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03非製造業本薪+津貼.html"
    }else if(element.id === 'page4'){
        mainInfoBox.src = "./資料擺放/04非製造業本薪+津貼+獎金.html"
    }else if(element.id === 'page5'){
        mainInfoBox.src = "./資料擺放/05非製造業本薪+津貼+獎金+福利.html"
    }else if(element.id === 'page6'){
        mainInfoBox.src = "./資料擺放/06非製造業市場薪酬分配比例.html"
    }
}