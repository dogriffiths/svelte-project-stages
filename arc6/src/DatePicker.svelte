<script>
 export let date;
 import timeStore from './timeStore';

 $: today = ($timeStore).toISOString().substring(0, 10)
     // let today = (new Date()).toISOString().substring(0, 10)
 let today = (new Date()).toISOString().substring(0, 10);
 
</script>

<div class="DatePicker">
    <label for="theDate">Date:</label>
    <input type="date" id="theDate" bind:value={date}/>
    {#if (date < today)}

    <div class="error">
        BEFORE TODAY!!!!!
    </div>

    {:else}

    <p>It's fine...</p>
    
    {/if}
</div>

<style>
 .error {
     color: red;
     margin-top: -8px;
     margin-bottom: 8px;
 }
</style>
