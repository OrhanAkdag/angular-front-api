import { browser, by, element } from 'protractor';

export class ComputerPage {

  sleep() {
    browser.driver.sleep(2500);
  }
  completeForm() {
    let model = element.all(by.id('model'));
    let brand = element.all(by.id('inputRadio-Dell'))
    let type = element.all(by.name('type'));
    let category = element.all(by.id('inputRadio-Bureautique'));
    let buyPrice = element.all(by.name('buyPrice'));
    let sellPrice = element.all(by.name('sellPrice'));

    model.sendKeys('Mon model de test e2e');
    brand.click();
    type.sendKeys('Portable');
    category.click();
    buyPrice.sendKeys(200);
    sellPrice.sendKeys(400);

  }
}
