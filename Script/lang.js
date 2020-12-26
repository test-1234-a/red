var text = {}

function languages(lang){
  if (lang == 'fr') {
    text = {
      audio : 'Audio',
      music : 'Rendre muet la musique',
      son : "Rendre muet les sons du jeu",

      controle : "Contrôles",
      haut : "Haut",
      bas : "Bas",
      interagir : "Interagir",
      gauche : "Gauche",
      droite : "Droite",
      teleport : "Téléportation",

      langues : "Langues",
      fr : "Français",
      eng : "Anglais",

      option : "Option",
      jouer : "Jouer",

      moulin1 : "Entrez dans le moulin",
      moulin2 : "    avant de continuer.",

      entrer : 'Appuyez sur [entrée] pour intéragir.',
      tp : "TELEPORT",
      tpimpo : "Téléportation Impossible",
      continuer : "Continuer",
      nsort : "Nouveau Sort !",
      compris : "Compris !",

      sort1a : "Émet une flamme qui inflige des dégâts aux",
      sort1b : "ennemis qu'elle touche.",
      sort1c : "(pour lancer le sort, il vous suffit de cliquer dans",
      sort1d : "la direction qui vous souhaitez viser.)",

      sort2a : "Invoque un double qui attaque les ennemis à",
      sort2b : "proximité du joueur.",
      sort2c : "Sa durée de vie est limitée, il disparaît au bout",
      sort2d : "d'un certain temps.",

      sort3a : "Regénère une partie des points de vie du",
      sort3b : "joueur.",
      sort3c : "Le sort ne peut pas être utilisé à l'intérieur",
      sort3d : "de la dimension rouge.",

      tombea : "Il s'agit d'une tombe sur laquelle est",
			tombeb : 'gravée :',
			tombec : 'Libitina, 532 - 556',

      pancarte : '        "Territoire des gobelins"',

      tablea : "Il s'agit d'une feuille avec une unique",
      tableb : "phrase inscrite dessus :",
      tablec : ' "Que contient réellement la boîte ?"',

      tuto1a : "Pour changer de dimension, il te suffit d'appuyer sur [espace] ou de cliquer sur",
      tuto1b : "l'icône en haut à droite de l'écran.",
      tuto1c : "Téléporte-toi afin de passer la rivière et récupérer un maximum de pièces.",

      tuto2a : "Des interupteurs interdimensionnels sont présents sur cette map.",
      tuto2b : "Les actionner aura un impact sur l'autre dimension.",
      tuto2c : "Utilise-les pour accéder au moulin.",

      tuto3a : "Un feu de camp est présent sur cette map. Tu peux attirer tes ennemis dedans",
      tuto3b : "afin de leur infliger des dégâts importants.",
      tuto3c : "(Utilise ton nouveau sort en cliquant sur son icône en bas à gauche)",
    }

  } else {
    text = {
      audio : 'Audio',
      music : 'Mute the music',
      son : "Mute game sounds",

      controle : "Controls",
      haut : "Up",
      bas : "Down",
      interagir : "Interact",
      gauche : "Left",
      droite : "Right",
      teleport : "Teleportation",

      langues : "Languages",
      fr : "French",
      eng : "English",

      option : "Option",
      jouer : "Play",

      moulin1 : "   Enter into the mill",
      moulin2 : "    before continuing.",

      entrer : 'Press [enter] to interact.',
      tp : "TELEPORT",
      tpimpo : "Teleport Impossible",
      continuer : "Continue",
      nsort : "New Spell !",
      compris : "Understood !",

      sort1a : "Emits a flame that deals damage to enemies",
      sort1b : "it touches.",
      sort1c : "to cast the spell, just click in on which",
      sort1d : "direction you want to aim.)",

      sort2a : "Summons a double that attacks enemies at",
      sort2b : "proximity to the player.",
      sort2c : "Its lifespan is limited, it disappears at the end",
      sort2d : "of a certain time.",

      sort3a : "Regenerates part of the life points of the",
      sort3b : "player.",
      sort3c : "The spell cannot be used inside",
      sort3d : "the red dimension.",

      tombea : "It's a tomb on which is engraved:",
			tombeb : '',
			tombec : 'Libitina, 532 - 556',

      pancarte : '          "Goblin Territory"',

      tablea : "It is a sheet with a single sentence",
      tableb : "written on it:",
      tablec : '"What is in the box?" ',

      tuto1a : "To change dimension, just press [space] or click on the icon",
      tuto1b : "at the top right of the screen.",
      tuto1c : "Teleport yourself to cross the river and collect as many coins as possible.",

      tuto2a : "Interdimensional switches are present on this place.",
      tuto2b : "Activating them will have an impact on the other dimension.",
      tuto2c : "Use them to access the mill.",

      tuto3a : "A campfire is present on this place. You can attract your enemies into it",
      tuto3b : "in order to inflict significant damage on them.",
      tuto3c : "(Use your new spell by clicking on its icon at the bottom left)",
    }
  }

}
