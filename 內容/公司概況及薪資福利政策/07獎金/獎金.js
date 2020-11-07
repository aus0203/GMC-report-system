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
        mainInfoBox.src = "./資料擺放/01年終獎金.html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02年終獎金提撥方式.html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03年終獎金扣除方式.html"
    }else if(element.id === 'page4'){
        mainInfoBox.src = "./資料擺放/04年終獎金提供本薪月數分析-辦公室人員.html"
    }else if(element.id === 'page5'){
        mainInfoBox.src = "./資料擺放/05年終獎金提供全薪月數分析-辦公室人員.html"
    }else if(element.id === 'page6'){
        mainInfoBox.src = "./資料擺放/06年終獎金提供本薪月數分析-非辦公室人員.html"
    }else if(element.id === 'page7'){
        mainInfoBox.src = "./資料擺放/07年終獎金提供全薪月數分析-非辦公室人員.html"
    }else if(element.id === 'page8'){
        mainInfoBox.src = "./資料擺放/08績效獎金.html"
    }else if(element.id === 'page9'){
        mainInfoBox.src = "./資料擺放/09紅利給付.html"
    }else if(element.id === 'page10'){
        mainInfoBox.src = "./資料擺放/10長期獎酬計劃.html"
    }else if(element.id === 'page11'){
        mainInfoBox.src = "./資料擺放/11發放員工認股權憑證對象.html"
    }else if(element.id === 'page12'){
        mainInfoBox.src = "./資料擺放/12發放員工認股權憑證考量因素.html"
    }else if(element.id === 'page13'){
        mainInfoBox.src = "./資料擺放/13庫藏股轉讓提供對象.html"
    }else if(element.id === 'page14'){
        mainInfoBox.src = "./資料擺放/14實施庫藏股轉讓考量因素.html"
    }else if(element.id === 'page15'){
        mainInfoBox.src = "./資料擺放/15年節獎金.html"
    }else if(element.id === 'page16'){
        mainInfoBox.src = "./資料擺放/16全勤獎金.html"
    }else if(element.id === 'page17'){
        mainInfoBox.src = "./資料擺放/17長期服務獎金.html"
    }else if(element.id === 'page18'){
        mainInfoBox.src = "./資料擺放/18長期服務獎提供方式.html"
    }
}