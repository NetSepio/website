<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/community' ? 'page' : undefined}>
				<a href="/community">Community</a>
			</li>
		</ul>
	</nav>
</header>
