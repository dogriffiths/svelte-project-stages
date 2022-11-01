<script>
 import {createEventDispatcher} from 'svelte';
 import DatePicker from './DatePicker.svelte';
 import timeStore from './timeStore';

 const dispatch = createEventDispatcher();

 let name = "";
 let dueDate;
 $: today = ($timeStore).toISOString().substring(0, 10);
 // let today = (new Date()).toISOString().substring(0, 10)

 $: formDisabled = !name || !dueDate || (dueDate < today);

 function onAdd() {
     dispatch('submit', {      
         name: name,
         dueDate: dueDate,
     });
     name = "";
     dueDate = null;
 }
</script>

<div class="TaskForm">
    <label for="name">Task name:</label>
    <input type="text" id="name" name="name" bind:value={name}/>
    <DatePicker bind:date={dueDate}/>
    <button 
        disabled={formDisabled}
        on:click={onAdd}
    >Add</button>  
</div>

<style>

</style>
