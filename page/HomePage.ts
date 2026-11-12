import {Page} from "@playwright/test"

export class HomePage{
    readonly page: Page;

    constructor(p : Page){
        this.page = p;
    }
    
    elements={
        EspaceCreateurButton: ()=> this.page.getByRole("link",{name:"Espace Créateur"}).nth(0),
    }

    async espaceCreateurButton(){
        await this.elements.EspaceCreateurButton().click()
    }

}    