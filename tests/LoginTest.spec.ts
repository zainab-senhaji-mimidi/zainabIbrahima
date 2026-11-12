import { test, expect } from "@playwright/test"
import { Login } from "../page/Login"
import { HomePage } from "../page/HomePage"
import { profilePom } from "../Pages/profilePom"



let pp : profilePom
let lp: Login
let hp: HomePage

test.beforeEach("setup", async ({ page }) => {
    lp = new Login(page)
    hp = new HomePage(page)
    pp= new profilePom(page)
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

test ("Remplir profile" , async ({page})=>{

    
    await hp.espaceCreateurButton();
    await expect (page).toHaveURL(/\/devenir-partenaire/)
    await lp.saisirEmail("zainab@gmail.com")
    await lp.saisirMdp("zainab")
    await lp.clickButton()
    await expect (page).toHaveURL(/\/EspaceClient/)
    
    await pp.cliqueButtonProfile()
    await expect (page).toHaveURL(/\/profil/)
    await pp.ajouterphoto("assets/images.jpeg")
    await pp.ajouterphotoFond("assets/images_fond.jpeg")

    await pp.Remplir_compte("Je suis Zainab j'aime la mangue","facebook","insta", "linkedin", "youtube")

    await pp.cliqueButtonSauve()
    await page.waitForTimeout(2000);
    await expect(pp.getAlert()).toBeVisible()

    await pp.cliqueButtonSociete()
    await pp.Remplirsociete("L'argent", "23457688987", "0765758757", "3 rue du greffier", "72000", "Le mans")

    await pp.cliqueButtonSauve()
    await page.waitForTimeout(2000);
    await expect(pp.getAlert()).toBeVisible()

})
