import React from 'react';

//Components
import {
	Footer,
	Wayfinder
} from './components';

//Views
import {
	About,
	Competencies,
	Contact,
	Projects
} from './views';

const App = () => { 
	return (
		<React.Fragment>
			<header>
				<Wayfinder />
			</header>
			<main>
				<About />
				<Competencies />
				<Projects />
				<Contact />
			</main>
			<footer>
				<Footer />
			</footer>
		</React.Fragment>
	);
}

export default App;