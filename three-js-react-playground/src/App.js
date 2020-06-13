import React from "react"
import "./styles/app.scss"
import ErrorBoundary from "./containers/Errorboundary"
import { Switch, Route } from "react-router-dom"
import Painting from "./components/painting"
import Landing from "./pages/landing"
import Video from "./pages/story"
import Experience from "./pages/experience"
import Footer from "./components/footer"

const App = () => {
	return (
		<ErrorBoundary>
			<Switch>
				<Route path='/' exact component={Landing} />
				<Route path='/story' exact component={Video} />
				<Route path='/experience' exact component={Experience} />
				<Route path='/painting' exact component={Painting} />
			</Switch>
			<Footer />
		</ErrorBoundary>
	)
}

export default App
