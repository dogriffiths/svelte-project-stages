<script>
 export let appName;
 //import DatePicker from "./DatePicker.svelte";
 import TaskForm from "./TaskForm.svelte";
 let displayedName = "";
 let displayedDueDate = '';

 function onAdd(evt) {
     const task = evt.detail;
     displayedName = task.name;
     displayedDueDate = task.dueDate;
 }
</script>

<main>
    <h1>{appName}</h1>

    <TaskForm on:submit={onAdd}/>

    <p>
        Task: {displayedName}
    </p>
    <p>
        Due: {displayedDueDate}
    </p>
</main>

<style>

</style>
