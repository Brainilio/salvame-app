import React, { useEffect } from "react"
import "./styles/app.scss"
import ErrorBoundary from "./containers/Errorboundary"
import { CSSTransition } from "react-transition-group"
import { gsap } from "gsap"
import { Switch, Route } from "react-router-dom"
import Painting from "./components/painting"
import Landing from "./pages/landing"
import Story from "./pages/story"
import Experience from "./pages/experience"
import Footer from "./components/footer"
import Situations from "./pages/situations"
import Resource from "./pages/resources"
import Marvin from "./pages/marvin"

const routes = [
	{ path: "/", name: "Landing", Component: Story },
	{ path: "/marvin", name: "Marvin", Component: Marvin },
	{ path: "/situations", name: "Situations", Component: Situations },
	{ path: "/experience", name: "Experience", Component: Experience },
	{ path: "/painting", name: "Painting", Component: Painting },
	{ path: "/resource", name: "Resource", Component: Resource },
]

const App = () => {
	return (
		<ErrorBoundary>
			{routes.map(({ path, Component, name }) => (
				<Route key={name} path={path} exact>
					{({ match }) => (
						<CSSTransition
							in={match !== null}
							timeout={1200}
							classNames='page'
							unmountOnExit
						>
							<div className='page'>
								<Component />
							</div>
						</CSSTransition>
					)}
				</Route>
			))}

			{/* <Switch>
				<Route path='/' exact component={Landing} />
				<Route path='/story' exact component={Story} />
				<Route path='/marvin' exact component={Marvin} />
				<Route path='/situations' exact component={Situations} />
				<Route path='/experience' exact component={Experience} />
				<Route path='/painting' exact component={Painting} />
				<Route path='/resource' exact component={Resource} />
			</Switch> */}
			<Footer />
		</ErrorBoundary>
	)
}

export default App
