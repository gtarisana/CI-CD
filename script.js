document.addEventListener('DOMContentLoaded', function() {
    // Attendre que le document soit prêt
    const changerCouleur = document.getElementById('changerCouleur');
    changerCouleur.addEventListener('click', function() {
      // Ajouter un écouteur d'événement au clic du bouton
      const texte = document.getElementById('texte');
      texte.style.color = 'red';
      // Changer la couleur du texte en rouge
    });
  });