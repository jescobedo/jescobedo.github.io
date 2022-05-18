module.exports = {
  siteMetadata: {
    siteTitle: `Jorge Escobedo`,
    siteTitleAlt: `Jorge Escobedo`,
    siteHeadline: `Jorge Escobedo's Blog`,
    siteUrl: `https://www.jorgeescobedo.com`,
    siteDescription: `Jorge Escobedo's Blog`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@coco_escobedo`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/coco_escobedo`,
          },
          {
            name: `LinkedIn`,
            url: `https://linkedin.com/in/jescob`,
          }
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`
  ],
}
