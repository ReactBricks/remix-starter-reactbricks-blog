import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
  useLoaderData,
} from 'remix'
import type { MetaFunction } from 'remix'
import { ReactBricks } from 'react-bricks/frontend'
import config from './react-bricks/config'

import styles from './tailwind.css'
import ErrorMessage from './components/ErrorMessage'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export const meta: MetaFunction = () => {
  return { title: 'Remix Blog Starter with React Bricks' }
}

export const loader = () => {
  const apiKey = process.env.API_KEY
  const appId = process.env.APP_ID

  if (!apiKey || !appId) {
    throw new Error('Missing React Bricks credentials in .env file')
  }

  return { appId, apiKey }
}

export default function App() {
  const navigate = useNavigate()
  const { appId, apiKey } = useLoaderData()

  const reactBricksConfig = {
    ...config,
    appId,
    apiKey,
    navigate: (path: string) => navigate(path),
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body id="root">
        <ReactBricks {...reactBricksConfig}>
          <Outlet />
        </ReactBricks>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <ErrorMessage error={error} />
        <Scripts />
      </body>
    </html>
  )
}
