function Navbar() {
  return `
    <div class="navbar">
			<div class="menu-logo-container">
				<img src="assets/logo.png" class="menu-logo" alt="Hailsham Logo" />
				<div class="hailsham-name-logo">
					<span class="hailsham-name-logo-t1">The School of</span>
					<span class="hailsham-name-logo-t2">Hailsham</span>
				</div>

			</div>
			<nav class="navbar-links">
				<a href="/">Home</a>
				<a href="/directory.html">Directory</a>
				<a href="/contact.html">Contact</a>
			</nav>
		</div>
	`;
}

function Footer() {
  return `
		<footer class="footer">
			<div class="footer-container">
				<div class="footer-left">

					<img class="footer-seal" src="assets/hailsham_seal.png" alt="Hailsham Seal" />

					<div style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
						<div class="footer-logo-container">
							<img src="assets/logo.png" class="footer-logo" alt="Hailsham Logo">
							<div class="hailsham-name-logo">
								<span class="hailsham-name-logo-t1" style="font-size: 15px">The School of</span>
								<span class="hailsham-name-logo-t2" style="font-size: 30px">Hailsham</span>
							</div>
						</div>

						<h3 style="text-align: left">Est. 1953</h3>
						<p style="text-align: left; font-weight: 400; font-size: 14px">This website is owned and operated by Headmaster Emily.</p>
					</div>
				</div>
				
				<div>
					<div class="footer-links">
						<a href="/">Home</a>
						<a href="/directory.html">Directory</a>
						<a href="/contact.html">Contact</a>
					</div>

					<h3>Acceptance is to suffer. <i>Fight on.</i></h3>

				</div>

			</div>
			<div class="footer-bottom">
				Cressay Project for <i>Never Let Me Go</i> by Kazuo Ishiguro. 

				<p style="color: #fff8; font-size: 12px">Photo assets (page hero and directory photos) courtesy of the 2010 film <i>Never Let Me Go</i> directed by Mark Romanek. All other images are original content.</p>
			
				<div class="footer-bottom-buttons">

					<div class="footer-bottom-credit">
						<img src="../assets/pfp.png" class="footer-bottom-pfp" alt="" />
						<span class="footer-bottom-username">crystaltine</span>
					</div>

					<a href="https://github.com/crystaltine/hailsham_website#readme-ov-file" target="_blank" rel="noopener noreferrer">
						<button class="button-primary button-medium">README</button>
					</a>
					<a href="https://github.com/crystaltine/hailsham_website" target="_blank" rel="noopener noreferrer">
						<button class="button-secondary button-medium">Source Code</button>
					</a>
				</div>
			</div>
		</footer>
	`;
}

window.addEventListener('DOMContentLoaded', () => {
	console.log('dom content loaded')
	// insert at beginning of root innerHTML
	document.getElementById('root').insertAdjacentHTML('afterbegin', Navbar());
	// insert at end of root innerHTML
	document.getElementById('root').insertAdjacentHTML('beforeend', Footer());
})