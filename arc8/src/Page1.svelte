<script>
 import TaskForm from './TaskForm.svelte';  
 import timeStore from './timeStore';
 import {onMount} from 'svelte';
 
 import {tasksStore, readTasks, addTask} from './tasksStore';

 onMount(readTasks);

 $: tasks = $tasksStore.data;
 
 $: loading = $tasksStore.loading;
 
 $: error = $tasksStore.error;

 $: today = ($timeStore).toISOString().substring(0, 10);
 $: dateAndTime = ($timeStore).toISOString();
 
 function onAdd(evt) {

     const task = evt.detail;

     addTask(task);
 }
</script>
<main>
    <h1>Task Application</h1>

    <p>
        Date/time: {dateAndTime}
    </p>
    
    <TaskForm on:submit={onAdd}/>

    {#if (loading)}
    <p>Loading..........</p>
    {:else if (error)}
    <p>ERROR!!!!!!! {error}</p>
    {:else}
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
                    {#if (task.dueDate < today)}
                    OVERDUE!!!
                    {/if}
                </td>
            </tr>
            {/each}
        </tbody>
    </table>
    {/if}
</main>
<style>
 
</style>
