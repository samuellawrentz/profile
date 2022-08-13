/* eslint-disable no-undef */
import * as React from "react"
import {LinkButton} from './../components/button'


// markup
const NotFoundPage = () => {
	return (
		<main>
			<title>Yo yo! Not found!</title>
			<h1>Page not found</h1>
			<h2>Looks like we've been lost at sea.</h2>
			<p>Don't Panic, you can always go home.</p>
			<LinkButton to="/" style={{fontSize: 30, marginTop: 40}}>Go Home 🏚</LinkButton>
		</main>
	)
}

export default NotFoundPage
