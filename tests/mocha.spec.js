const { chromium } = require('playwright')
const expect = require('chai').expect

let browser

before(async () => {
    await browser.launch()
})
