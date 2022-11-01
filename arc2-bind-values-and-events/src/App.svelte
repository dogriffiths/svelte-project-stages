<script>
 export let appName;
 let name = "";
 let displayedName = "";
 function onAdd() {
     displayedName = name;
 }
</script>

<main>
    <h1>{appName}</h1>

    <label for="name">Task name:</label>
    <input type="text" id="name" name="name" bind:value={name}/>
    <button on:click={onAdd}>Add</button>
    <p>
        Task: {displayedName}
    </p>
</main>

<style>

</style>
