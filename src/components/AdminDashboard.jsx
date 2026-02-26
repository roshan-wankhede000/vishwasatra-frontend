import React from 'react'
import AdminHero from './AdminHero'
import AdminAboutProject from './AdminAboutProject'

function AdminDashboard() {

  let token = localStorage.getItem('token')
  return (
    <>
      <AdminHero></AdminHero>

      <AdminAboutProject></AdminAboutProject>
    </>
  )
}

export default AdminDashboard