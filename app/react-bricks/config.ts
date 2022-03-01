import { types } from 'react-bricks/frontend'

import bricks from './bricks'
import pageTypes from './pageTypes'
import RemixLink from './RemixLink'

const config: types.ReactBricksConfig = {
  appId: '', //process.env.APP_ID as string || '',
  apiKey: '', //process.env.API_KEY as string || '',
  pageTypes,
  bricks,
  logo: '/logo.svg',
  previewPath: '/preview',
  // // contentClassName: 'content', // Defined dynamically
  // // isDarkColorMode: ...,        // in _app.tsx
  // // toggleColorMode: ...,        // to manage Dark Mode
  renderLocalLink: RemixLink,
  navigate: () => {},
  loginPath: '/admin',
  editorPath: '/admin/editor',
  playgroundPath: '/admin/playground',
  appSettingsPath: '/admin/app-settings',
  useCssInJs: false,
  appRootElement: '#root',
  clickToEditSide: types.ClickToEditSide.BottomRight,
  customFields: [],
  // //responsiveBreakpoints: [{ type: types.DeviceType.Phone, width: 480, label: 'Smartphone'}],
  enableAutoSave: true,
  disableSaveIfInvalidProps: false,
  enablePreview: true,
}

export default config
