export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e31870bb9c25975ad3a3d04',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vcyyt1vp',
                  apiId: '9734e13b-4501-4221-8555-92b2c38a7501'
                },
                {
                  buildHookId: '5e31870bd4dbad99d77081c0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ta6z82gq',
                  apiId: 'c139a2f2-de47-4194-a578-0a73108d1ca3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ahmadsabani18/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ta6z82gq.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
