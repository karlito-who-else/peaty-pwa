/* eslint-disable @typescript-eslint/no-var-requires */
const siteMetadata = require("./config/site-metadata");
// const iconsConfiguration = require("./config/icons");

// const icons = iconsConfiguration.map(icon => ({
//   sizes: `${icon.size}x${icon.size}`,
//   src: `/icons/icon-${icon.size}x${icon.size}.${icon.type}`,
//   type: `image/${icon.type}`
// }));

const config = {
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        // jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true // defaults to false
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        // include_favicon: false,
        name: siteMetadata.title,
        // eslint-disable-next-line @typescript-eslint/camelcase
        short_name: siteMetadata.shortTitle,
        // eslint-disable-next-line @typescript-eslint/camelcase
        start_url: `/`,
        // eslint-disable-next-line @typescript-eslint/camelcase
        background_color: `#ffffff`,
        // eslint-disable-next-line @typescript-eslint/camelcase
        theme_color: `#663399`,
        // eslint-disable-next-line @typescript-eslint/camelcase
        theme_color_in_head: false,
        display: `minimal-ui`,
        icon: `src/img/logo/logomark-medium.svg`
        // icons
      }
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.ts`
      }
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.scss"] // applies purging only on the bulma css file
      }
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};

if (process.env.DATABASE_URI) {
  config.plugins.push({
    resolve: "gatsby-source-pg",
    options: {
      appendPlugins: [
        require("@graphile-contrib/pg-simplify-inflector"),
        require("@graphile-contrib/pg-many-to-many")
      ],
      connectionString: process.env.DATABASE_URI,
      refetchInterval: 60, // Refetch data every 60 seconds
      schema: "forum_example"
    }
  });
}

if (process.env.APP_SYNC_TEST_API_URL_tmp) {
  config.plugins.push(`gatsby-plugin-robots-txt`, `gatsby-plugin-feed`, {
    resolve: "gatsby-source-graphql",
    options: {
      fieldName: "test",
      headers: {
        "x-api-key": "da2-qrurwvblfzf4poi6grcp3urba4"
      },
      typeName: "Test",
      url: process.env.APP_SYNC_TEST_API_URL
    }
  });
}

module.exports = config;
