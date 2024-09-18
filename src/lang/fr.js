export default  (store) => ( {

    //The Header
    AboutMe:"À propos de moi",
    Skills : "Compétences",
    Projects:"Projets",
    Contact:"Contact",
    //landing page
    welcome: 'Bonjour, je suis',
    BackendDeveloper : "Développeur Back-End",
    downloadCv : "Télécharger le CV",
    ContactInfo : "Coordonnées",


    //About section

    getToKnowMore : "En savoir plus", 
    Experience : "Expérience",
    ExperienceYear : "1+ an d'expérience" ,
    Education :"Éducation",
    Unive : "Université Ferhat Abbas Sétif 1",
    Master : "Diplôme de Master",
    Description : store.getters.getDetails.Description.fr ,

    //skills
    ExploreMy: "Explorez mon",
    FrontendDevelopment: "Développement Frontend",
    BackendDevelopment: "Développement Backend",
    Other : "Autre",

    //projects
    BrowseMyRecent :"Parcourir les articles récents",
    //contact
    GetInTouch : "Contactez-moi",
})