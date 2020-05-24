module.exports = {
  siteMetadata: {
    title: `A melhor você`,
    description: `Para você conseguir ser feliz com alguém, você tem que aprender a ser feliz sozinha.`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
         */
        baseUrl: `www.amelhorvoce.com.br`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
      },
    },
  ],
}
