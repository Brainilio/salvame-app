import React from "react"
import "./styles/app.scss"
import ErrorBoundary from "./containers/Errorboundary"
import { Switch, Route } from "react-router-dom"
import Painting from "./components/painting"
import Landing from "./pages/landing"
import Story from "./pages/story"
import Experience from "./pages/experience"
import Footer from "./components/footer"
import Situations from "./pages/situations"
import Marvin from "./pages/marvin"
// import SongContext from "./context/context"
// import ReactHowler from "react-howler"
// import backgroundMusic from "./assets/background_music.mp3"

const App = () => {
	return (
		<ErrorBoundary>
			<Switch>
				<Route path='/' exact component={Landing} />
				<Route path='/story' exact component={Story} />
				<Route path='/marvin' exact component={Marvin} />
				<Route path='/situations' exact component={Situations} />
				<Route path='/experience' exact component={Experience} />
				<Route path='/painting' exact component={Painting} />
			</Switch>
			<Footer />
		</ErrorBoundary>
	)
}

export default App
