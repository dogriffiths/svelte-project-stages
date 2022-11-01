import App from './App.svelte';

const app = new App({
//	target: document.body,
        target: document.getElementById('task-widget'),
	props: {
		appName: 'Task Widget'
	}
});

export default app;
