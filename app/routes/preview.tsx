import React from 'react'
import { Preview } from 'react-bricks/frontend'
import { MetaFunction } from 'remix'

export const meta: MetaFunction = ({ data }) => {
  return {
    title: 'Preview',
  }
}

const PagePreview: React.FC = () => {
  return <Preview />
}

export default PagePreview
