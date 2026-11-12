import {Page} from "@playwright/test"

export class Login{
    readonly page: Page;

    constructor(p : Page){
        this.page = p;
    }
    
    //Définir les locators de la page login
    elements={
        Email: ()=> this.page.getByRole("textbox",{name:"Votre email"}),
        MotDePasse: ()=> this.page.getByRole("textbox",{name:"********"}),
        CreerCompteButton: ()=> this.page.getByRole("button",{name:"Se Connecter"}),
        EspaceCreateurButton: ()=> this.page.getByRole("link",{name:"Espace Créateur"}).nth(0),
        AlertMessage: ()=> this.page.getByRole("alert"),
    }

    async connexion(email:string, motDePasse:string){
        await this.elements.Email().fill(email)
        await this.elements.MotDePasse().fill(motDePasse)
        return this.elements.AlertMessage()
    }

    async saisirEmail(email:string){
        await this.elements.Email().fill(email)
    }

    async saisirMdp(motDePasse:string){
        await this.elements.MotDePasse().fill(motDePasse)
    }

    async AlertMessage(){
        return this.elements.AlertMessage()
    }

    async clickButton(){
        await this.elements.CreerCompteButton().click()
    }

    async espaceCreateurButton(){
        await this.elements.EspaceCreateurButton().click()
    }

    async clickSuivantButton(){
        await this.elements.CreerCompteButton().click()
    }

}    