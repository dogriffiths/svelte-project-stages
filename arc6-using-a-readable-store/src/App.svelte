<script>
 export let appName;
 import TaskForm from "./TaskForm.svelte";
 import timeStore from './timeStore';

 let tasks = [
     {name: 'Invent electric truck', dueDate: '2022-12-04'},
     {name: 'Invent electric car', dueDate: '2021-11-01'},
 ];
 $: dateAndTime = ($timeStore).toISOString();
 $: today = ($timeStore).toISOString().substring(0, 10)
// let today = (new Date()).toISOString().substring(0, 10)

 function onAdd(evt) {
     const task = evt.detail;
     tasks = [task, ...tasks];
 }
</script>

<main>
    <h1>{appName}</h1>

    <p>
        Date/time: {dateAndTime}
    </p>

    <TaskForm on:submit={onAdd}/>

    <table>
        <thead>
            <th>No.</th>
            <th>Name</th>
            <th>Due</th>
        </thead>
        <tbody>
            {#each tasks as task, i}
            <tr>
                <td>{i + 1}</td>
                <td>{task.name}</td>
                <td>
                    {task.dueDate}
                    {#if task.dueDate < today}
                    OVERDUE!
                    {/if}
                </td>
            </tr>
            {/each}
        </tbody>
    </table>

</main>

<style>

</style>
