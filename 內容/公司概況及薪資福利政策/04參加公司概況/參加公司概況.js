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
        mainInfoBox.src = "./資料擺放/01行業型態.html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02本地與外商公司比例.html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03股票發行方式.html"
    }else if(element.id === 'page4'){
        mainInfoBox.src = "./資料擺放/04員工人數.html"
    }else if(element.id === 'page5'){
        mainInfoBox.src = "./資料擺放/05年度營業額.html"
    }else if(element.id === 'page6'){
        mainInfoBox.src = "./資料擺放/06製造業功能別人數分析.html"
    }else if(element.id === 'page7'){
        mainInfoBox.src = "./資料擺放/07資訊電子業功能別人數分析.html"
    }else if(element.id === 'page8'){
        mainInfoBox.src = "./資料擺放/08資訊服務業功能別人數分析.html"
    }else if(element.id === 'page9'){
        mainInfoBox.src = "./資料擺放/09貿易百貨業功能別人數分析.html"
    }else if(element.id === 'page10'){
        mainInfoBox.src = "./資料擺放/10直間接員工人數比例.html"
    }else if(element.id === 'page11'){
        mainInfoBox.src = "./資料擺放/11人員生產力.html"
    }else if(element.id === 'page12'){
        mainInfoBox.src = "./資料擺放/12人員獲利力.html"
    }else if(element.id === 'page13'){
        mainInfoBox.src = "./資料擺放/13人事費用率.html"
    }else if(element.id === 'page14'){
        mainInfoBox.src = "./資料擺放/14薪資報酬率.html"
    }else if(element.id === 'page15'){
        mainInfoBox.src = "./資料擺放/15附加價值率.html"
    }else if(element.id === 'page16'){
        mainInfoBox.src = "./資料擺放/16辦公室員工離職率.html"
    }else if(element.id === 'page17'){
        mainInfoBox.src = "./資料擺放/17非辦公室員工離職率.html"
    }else if(element.id === 'page18'){
        mainInfoBox.src = "./資料擺放/18辦公室員工流動率.html"
    }else if(element.id === 'page19'){
        mainInfoBox.src = "./資料擺放/19非辦公室員工流動率.html"
    }
}