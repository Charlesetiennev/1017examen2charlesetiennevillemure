export const TRANSLATIONS = {
    data() {
        return{
            langue:'fr',
            nomForm:'',
            fr:{
                nom:"Nom : ",
                prenom:'Prenom',
                email:'Courriel'
            },
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