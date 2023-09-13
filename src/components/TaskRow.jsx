export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr key={task.name}>
      <td>
        {task.name}
        <input
          className="ml-2"
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  );
};
