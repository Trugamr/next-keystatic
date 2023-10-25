import { config, fields, collection } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    generations: collection({
      label: 'Generations',
      slugField: 'title',
      path: 'content/generations/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        prompt: fields.text({ label: 'Prompt' }),
        image: fields.image({
          label: 'Image',
          directory: 'public/images/generations',
          publicPath: '/images/generations/',
        }),
      },
    }),
  },
})
