<script>
 export let appName;
 import DatePicker from "./DatePicker.svelte";
 let name = "";
 let dueDate;
 let displayedName = "";
 let displayedDueDate = '';

 function onAdd() {
     displayedName = name;
     displayedDueDate = dueDate;
     name = '';
     dueDate = null;
 }
</script>

<main>
    <h1>{appName}</h1>

    <label for="name">Task name:</label>
    <input type="text" id="name" name="name" bind:value={name}/>
    <DatePicker bind:date={dueDate}/>
    <button on:click={onAdd}>Add</button>
    <p>
        Task: {displayedName}
    </p>
    <p>
        Due: {displayedDueDate}
    </p>
</main>

<style>

</style>
