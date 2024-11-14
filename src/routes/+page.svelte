<svelte:head>
    <title>Svelte 5 Sandbox</title>
</svelte:head>

<script>
    export let data
</script>

<pre>
    {JSON.stringify(data, null, 2)}
</pre>