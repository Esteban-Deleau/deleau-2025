// Récupération des éléments
const buttons = document.querySelectorAll('[id^="open-popup"]'); // Sélectionner tous les boutons
const dialogs = document.querySelectorAll('dialog'); // Sélectionner toutes les modales

// Ouverture des modales
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        dialogs[index].showModal(); // Affiche la modale correspondant au projet cliqué
    });
});

// Fermeture des modales
dialogs.forEach((dialog, index) => {
    const closeBtn = document.getElementById(`close-btn${index + 1}`); // Récupère le bouton de fermeture de la modale
    closeBtn.addEventListener("click", () => {
        dialog.close(); // Ferme la modale correspondante
    });
});

// Si on clique en dehors de la modale, la fermer
window.addEventListener("click", (e) => {
    dialogs.forEach((dialog) => {
        if (e.target === dialog) {
            dialog.close();
        }
    });
});