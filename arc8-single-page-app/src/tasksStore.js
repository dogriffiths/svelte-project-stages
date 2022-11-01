import {writable} from 'svelte/store';

export const tasksStore = writable({
  data: [],
  loading: false,
  error: null
});

export async function readTasks() {
  tasksStore.set({
    data: [],
    loading: true,
    error: null
  });
  try {
    const response = await fetch("https://svelte-tasks-31ba2.web.app/tasks");
    if (response.ok) {
      const tasks = await response.json();
      tasksStore.set({
        data: tasks,
        loading: false,
        error: null
      });
    } else {
      throw new Error("Error response " + response)
    }
  } catch(err) {
      tasksStore.set({
        data: [],
        loading: false,
        error: "Error: " + err
      });
  }
}

export async function addTask(task) {
  const response = await fetch("https://svelte-tasks-31ba2.web.app/tasks", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  });
  if (response.ok) {
    readTasks();
  }
}
