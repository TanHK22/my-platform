import './App.css'
import ProfileIcon from './assets/ProfileIcon.jpg'

function App() {
	return (
		<main>
			<header>
      			<h1>Hi! I'm Henry Tan</h1>
      			<h2>Majoring in B.S. Computer Science and B.S. Mechanical Engineering</h2>
			</header>
  
			<section>
				<p>I am a dual-citizen of Australia and the United States, I have a background in dental technician work, and I have a great fondness for raccoons as like me, they too have dark circles constantly surrounding their eyes. </p>
      				<br></br>
				<p>To clarify: my name is Henry Tan, my rank is 'Tactical Trash Panda', my id-number is 127.0.0.1, and my lightsaber color is plaid.</p>
					<br></br>
				<p>This site will serve as a record of my individual tasks for COMP 451.</p>
					<br></br>
				<img src = { ProfileIcon } alt = "A Happy Raccoon"/>
			</section>
    	</main>
  	)
}

export default App