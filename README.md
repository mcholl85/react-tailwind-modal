# react-tailwind-modal

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]

## Installation:

```bash
npm install react-tailwind-modal --save-dev
```

or

```bash
yarn add -D react-tailwind-modal
```

## Usage :

Add `Modal` to your component:

```js
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
```

[npm-url]: https://www.npmjs.com/package/react-tailwind-modal
[npm-image]: https://img.shields.io/npm/v/react-tailwind-modal
[github-build]: https://github.com/mcholl85/react-tailwind-modal/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/mcholl85/react-tailwind-modal/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-tailwind-modal