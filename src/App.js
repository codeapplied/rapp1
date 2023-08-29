import React from 'react';

import { Footer, Blog, Possibility, Features, Kcodeapplied } from './containers';
import { Cta, Brand, Navbar } from './components'


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        {/* <Header1 /> */}
      </div>
      <Brand />
      <knowCodeapplied />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
