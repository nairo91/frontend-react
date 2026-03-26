export const siteText = {
  nav: {
    brand: 'CYNA',
    brandLabel: 'Accueil CYNA',
    searchPlaceholder: 'Rechercher une solution, un service ou un besoin',
    searchButton: 'Rechercher',
    searchHint: 'Recherche catalogue bientot disponible',
    cartLabel: 'Panier',
    cartHint: 'Panier bientot disponible',
    primaryLinks: [
      { label: 'Accueil', to: '/' },
      { label: 'Categories', to: '/categories' },
      { label: 'Produits', to: '/products' },
    ],
    authLinks: [
      { label: 'Se connecter', to: '/login' },
      { label: "S'inscrire", to: '/register' },
    ],
    mobileLinks: [
      { label: 'Se connecter', to: '/login' },
      { label: "S'inscrire", to: '/register' },
      { label: 'CGU', href: '#footer-legal' },
      { label: 'Mentions legales', href: '#footer-legal' },
      { label: 'Contact', href: '#footer-contact' },
      { label: 'A propos de CYNA', href: '#footer-about' },
    ],
  },
  home: {
    slides: [
      {
        eyebrow: 'SOC manage',
        title: 'Gardez la maitrise de votre securite sans alourdir vos equipes.',
        copy:
          'CYNA combine supervision, analyse et accompagnement pour aider les PME et ETI a gagner en visibilite et en reactivite.',
        cta: 'Decouvrir nos offres',
        to: '/products',
        visualTitle: 'Un pilotage clair au quotidien',
        visualItems: ['Surveillance 24/7', 'Analystes dedies', 'Alertes prioritaires'],
      },
      {
        eyebrow: 'Protection postes',
        title: 'Detectez plus vite, contenez mieux, avancez sereinement.',
        copy:
          'Nos solutions endpoint sont pensees pour proteger les usages reels de votre entreprise, sans complexifier l exploitation.',
        cta: 'Voir les categories',
        to: '/categories',
        visualTitle: 'Une reponse adaptee au terrain',
        visualItems: ['Detection comportementale', 'Aide a la remediation', 'Mise en oeuvre progressive'],
      },
      {
        eyebrow: 'Offres cloud & XDR',
        title: 'Un catalogue cyber concu pour structurer vos priorites.',
        copy:
          'CYNA aide les directions IT et securite a choisir des solutions lisibles, evolutives et coherentes avec leur maturite.',
        cta: 'Voir les top produits',
        to: '/products',
        visualTitle: 'Des parcours simples pour decider',
        visualItems: ['Comparaison plus claire', 'Accompagnement commercial', 'Vision multi-besoins'],
      },
    ],
    intro: {
      eyebrow: 'La cybersecurite, rendue plus simple',
      title: 'Des solutions cyber claires, credibles et actionnables pour les entreprises.',
      copy:
        'CYNA construit une experience d achat plus lisible autour de solutions SaaS et services manages. Vous identifiez plus vite les categories utiles, vous comparez plus simplement les offres, et vous avancez avec un cadre rassurant.',
      points: [
        {
          title: 'Choisir sans se perdre',
          copy: 'Une presentation plus claire des offres pour aller a l essentiel.',
        },
        {
          title: 'Structurer vos priorites',
          copy: 'Des categories lisibles pour relier besoins metier et solutions cyber.',
        },
        {
          title: 'Avancer progressivement',
          copy: 'Une base SPA propre pour enrichir ensuite le catalogue, le compte et le panier.',
        },
      ],
    },
    categories: {
      title: 'Nos categories',
      copy:
        'Explorez les grandes familles de solutions CYNA et identifiez rapidement le type de protection adapte a votre contexte.',
      meta: 'Voir toutes les categories',
      error: 'Les categories sont temporairement indisponibles. Merci de reessayer dans un instant.',
      fallbackDescription: 'Une categorie CYNA pour structurer votre demarche cyber.',
      chip: 'Voir la categorie',
    },
    products: {
      title: 'Les Top Produits du moment',
      copy: 'Une selection courte pour mettre en avant les offres les plus visibles du catalogue CYNA.',
      meta: 'Voir tous les produits',
      error: 'Les top produits sont temporairement indisponibles. Merci de reessayer dans un instant.',
      fallbackPrice: 'Sur devis',
      fallbackCategory: 'Selection CYNA',
      status: 'Mis en avant',
    },
  },
  footer: {
    title: 'CYNA',
    copy:
      'CYNA accompagne les entreprises dans le choix de solutions de cybersecurite plus lisibles, plus pilotables et plus adaptees a leurs usages.',
    legalLinks: [
      { label: 'Mentions legales', href: '#footer-legal' },
      { label: 'CGU', href: '#footer-legal' },
      { label: 'Contact', href: '#footer-contact' },
      { label: 'A propos de CYNA', href: '#footer-about' },
    ],
    socialLinks: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com', external: true },
      { label: 'YouTube', href: 'https://www.youtube.com', external: true },
      { label: 'X', href: 'https://x.com', external: true },
    ],
  },
  pages: {
    categories: {
      eyebrow: 'Page en preparation',
      title: 'La page categories sera la prochaine etape du catalogue SPA.',
      copy:
        "La structure est prete. Pour l'instant, la home consomme deja les categories publiques du backend Symfony.",
      primary: "Retour a l'accueil",
      secondary: 'Voir les produits',
    },
    products: {
      eyebrow: 'Page en preparation',
      title: 'La page produits sera bientot branchee sur le catalogue complet.',
      copy:
        "La base de routage est deja en place. La prochaine iteration pourra s'appuyer sur l'API produits sans revoir l'architecture SPA.",
      primary: "Retour a l'accueil",
      secondary: 'Voir les categories',
    },
    notFound: {
      eyebrow: 'Page introuvable',
      title: "Cette page n'existe pas encore dans l'espace public CYNA.",
      copy: "Revenez a l'accueil pour poursuivre votre navigation dans le catalogue.",
      cta: "Retour a l'accueil",
    },
  },
  auth: {
    benefits: [
      'Connexion simple a votre espace CYNA',
      'Suivi futur de vos offres, comptes et parcours',
      'Base prete pour JWT et evolutions du compte client',
    ],
    login: {
      eyebrow: 'Connexion',
      title: 'Accedez a votre espace CYNA',
      copy:
        'Connectez-vous pour retrouver vos informations, vos prochaines etapes et les services relies a votre compte.',
      cardTitle: 'Se connecter',
      cardCopy: 'Utilisez votre adresse email et votre mot de passe pour ouvrir votre session CYNA.',
      submit: 'Se connecter',
      submitting: 'Connexion...',
      emailLabel: 'Adresse email',
      passwordLabel: 'Mot de passe',
      forgotPassword: 'Mot de passe oublie ?',
      divider: 'ou',
      google: 'Continuer avec Google',
      googleHint: 'Connexion Google bientot disponible',
      success: 'Connexion reussie. Redirection en cours...',
      switchPrompt: "Vous n'avez pas encore de compte ?",
      switchAction: "Creer un compte",
    },
    register: {
      eyebrow: 'Inscription',
      title: 'Creez votre acces CYNA',
      copy:
        'Preparez votre espace client pour centraliser vos futures interactions avec le catalogue CYNA et vos services.',
      cardTitle: "S'inscrire",
      cardCopy:
        "Le formulaire frontend est pret. L'ouverture complete de compte dependra de l'endpoint d'inscription expose par l'API.",
      submit: 'Envoyer la demande',
      submitting: 'Envoi...',
      fullNameLabel: 'Nom complet',
      companyLabel: 'Entreprise',
      emailLabel: 'Adresse email',
      passwordLabel: 'Mot de passe',
      confirmPasswordLabel: 'Confirmer le mot de passe',
      divider: 'ou',
      google: 'Continuer avec Google',
      googleHint: 'Inscription Google bientot disponible',
      info:
        "L'inscription frontend est prete, mais l'API d'inscription n'est pas encore disponible. Votre demande n'est donc pas encore creee cote backend.",
      passwordMismatch: 'Les mots de passe saisis ne correspondent pas.',
      switchPrompt: 'Vous avez deja un compte ?',
      switchAction: 'Se connecter',
    },
  },
}
