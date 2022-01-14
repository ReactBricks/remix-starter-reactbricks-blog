import { types } from 'react-bricks/frontend'

// =========================================
// REACT BRICKS UI
// You may also import { Single Bricks }
// to reduce the bundle size
import Blog from 'react-bricks-ui/blog'
import Website from 'react-bricks-ui/website'

// Example custom brick
import MyHeroUnit from './MyHeroUnit'

const bricks: types.Brick<any>[] = [
  ...Website,
  //...Blog,
  MyHeroUnit,
  // Put here your other bricks...
]

export default bricks
