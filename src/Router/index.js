import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loader from '../components/Loader';
import './index.scss';
import AnimatedTransition from '../components/AnimatedTransition';

const OpenSource = lazy(() => import(/* webpackChunkName: "OpenSource" */ '../containers/OpenSource'));
const Home = lazy(() => import(/* webpackChunkName: "Home" */ '../components/Home'));
const About = lazy(() => import(/* webpackChunkName: "About" */ '../components/About'));
const Header = lazy(() => import(/* webpackChunkName: "Header" */ '../components/Header'));
const Container = lazy(() => import(/* webpackChunkName: "Container" */ '../components/Container'));
const OpenSourceProject = lazy(() =>
	import(/* webpackChunkName: "OpenSourceProject" */ '../containers/OpenSourceProject')
);
const Lab = lazy(() => import(/* webpackChunkName: "Lab" */ '../components/Lab'));

export default function Router() {
	return (
		<div className='wrapper'>
			<Suspense fallback={<Loader />}>
				<Header />
				<Container>
					<Switch>
						<Route exact path='/' render={() => <Home />} />
						<Route exact path='/opensource' render={() => <OpenSource />} />
						<Route exact path='/opensource/:project' render={() => <OpenSourceProject />} />
						<Route exact path='/about' render={() => <About />} />
						<Route exact path='/animatedtransition' render={() => <AnimatedTransition />} />
						<Route exact path='/lab' render={() => <Lab />} />
					</Switch>
				</Container>
			</Suspense>
		</div>
	);
}
