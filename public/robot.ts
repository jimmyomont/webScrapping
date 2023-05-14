
import { locales } from "moment";
import puppeteer = require("puppeteer");


export default class Robot {

    constructor() {
    }

    public async runScenarioRobot() {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto(`https://www.welcometothejungle.com/fr/jobs?refinementList%5Boffices.country_code%5D%5B%5D=FR&refinementList%5Bremote%5D%5B%5D=fulltime&refinementList%5Bcontract_type%5D%5B%5D=APPRENTICESHIP&refinementList%5Bcontract_type%5D%5B%5D=FULL_TIME&refinementList%5Bcontract_type%5D%5B%5D=INTERNSHIP&refinementList%5Bcontract_type%5D%5B%5D=TEMPORARY&searchTitle=false&page=1&aroundQuery=Paris%2C%20France&aroundLatLng=48.85718%2C2.34141&aroundPrecision=20000&aroundRadius=20000`);
        await this.delay(7000);
        try {
            await page.waitForXPath('/html/body/div[2]/div/div/div[1]/div[2]/button[3]');
            let rechecher = await page.$x('/html/body/div[2]/div/div/div[1]/div[2]/button[3]');
            await rechecher[0].click();
        }
        
        catch (error) {
            console.log(error);
            
        }

            await this.delay(1000);
            for (let index = 1; index < 33; index++) {
                await this.delay(500);
                try {
                    let [element] = await page.$x('/html/body/div[1]/div[1]/div/div/div/div[2]/div/ol/div['+index+']/li/div/div/div[2]/a/h4/div');
                let text = await page.evaluate(element => element.textContent, element);
                console.log(text)}
                catch(err2){
                    console.log(err2);
                    
                    
                }
            }
                // const element = array[index];



        
        // try {
            
        //     await this.delay(500);
        //     let quoi: any = await page.waitForXPath('/html/body/div[1]/div[1]/div/div/div/div[1]/div/div[2]/div[1]/div[1]/div/div[1]/div[1]/input');
        //     await quoi.type("Developpeur web");
        //     await this.delay(300);
        //     await page.keyboard.press('Enter');
            
        //     await this.delay(1000);
            
        //     let ou: any = await page.waitForXPath('/html/body/div[1]/div[1]/div/div/div/div[1]/div/div[2]/div[1]/div[2]/div/div/div/div/div[1]/input');

        //     await ou.type(", Paris");
        //     await this.delay(2000);


        //     await page.waitForXPath('/html/body/div[1]/div[1]/div/div/div/div[1]/div/div[2]/div[1]/div[2]/div/div[1]/div/div/div[2]/div/div[3]');
        //     let clicks = await page.$x('/html/body/div[1]/div[1]/div/div/div/div[1]/div/div[2]/div[1]/div[2]/div/div[1]/div/div/div[2]/div/div[3]');
        //     await clicks[0].click();
            
        //     await this.delay(1000);
        //     await page.keyboard.press('Enter');
        //     await this.delay(3000)
        //     await page.keyboard.down('PageDown')

        // } catch (error) {
        //     console.log(error);

        // }

        // try {
        //     await page.waitForXPath('/html/body/div[1]/div[1]/div/div/div/div[1]/div/div[2]/div[1]/div[2]/div/div/div/div/div[1]/input');
        //     let rechecher = await page.$x('/html/body/div[1]/div[1]/div/div/div/div[1]/div/div[2]/div[1]/div[2]/div/div/div/div/div[1]/input');
        //     await rechecher[0].click();
        // } catch (error) {
        //     console.log(error);
        // }

    }



    delay(time: number) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }

}

new Robot().runScenarioRobot();