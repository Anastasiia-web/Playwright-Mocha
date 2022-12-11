const { chromium } = require('playwright')
const expect = require('chai').expect                                    // chai library for creating assertions

let browser
let page

before(async () => {
    browser = await chromium.launch()
})

after(async () => {
    await browser.close()
})

beforeEach(async () => {
    page = await browser.newPage()
})

afterEach(async () => {
    await page.close()
})

it('Verifying that header is displayed', async () => {
    await page.goto('https://www.example.com')
    expect('h1'.to.exist)
})


// npm run test                                                                   // script is written in 'package.json' file