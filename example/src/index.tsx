import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Modal } from 'react-tailwind-modal'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const App = () => {
  const [modal, setModal] = useState(false)
  return (
    <div>
      <h1 className='my-8 text-center text-3xl'>Modal</h1>
      <button
        onClick={() => setModal(true)}
        data-modal-toggle='modal'
        title='Close'
        className='mx-auto block text-sm bg-gray-900 text-white font-semibold py-2 px-4 border border-gray-900 rounded-md duration-200 ease-out hover:scale-105'
      >
        Open
      </button>
      <div>{modal && <Modal title='Welcome' content='Hello World' onClick={() => setModal(false)} />}</div>
    </div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
