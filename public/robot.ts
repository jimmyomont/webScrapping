
const puppeteer = require("puppeteer");


export default class Robot {

    constructor() {
    }

    public async runScenarioRobot() {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto(`https://www.tel.fr/res/la-reunion/`);

        await this.delay(200);
        //await page.waitForXPath('//*[@id="axeptio_overlay"]/div/div/div[1]');

        // evaluate XPath expression of the target selector (it return array of ElementHandle)
        //await page.waitForXPath('//*[@id="axeptio_overlay"]/div/div/div[1]');

        // evaluate XPath expression of the target selector (it return array of ElementHandle)

        await page.waitForXPath("/html/body/div[3]/section/div[2]/div/button[2]");
        let el = await page.$x("/html/body/div[3]/section/div[2]/div/button[2]");
        await el[0].click();


        for (let ville = 1; ville < 15; ville++) {
            for (let lettre = 10; lettre < 15; lettre++) {
                try {
                    await this.delay(200);
                    await page.waitForXPath("/html/body/div[2]/div/div[3]/div/ul/li[" + ville + "]/a");
                    let el2 = await page.$x("/html/body/div[2]/div/div[3]/div/ul/li[" + lettre + "]/a");
                    await el2[0].click();

                    await this.delay(200);
                    await page.waitForXPath('//*[@id="content1"]/div/ul/li[1]/a/strong');
                    let el3 = await page.$x('//*[@id="content1"]/div/ul/li[1]/a/strong');
                    await el3[0].click();
                    await this.delay(200);


                    for (let h = 2; h < 11; h++) {
                        await this.delay(2000);


                        for (let i = 1; i < 29; i++) {
                            try {
                                if (!(i == 2 || i == 7)) {
                                    await this.delay(200);
                                    await page.waitForXPath('//*[@id="content1"]/ul/li[' + i + ']/div[2]/div[3]/button');
                                    let el4 = await page.$x('//*[@id="content1"]/ul/li[' + i + ']/div[2]/div[3]/button');
                                    await el4[0].click();
//*[@id="content1"]/ul/li[3]/div[2]/div[3]/button
                                    await this.delay(200);
                                    await page.waitForXPath(
                                        '//*[@id="content1"]/ul/li[' + i + ']/div[2]/div[3]/div/span'
                                    );
                                    //assuming it's the first element
                                    let [element] = await page.$x(
                                        '//*[@id="content1"]/ul/li[' + i + ']/div[2]/div[3]/div/span'
                                    );


                                    let text3 = await page.evaluate((element: any) => element.textContent, element);
                                    console.log(text3.replace(/[;];/g, "") + ";");
                                    let y = i;
                                    await this.delay(200);
                                    await page.waitForXPath(
                                        '/html/body/div[2]/div/div[3]/ul/li[' + y + ']/div[2]/div[2]/address/h3'
                                    );
                                    //assuming it's the first element
                                    let [element3] = await page.$x(
                                        '/html/body/div[2]/div/div[3]/ul/li[' + y + ']/div[2]/div[2]/address/h3'
                                    );


                                    let text5 = await page.evaluate((element3: any) => element3.textContent, element3);
                                    console.log(text5.replace(/[;];/g, "") + ";");

                                    await this.delay(200);
                                    await page.waitForXPath(
                                        '//*[@id="content1"]/ul/li[' + y + ']/div[2]/div[1]/h2/a'
                                    );
                                    let [element2] = await page.$x(
                                        '//*[@id="content1"]/ul/li[' + y + ']/div[2]/div[1]/h2/a'
                                    );


                                    let text4 = await page.evaluate((element2: any) => element2.textContent, element2);
                                    console.log(text4.replace(/[;];/g, "") + ";");

                                }
                            } catch (error) {

                                console.log(error);
                            }
                        }
                        await this.delay(200);
                        await page.waitForXPath('/html/body/div[2]/div/div[5]/ul/li[' + h + ']/a');
                        let el4 = await page.$x('/html/body/div[2]/div/div[5]/ul/li[' + h + ']/a');
                        await el4[0].click();
                    }


                } catch (error) {
                    console.log(error);
                }
            }
        }

    }


    delay(time: number) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }

}

new Robot().runScenarioRobot();