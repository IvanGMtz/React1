export const VisibilityControl = ({ isChecked, setshowCompleted, cleanTasks}) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure want to delete it ?')) {
      cleanTasks()
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked= {isChecked}
        onChange={(e) => setshowCompleted(e.target.checked)}
      />{' '}
      <label>Show Tasks Done</label>

      <button onClick={handleDelete}>Clear</button>
    </div>
  );
};
