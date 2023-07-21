export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
        name: 'title',
        type: 'string',
        title: 'Title'
    },
    {
      name: 'author',
      type: 'object',
      fields: [
        {
          title: 'Author',
          name: 'author',
          type: 'reference',
          to: [{type: 'author'}],
        },
      ],
    },
  ],
}
