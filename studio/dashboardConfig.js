export default {
  widgets: [
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
                  buildHookId: '603aed6ec3f05bdb1f84b050',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-7isxnbzj',
                  apiId: '0dea4965-8679-4db1-9109-1013ff01d2ee'
                },
                {
                  buildHookId: '603aed6e60b952aee7b3cd95',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-z76f997e',
                  apiId: 'ea4cf29c-126d-479d-8cb0-83a2e53aa132'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DannyMichaels/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-z76f997e.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
