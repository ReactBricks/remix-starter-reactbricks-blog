import React from 'react'
import type { MetaFunction } from 'remix'
import { Admin, Login } from 'react-bricks'

export const meta: MetaFunction = () => {
  return {
    title: 'React Bricks Login',
  }
}

const AdminLogin: React.FC = () => {
  return (
    <Admin isLogin>
      <Login />
    </Admin>
  )
}

export default AdminLogin
