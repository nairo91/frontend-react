export const siteText = {
  nav: {
    brand: 'CYNA',
    brandLabel: 'Accueil CYNA',
    searchPlaceholder: 'Rechercher une solution, un service ou un besoin',
    searchButton: 'Rechercher',
    searchHint: 'Recherche catalogue bientôt disponible',
    cartLabel: 'Panier',
    cartHint: 'Panier bientôt disponible',
    primaryLinks: [
      { label: 'Accueil', to: '/' },
      { label: 'Catégories', to: '/categories' },
      { label: 'Produits', to: '/products' },
    ],
    authLinks: [
      { label: 'Se connecter', href: '#footer-contact' },
      { label: "S'inscrire", href: '#footer-contact' },
    ],
    mobileLinks: [
      { label: 'Se connecter', href: '#footer-contact' },
      { label: "S'inscrire", href: '#footer-contact' },
      { label: 'CGU', href: '#footer-legal' },
      { label: 'Mentions légales', href: '#footer-legal' },
      { label: 'Contact', href: '#footer-contact' },
      { label: 'À propos de CYNA', href: '#footer-about' },
    ],
  },
  home: {
    slides: [
      {
        eyebrow: 'SOC managé',
        title: 'Gardez la maîtrise de votre sécurité sans alourdir vos équipes.',
        copy:
          'CYNA combine supervision, analyse et accompagnement pour aider les PME et ETI à gagner en visibilité et en réactivité.',
        cta: 'Découvrir nos offres',
        to: '/products',
        visualTitle: 'Un pilotage clair au quotidien',
        visualItems: ['Surveillance 24/7', 'Analystes dédiés', 'Alertes prioritaires'],
      },
      {
        eyebrow: 'Protection postes',
        title: 'Détectez plus vite, contenez mieux, avancez sereinement.',
        copy:
          'Nos solutions endpoint sont pensées pour protéger les usages réels de votre entreprise, sans complexifier l exploitation.',
        cta: 'Voir les catégories',
        to: '/categories',
        visualTitle: 'Une réponse adaptée au terrain',
        visualItems: ['Détection comportementale', 'Aide à la remédiation', 'Mise en oeuvre progressive'],
      },
      {
        eyebrow: 'Offres cloud & XDR',
        title: 'Un catalogue cyber conçu pour structurer vos priorités.',
        copy:
          'CYNA aide les directions IT et sécurité à choisir des solutions lisibles, évolutives et cohérentes avec leur maturité.',
        cta: 'Voir les top produits',
        to: '/products',
        visualTitle: 'Des parcours simples pour décider',
        visualItems: ['Comparaison plus claire', 'Accompagnement commercial', 'Vision multi-besoins'],
      },
    ],
    intro: {
      eyebrow: 'La cybersécurité, rendue plus simple',
      title: 'Des solutions cyber claires, crédibles et actionnables pour les entreprises.',
      copy:
        'CYNA construit une expérience d achat plus lisible autour de solutions SaaS et services managés. Vous identifiez plus vite les catégories utiles, vous comparez plus simplement les offres, et vous avancez avec un cadre rassurant.',
      points: [
        {
          title: 'Choisir sans se perdre',
          copy: 'Une présentation plus claire des offres pour aller à l essentiel.',
        },
        {
          title: 'Structurer vos priorités',
          copy: 'Des catégories lisibles pour relier besoins métier et solutions cyber.',
        },
        {
          title: 'Avancer progressivement',
          copy: 'Une base SPA propre pour enrichir ensuite le catalogue, le compte et le panier.',
        },
      ],
    },
    categories: {
      title: 'Nos catégories',
      copy: 'Explorez les grandes familles de solutions CYNA et identifiez rapidement le type de protection adapté à votre contexte.',
      meta: 'Voir toutes les catégories',
      error: 'Les catégories sont temporairement indisponibles. Merci de réessayer dans un instant.',
      fallbackDescription: 'Une catégorie CYNA pour structurer votre démarche cyber.',
      chip: 'Voir la catégorie',
    },
    products: {
      title: 'Les Top Produits du moment',
      copy: 'Une sélection courte pour mettre en avant les offres les plus visibles du catalogue CYNA.',
      meta: 'Voir tous les produits',
      error: 'Les top produits sont temporairement indisponibles. Merci de réessayer dans un instant.',
      fallbackPrice: 'Sur devis',
      fallbackCategory: 'Sélection CYNA',
      status: 'Mis en avant',
    },
  },
  footer: {
    title: 'CYNA',
    copy:
      'CYNA accompagne les entreprises dans le choix de solutions de cybersécurité plus lisibles, plus pilotables et plus adaptées à leurs usages.',
    legalLinks: [
      { label: 'Mentions légales', href: '#footer-legal' },
      { label: 'CGU', href: '#footer-legal' },
      { label: 'Contact', href: '#footer-contact' },
      { label: 'À propos de CYNA', href: '#footer-about' },
    ],
    socialLinks: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com', external: true },
      { label: 'YouTube', href: 'https://www.youtube.com', external: true },
      { label: 'X', href: 'https://x.com', external: true },
    ],
  },
  pages: {
    categories: {
      eyebrow: 'Page en préparation',
      title: 'La page catégories sera la prochaine étape du catalogue SPA.',
      copy:
        "La structure est prête. Pour l'instant, la home consomme déjà les catégories publiques du backend Symfony.",
      primary: "Retour à l'accueil",
      secondary: 'Voir les produits',
    },
    products: {
      eyebrow: 'Page en préparation',
      title: 'La page produits sera bientôt branchée sur le catalogue complet.',
      copy:
        "La base de routage est déjà en place. La prochaine itération pourra s'appuyer sur l'API produits sans revoir l'architecture SPA.",
      primary: "Retour à l'accueil",
      secondary: 'Voir les catégories',
    },
    notFound: {
      eyebrow: 'Page introuvable',
      title: "Cette page n'existe pas encore dans l'espace public CYNA.",
      copy: "Revenez à l'accueil pour poursuivre votre navigation dans le catalogue.",
      cta: "Retour à l'accueil",
    },
  },
}
