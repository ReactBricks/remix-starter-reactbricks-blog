import React from 'react'
import type { MetaFunction } from 'remix'
import { Admin, AppSettings } from 'react-bricks'

export const meta: MetaFunction = () => {
  return {
    title: 'React Bricks App Settings',
  }
}

const AdminAppSettings: React.FC = () => {
  return (
    <Admin>
      <AppSettings />
    </Admin>
  )
}

export default AdminAppSettings
