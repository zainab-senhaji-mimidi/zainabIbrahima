import { test, expect } from "@playwright/test"
import { Login } from "../page/Login"
import { HomePage } from "../page/HomePage"

let lp: Login
let hp: HomePage

test.beforeEach("setup", async ({ page }) => {
    lp = new Login(page)
    hp = new HomePage(page)
    await page.goto("https://preprod.thrundrz.fr/")
    

})

test("login", async ({ page }) => {
    await hp.espaceCreateurButton();
    await expect (page).toHaveURL("https://preprod.thrundrz.fr/devenir-partenaire")
    await lp.saisirEmail("zainab@gmail.com")
    await lp.saisirMdp("zainab")
    await lp.clickButton()
    await expect (page).toHaveURL("https://preprod.thrundrz.fr/EspaceClient")

})