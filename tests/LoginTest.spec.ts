import { test, expect } from "@playwright/test"
import { Login } from "../page/Login"
import { HomePage } from "../page/HomePage"
import { Dashboard } from "../page/Dashboard"

let lp: Login
let hp: HomePage
let dp: Dashboard

test.beforeEach("setup", async ({ page }) => {
    lp = new Login(page)
    hp = new HomePage(page)
    dp = new Dashboard(page)
    await page.goto("https://preprod.thrundrz.fr/")
    await hp.espaceCreateurButton();
    await expect (page).toHaveURL("https://preprod.thrundrz.fr/devenir-partenaire")
})

test("loginValid", async ({ page }) => {
    await lp.saisirEmail("zainab@gmail.com")
    await lp.saisirMdp("zainab")
    await lp.clickButton()
})

test("creationAnnonce", async ({ page }) => {
    await lp.connexion("zainab@gmail.com","zainab")
    await expect (page).toHaveURL("https://preprod.thrundrz.fr/EspaceClient")
    await dp.communauteButton()
    await expect (page).toHaveURL("https://preprod.thrundrz.fr/EspaceClient/communaute")
    await dp.publicationButton()
    await expect (page).toHaveURL("https://preprod.thrundrz.fr/EspaceClient/communaute/publications")
    await dp.nvAnnonceButton()
    // await dp.ajouterImage("image/maquette-chromium-win32.png");
    await dp.titleAnnonceButton()
    await dp.descriptionAnnonceButton()
})