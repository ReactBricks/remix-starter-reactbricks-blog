import { types } from 'react-bricks/frontend'

const pageTypes: types.IPageType[] = [
  {
    name: 'page',
    pluralName: 'pages',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
    excludedBlockTypes: [
      'title',
      'paragraph',
      'video',
      'image',
      'quote',
      'social-embed',
      'code-block',
      'tweet-light',
      'tweet',
    ],
  },
  {
    name: 'blog',
    pluralName: 'Blog',
    getDefaultContent: () => [],
    allowedBlockTypes: [
      'title',
      'paragraph',
      'video',
      'image',
      'quote',
      'social-embed',
      'code-block',
      'tweet',
      'tweet-light',
    ],
  },
]

export default pageTypes
