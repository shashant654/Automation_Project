// browser control
// controls a headless browser-> browser that is by default not visible
// ****** npm i puppeteer ***********
const puppeteer = require("puppeteer")
// nearly every function of puppeteer returns a promise
async function fn()  {
    const browserRepresentativeObj = await puppeteer.launch( {
    headless: false  ,
    executablePath:"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    defaultViewPort: null,
    args:["--start-maximized"],
    slowMo:100
 } );
    //  new tab
    const tab = await browserRepresentativeObj.newPage();
    // to go  google's home page
    await tab.goto("https://www.google.com");
    // type 
    await tab.type("input[type='text']","pepcoding",{delay:200});
    // press  a specific keyword
    await tab.keyboard.press("Enter");
    // page change error prevent -> to wait for selector that is present on the second page
    await tab.waitForSelector(".LC20lb.MBeuO.DKV0Md",{visible:true});
    await tab.click(".LC20lb.MBeuO.DKV0Md",{delay:200});

await tab.waitForSelector(".site-nav-li",{visible:true});
    await tab.click(".site-nav-li");
    await tab.waitForSelector(".card",{visible:true});

  let coursedetails = await tab.evaluate(browserMeChlneWalafn);
  console.log(coursedetails);
    function browserMeChlneWalafn() {
        let elemArr = document.querySelectorAll("#cources.card.course-tile.card-cs.rounded-border");
   let detailsArr = [];
        for(let i=0; i< elemArr.length; i++) {
            let singleCourse = elemArr[i];
       let courseNamesElem =singleCourse.document.querySelectorAll("h3");
        let dateElem = singleCourse.document.querySelectorAll(".date")
        let featuresArr = singleCourse.document.querySelectorAll("h5")
        let courseName = courseNamesElem.textContent.trim();
        let date = dateElem.textContent.trim();
        let features = "";
        for(let j=0; j<featuresArr.length;j++) {
            let cFeature = featuresArr[j].textContent.trim();
            features += cFeature +"\n"
        }
            // /;/ console.l og(courseName," ",date," ",features);
            let priceArr = singleCourse.querySelectorAll(".cart-sec h4");
            let price = priceArr.length == 1 ? priceArr[0] : priceArr[1];
             price = price.textContent.trim();
            console.log(courseName," ",date)
            console.log(features);
            let courseObj = {
                features,courseName,date,price 
            }
              detailsArr.push(courseObj);

        }
        return detailsArr;
          
}
}

fn();

// keyboard ,mouse , scroll

// ladruderti@vusra.com