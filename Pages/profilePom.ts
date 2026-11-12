import {Page} from "@playwright/test"

export class profilePom{

    
 readonly page : Page

constructor(p:Page)
 {
    this.page=p ;

 }

 //definier les locators de la page login

 elements = {
   
    bouton_ajoutphoto : ()=> this.page.locator("[data-testid ='input-photo-profil']"),
    btn_modifier_fond : ()=> this.page.locator("[data-testid ='btn-modifier-fond']"),
    input_bio: ()=> this.page.locator('[data-testid="input-bio"]'),
    input_instagram :()=> this.page.locator("[data-testid='input-instagram']"),
    input_facebook:()=> this.page.locator("[data-testid='input-facebook']"),
    input_linkedin :()=> this.page.locator("[data-testid='input-linkedin']"),
    input_youtube :()=> this.page.locator("[data-testid='input-youtube']"),
    onglet_compte :()=> this.page.locator("[data-testid='onglet-compte']"),
    onglet_societe :()=> this.page.locator("[data-testid='onglet-societe']"),
    input_raison_sociale :()=> this.page.locator("[data-testid='input-raison-sociale']"),
    input_telephone:()=> this.page.locator("[data-testid='input-telephone']"),
    input_siret:()=> this.page.locator("[data-testid='input-siret']"),
    input_dirigeant:()=> this.page.locator("[data-testid='input-dirigeant']"),
    input_rue:()=> this.page.locator("[data-testid='input-rue']"),
    input_cp:()=> this.page.locator("[data-testid='input-cp']"),
    input_ville:()=> this.page.locator("[data-testid='input-ville']"),
    sauvegarde_btn:()=> this.page.getByRole("button", {name:"Sauvegarder"}),
    onglet_securite:()=> this.page.locator("[data-testid='onglet-securite']"),
    input_ancien_mdp:()=> this.page.locator("[data-testid='input-ancien-mdp']"),
    input_nouveau_mdp:()=> this.page.locator("[data-testid='input-nouveau-mdp']"),
    input_confirmer_mdp:()=> this.page.locator("[data-testid='input-confirmer-mdp']"),
    btn_modifier_mdp:()=> this.page.getByTestId("btn-modifier-mdp"),
    btn_deconnexion:()=> this.page.getByTestId("btn-deconnexion"),
    btn_profil:()=> this.page.getByRole("button", {name:"Profil"}),
    text_alert:()=> this.page.getByRole("alert")
    
 


    
 }

 // Definier les methodes associés

 async ajouterphoto(s:string)
 {
    await this.elements.bouton_ajoutphoto().setInputFiles(s)

 }

  async ajouterphotoFond(s:string)
 {
    await this.elements.btn_modifier_fond().setInputFiles(s)

 }

  async Remplir_compte(bio:string, f:string, i:string, l:string, y: string)
 {
    
    await this.elements.input_facebook().fill(f)
    await this.elements.input_instagram().fill(i)
    await this.elements.input_youtube().fill(y)
    await this.elements.input_linkedin().fill(l)
    await this.elements.input_bio().fill(bio)
 

 }
 
   async Remplirsociete(r:string, s:string, t:string, rue:string, c: string, v:string)
 {
    await this.elements.input_raison_sociale().fill(r)
    await this.elements.input_siret().fill(s)
    await this.elements.input_telephone().fill(t)
    await this.elements.input_rue().fill(rue)
    await this.elements.input_cp().fill(c)
    await this.elements.input_ville().fill(v)
    
 }

    async RemplirSecurite(ancien:string, nouveau:string, conf:string)
 {
    await this.elements.input_ancien_mdp().fill(ancien)
    await this.elements.input_nouveau_mdp().fill(nouveau)
    await this.elements.input_confirmer_mdp().fill(conf)
  
    
 }
 


  async cliqueButtonSauve()
 {
    await this.elements.sauvegarde_btn().click()

 }
   async cliqueButtonProfile()
 {
    await this.elements.btn_profil().click()

 }


    async cliqueButtonSociete()
 {
    await this.elements.onglet_societe().click()

 }
 

 getAlert(){
   return this.elements.text_alert()
 }


 }