Le Centre As-Salam disposera d’un design system cohérent, fondé sur des normes claires et des composants réutilisables. Les bases visuelles (couleurs, typographie, espacements) sont définies par des jetons de design (CSS variables) pour garantir la cohérence. Les composants UI (boutons, formulaires, cartes, navigation…) seront développés en React avec des props configurables et des états visuels standard (focus, hover, disabled, etc.). 

Couleurs 

Palette 60/30/10 : Couleur primaire (~60% des surfaces) apaisante (ex. bleu ou vert profond) pour l’ancrage, neutres (~30%) clairs (gris/beige) pour les fonds et textes secondaires, et couleur d’accent (~10%) vive (ex. doré) pour les CTA. Cette règle permet une interface harmonieuse. 

Contraste élevé : Toutes les combinaisons respectent WCAG AA pour l’accessibilité. Les couleurs neutres (blanc, gris clair) servent de fonds pour réduire la fatigue visuelle, tandis que les couleurs sémantiques (vert pour succès, rouge pour alerte) sont utilisées avec parcimonie. 

Tokens de couleurs : On définit des jetons nommés (par ex. --color-primary, --color-neutral-light, --color-accent) pour faciliter les mises à jour globales. Par exemple, --color-primary peut être appliqué aux boutons et titres clés. Changer un jeton met à jour toutes les instances correspondantes. 

:root { 
  /* Couleurs */ 
  --color-primary:      #2C5F7C; /* Bleu profond apaisant (60%) */ 
  --color-neutral:      #F5F5F0; /* Beige clair (30%) */ 
  --color-accent:       #D4A574; /* Or discret (10%) */ 
  --color-text-dark:    #333333; /* Texte principal */ 
  --color-text-light:   #666666; /* Texte secondaire */ 
 
  /* Typographie */ 
  --font-primary:       'Noto Sans', sans-serif; 
  --font-alt:           'Lora', serif; 
  --font-size-base:     16px; 
  --font-size-h1:       32px; 
  --font-size-h2:       24px; 
   
  /* Espacements */ 
  --space-xs: 8px; 
  --space-sm: 16px; 
  --space-md: 24px; 
  --space-lg: 32px; 
  --space-xl: 48px; 
} 
 

Typographie 

Police sans-serif principale : Exemples recommandés Open Sans ou Noto Sans. Ces polices neutres sans empattement sont larges, aux formes claires (open apertures) et assurent une lecture aisée sur écran. 

Hiérarchie typographique : Corps de texte en 16px, titres H1 ~32px, H2 ~24px, H3 ~20px, avec graisses adaptées (ex. H1 semi-bold). Une police complémentaire (ex. serif léger) peut servir pour légendes ou citations. Tous les textes évitent les effets décoratifs (ombre, lettrine) pour préserver la lisibilité. 

Accessibilité du texte : Espacement généreux (interlignage et lettre) pour l’accessibilité visuelle. Le contraste texte/fond atteint au minimum 4.5:1 (WCAG AA). Par exemple, les états de boutons et liens affichent un focus clair (bordure ou ombre) pour la navigation au clavier. 

Espacements 

Grille et marges : Grille fluide (12 colonnes, mobile-first) et marges généreuses. Les « espaces blancs » sont utilisés comme respiration cognitive. On base les dimensions sur des multiples de 8px. Par ex. padding de section 32px, interlignage de 24px. 

Tokens d’espacement : Définir des jetons (--space-xs … --space-xl) pour tous les marges et paddings. Les tokens normalisent les distances et hiérarchisent le contenu. Par exemple, --space-sm (<span style="font-family:monospace">16px</span>) pour rapprocher des éléments liés, et --space-lg (<span style="font-family:monospace">32px</span>) pour séparer des sections majeures. Changer un jeton ajuste la grille complète en un clic. 

Composants UI réutilisables 

Chaque composant est conçu comme un bloc interactif autonome (voir Atlassian : « blocs de construction réutilisables pour des besoins d’interaction spécifiques »). Ils sont fournis avec des props clairs et des styles constants basés sur le thème : 

Bouton (<Button> React) : Props typiques : variant (e.g. "primary" ou "secondary"), disabled, onClick, children (texte). Exemple : {<Button variant="primary">Soutenir le centre</Button>}. Un prop primary peut changer le style (couleur primaire vs neutre). États visuels : hover (couleur foncée), focus (anneau ou outline visible), disabled (opacité réduite, non cliquable). 

Champs de formulaire (<Input>, <Textarea>) : Props : type, label, value, placeholder, required, errorMessage. Ils gèrent les états focus (bordure bleue), erreur (bordure rouge + message) et disabled. Exemples : champ texte, email, menu déroulant, cases à cocher. Les labels sont toujours liés aux champs pour l’accessibilité. 

Formulaire (<Form>) : Wrapper acceptant onSubmit, children (Inputs), validationSchema. Gère les messages d’erreur et l’état global (ex. loading pendant envoi). Affiche un message de confirmation suite à la soumission (ex. « Merci, vous recevrez une confirmation par email »). 

Navigation / Menu : Barre fixe en haut avec les liens principaux (Accueil, À propos, Services, Engagement, Contact) et un bouton ou lien « Horaires de prière » sticky. Props : items (liste d’objets {label, href}), activeItem. La logique React gère l’état actif en fonction de la route. 

Cartes d’information (<Card>) : Conteneur générique avec titre, image éventuelle, contenu descriptif et éventuellement boutons d’action. Utile pour présenter un service ou un projet. Props : title, imageSrc, children, actionLabel, onActionClick. 

Éléments contextuels : Banner d’alerte ou information (ex. message « même équipe, nouveau lieu »), liste d’éléments (footer, liste de partenaires), modale de confirmation. Tous suivent le même thème (couleurs, coin arrondi, ombre légère). 

Widgets spécifiques : Par exemple, un composant <PrayerTimes> affiche les horaires de prière actuels. Il peut être intégré dans le header ou en sidebar. Props : location, date. Il rafraîchit automatiquement ou sur demande. 

Chaque composant réutilise les design tokens (couleurs, typo, espacements) et respecte les principes UX éthiques définis (pas de dark patterns ni gamification). Par exemple, un composant Button accepte un prop onClick et affiche un feedback neutre après action. Un seul CTA principal est mis en valeur par section (verbe d’action noble), conformément à la stratégie. Les autres props (secondary, disabled, aria-label, etc.) garantissent l’accessibilité et la flexibilité. 

Intégration React et thèmes 

Le design system utilisera un thème (par exemple via Context ou styled-components) pour fournir les tokens (colors, fonts, spacing) aux composants. Cela permet d’appliquer dynamiquement la palette et la typo. Par exemple, comme vu dans cet exemple, le style du bouton change selon la prop primary liée au thème. Les composants peuvent être documentés dans Storybook pour faciliter la réutilisation. 

En somme, ce design system Ihsan rassemble des fondations visuelles sobres (couleurs apaisantes, typo lisible, espaces généreux) et des composants modulaires conformes aux meilleures pratiques. Il garantit une interface claire et digne, où chaque composant sert un besoin utile sans manipulation. 