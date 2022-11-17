import React from 'react'
import { Routes, Route } from 'react-router'

import { Layout } from './layout/Layout'
import { Homepage } from './pages/Homepage/Homepage'
import { Gallery } from './pages/Gallery/Gallery'
import { World } from './pages/World/World'
import { Mindmap } from './pages/Mindmap/Mindmap'

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='world' element={<World />} />
        <Route path='mindmap' element={<Mindmap />} />
      </Route>
    </Routes>
  )
}
