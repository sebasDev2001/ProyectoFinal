// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
require('chromedriver');

describe('testPaginaFibonacci', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('testPaginaFibonacci', async function() {
    await driver.get("https://proyectocalculosmatematicos.herokuapp.com/")
    await driver.manage().window().setRect({ width: 1050, height: 626 })
    await driver.findElement(By.css("button:nth-child(1)")).click()
    await driver.findElement(By.css("button:nth-child(1)")).click()
    await driver.findElement(By.id("inputID")).click()
    await driver.findElement(By.id("inputID")).sendKeys("123")
    await driver.findElement(By.css("button:nth-child(1)")).click()
    await driver.findElement(By.id("inputID")).click()
    await driver.findElement(By.id("inputID")).sendKeys("-2")
    await driver.findElement(By.css("button:nth-child(1)")).click()
    await driver.findElement(By.id("inputID")).click()
    await driver.findElement(By.id("inputID")).sendKeys("2.23")
    await driver.findElement(By.css(".botones")).click()
    await driver.findElement(By.css("button:nth-child(1)")).click()
  })
})