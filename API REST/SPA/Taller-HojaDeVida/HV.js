let pages = {
    'home': `JHONATAN SEBASTIAN QUEVEDO JIMENEZ<br/><br/><img src='media/yo.jpeg'/>`,
    'adm': `Soy una persona seria, dinámica y creativa, apasionado por el aprendizaje y la innovación, con más de 2 años de experiencia en el área administrativa y comercial, teniendo como punto fuerte el manejo de diferentes herramientas ofimáticas y analización de datos estratégicamente para agilizar los procesos virtuales requeridos, mi meta es desarrollarme en el campo de la informática y sus medios de aplicación en diversas plataformas. <br/>`,
    'if': `Our Services page<br/>`,
    'ed': `Our Contact Us page<br/>`,
    'exp': `Our Contact Us page<br/>`,
    'pr': `Our Contact Us page<br/>`,
    'ht': `Our Contact Us page<br/>`,
    'idiom': `Our Contact Us page<br/>`,
};

function getPageContent(page) {
    let contentToReturn;
    switch (page) {
        case 'home':
            contentToReturn = pages.home;
            break;
        case 'adm':
            contentToReturn = pages.adm;
            break;
        case 'if':
            contentToReturn = pages.if;
            break;
        case 'ed':
            contentToReturn = pages.ed;
            break;
        case 'exp':
            contentToReturn = pages.exp;
            break;
        case 'pr':
            contentToReturn = pages.pr;
            break;
        case 'ht':
            contentToReturn = pages.ht;
            break;
        case 'idiom':
            contentToReturn = pages.idiom;
            break;
        default:
            contentToReturn = pages.home;
            break;
    }
    document.getElementById('content').innerHTML = contentToReturn;
}