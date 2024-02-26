function Navbar() {
  return `
    <div class="navbar">
			<div class="menu-logo-container">
				<img src="assets/logo.png" class="menu-logo" alt="Hailsham Logo" />
				<span>The School of Hailsham</span>
			</div>
			<nav class="navbar-links">
				<a href="/">Home</a>
				<a href="/about.html">About</a>
				<a href="/directory.html">Directory</a>
				<a href="/news.html">News</a>
				<a href="/contact.html">Contact</a>
			</nav>
		</div>
	`;
}

function Footer() {
  return `
		<footer class="footer">
			<div class="footer-container">
				<div>
					<div class="footer-logo-container">
						<img src="assets/logo.png" class="footer-logo" alt="Hailsham Logo">
						<span>The School of Hailsham</span>
					</div>

					<h3 style="text-align: right">Established 1953</h3>

				</div>
				
				<div>
					<div class="footer-links">
						<a href="/">Home</a>
						<a href="/about.html">About</a>
						<a href="/directory.html">Directory</a>
						<a href="/news.html">News</a>
						<a href="/contact.html">Contact</a>
					</div>

					<h3>Humanity is for everyone.</h3>

				</div>

			</div>
		</footer>
	`;
}



// insert at beginning of root innerHTML
document.getElementById('root').insertAdjacentHTML('afterbegin', Navbar());
// insert at end of root innerHTML
document.getElementById('root').insertAdjacentHTML('beforeend', Footer());