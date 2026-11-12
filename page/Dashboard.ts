import {Page} from "@playwright/test"

export class Dashboard{
    readonly page: Page;

    constructor(p : Page){
        this.page = p;
    }
    
    elements={
        CommunauteButton: ()=> this.page.getByRole("button",{name:"Communauté"}),
        PublicationButton: ()=> this.page.getByRole("button",{name:"Mes publications"}),
        NvAnnonceButton: ()=> this.page.getByRole("textbox",{name:"Titre de votre annonce"}),
        TitleAnnonceButton: ()=> this.page.getByRole("textbox",{name:"Ecrivez votre description ici..."}),
        DescriptionAnnonceButton: ()=> this.page.getByRole("textbox",{name:"Nouvelle annonce"}),
        ImageAnnonceButton: ()=> this.page.getByRole("button",{name:"Nouvelle annonce"}),
        // LienExterneButton: ()=> this.page.getByRole("button",{name:"Youtube.Facebook.Tiktok.Instagram"}),
    }

    async communauteButton(){
        await this.elements.CommunauteButton().click()
    }

    async publicationButton(){
        await this.elements.PublicationButton().click()
    }

    async titleAnnonceButton(){
        await this.elements.TitleAnnonceButton().click()
    }

    async descriptionAnnonceButton(){
        await this.elements.DescriptionAnnonceButton().click()
    }

    async ImageAnnonceButton(){
        await this.elements.NvAnnonceButton().click()
    }
    async nvAnnonceButton(){
        await this.elements.NvAnnonceButton().click()
    }
    // async ajouterImage(c: string) {
    //     await this.elements.inputfile().setInputFiles(c)
    // }

}    