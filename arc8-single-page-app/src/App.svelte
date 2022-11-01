<script>
 import {Route} from 'tinro';
 import Page1 from './Page1.svelte';
 import Page2 from './Page2.svelte';
</script>

<nav>
    <a href="/">Page 1</a>
    <a href="/page2">Page 2</a>
</nav>

<Route path="/"><Page1/></Route>

<Route path="/page2"><Page2/></Route>
