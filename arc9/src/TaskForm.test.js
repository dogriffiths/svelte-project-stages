import TaskForm from './TaskForm.svelte';
import {render, screen} from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';

describe('TaskForm', () => {
  it('should send me the details of the task when the button is clicked', async () => {
    const {component} = render(TaskForm);

    const onSubmit = jest.fn();
    component.$on("submit", onSubmit);

    const nameField = screen.getByLabelText("Task name:");
    await userEvent.type(nameField, 'Buy a new car');
    const dueDateField = screen.getByLabelText("Date:")
    await userEvent.type(dueDateField, '2023-04-12');

    const addButton = screen.getByRole("button");
    await userEvent.click(addButton);

    expect(onSubmit).toBeCalledWith(
      expect.objectContaining({detail:
        {name: 'Buy a new car', dueDate: '2023-04-12'}
        })
    )
  })
})
