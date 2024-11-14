<script>
	import '../app.css';
	let { children } = $props();
</script>

<header class="bg-slate-600 text-slate-100 flex text-2xl">
	<div class="text-2xl pl-3">
		Svelte 5 Sandbox
	</div>
	<nav class="ml-auto pr-3">
		<ul>
			<li><a class="hover:bg-slate-900" aria-label="Link to the home page" href="/">Home</a></li>
		</ul>
	</nav>
</header>

{@render children()}
