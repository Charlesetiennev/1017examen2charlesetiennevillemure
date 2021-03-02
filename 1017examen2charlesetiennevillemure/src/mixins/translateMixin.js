export const TRANSLATIONS = {
    data() {
        return{
            // Valeur Francais
            langue:'fr',
            nomForm:'',
            fr:{
                nom:"Nom : ",
                prenom:'Prenom',
                email:'Courriel'
            },
            // Valeur Anglais
            en:{
                nom:'Lastname',
                prenom:'Firstname',
                email:'E-mail'
            }
        }
    },
    filters:{
        checkLanguage(){
            var fr = this.fr
            console.log(fr)
        }
    },
}