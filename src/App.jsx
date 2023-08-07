import React from 'react'
import { Notification } from './components/Notification/Notification'

import { Manager_Task } from './components'

export default function App() {
  return (
    <>
      <Notification
        message="Esto es una notificación"
        type="success"
        onClose={() => console.log('Notificación cerrada')}
      />

      <Manager_Task />

    </>



  )
}
