const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Lucas Gouvêa', // Navigation and Site Title
  siteTitleAlt: 'Cara', // Alternative Site title for SEO
  siteUrl: 'https://lucasgouvea.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'pt', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Portfolio pessoal desenvolvido a partir de um template do GatsbyJS',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@lucasisstrange', // Twitter Username
  ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'pt_BR', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
