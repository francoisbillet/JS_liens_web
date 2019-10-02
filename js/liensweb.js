/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

listeLiens.forEach(lien => {
    var pElt = document.createElement("p");
    pElt.setAttribute("class", "lien");

    var titreElt = document.createElement("a");
    titreElt.textContent = lien.titre;
    titreElt.href = lien.url;
    titreElt.style.color = "#428bca";
    titreElt.style.fontWeight = "bold";
    titreElt.style.textDecoration = "none";
    pElt.appendChild(titreElt);

    var lienElt = document.createElement("span");
    lienElt.textContent = lien.url;
    lienElt.style.paddingLeft = "10px";
    pElt.appendChild(lienElt);

    pElt.appendChild(document.createElement("br"));

    var auteurElt = document.createTextNode(`Ajouté par ${lien.auteur}`);
    pElt.appendChild(auteurElt);

    document.getElementById("contenu").appendChild(pElt);
});