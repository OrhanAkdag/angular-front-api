
import {browser, by, element, logging} from 'protractor';
import {ComputerPage} from './computer.po';

describe('Test de nos ordinateurs', () => {
  let page: ComputerPage;
  let nbLineInit: number;

  beforeEach(() => {
    page = new ComputerPage();
    browser.get('/computers');
  });

  it('Je compte le nombre de ligne dans le tableau et je test la navigation vers mon url d\'ajout', () => {
    element.all(by.css('.lineComputer')).then(totalRows => {
      this.nbLineInit = totalRows.length;
    });
    element.all(by.css('#buttonAddComputer')).first().click();
    expect(browser.driver.getCurrentUrl()).toContain('/add-computer');
  });

  it('Je remplis le formulaire, et je le valide et je suis revenu sur la page d\'accueil', () => {
    browser.get('/add-computer');
    page.completeForm();
    page.sleep();
    let submitBtn = element.all(by.css('#submitButton'));
    submitBtn.click().then(fn => {
    });
    page.sleep();
    expect(browser.driver.getCurrentUrl()).toContain('/computers');

  });


  it('Notre tableau contient une ligne de plus !', () => {
    element.all(by.css('.lineComputer')).then(totalRows => {
      this.nbLineInit += 1;
      expect(totalRows.length).toEqual(this.nbLineInit);
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });


});
