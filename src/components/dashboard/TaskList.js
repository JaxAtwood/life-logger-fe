/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useContext } from 'react';
import TaskContext from '../../context/TaskContext';

import Task from './Task';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div
      sx={{
        display: `grid`,
        gridTemplateColumns: [`1fr`, `minmax(auto, 400px)`],
        gridGap: `15px`,
      }}
    >
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;