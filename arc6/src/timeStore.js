import {readable} from 'svelte/store';

export default readable(
    new Date(),
    function initiator(set) {
        // Some code which calls 'set' every second with the new Date() value


        const interval = setInterval(
            function() {
                set(new Date());        
            },
            1000
        )

        return function stop() {
            clearInterval(interval);
        }
    }
)
