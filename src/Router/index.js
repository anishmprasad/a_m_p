import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// import OpenSource from '../components/OpenSource'
// import Home from '../components/Home'
// import Header from '../components/Header'
// import About from '../components/About';
import Loader from '../components/Loader';
import './index.scss';

const OpenSource = lazy(() => import('../components/OpenSource'));
const Home = lazy(() => import('../components/Home'));
const About = lazy(() => import('../components/About'));
const Header = lazy(() => import('../components/Header'));
const Container = lazy(() => import('../components/Container'))
// const InlineLoader = lazy(() => import('../components/InlineLoader'));


export default function Router() {
  return (
    <div className='wrapper'>
      <Suspense fallback={<Loader/>}>
        <Header />
        <Container>
          <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/opensource' render={() => <OpenSource />} />
          <Route exact path='/about' render={() => <About />} />
        </Switch>
        </Container>
      </Suspense>
    </div>
  )
}

