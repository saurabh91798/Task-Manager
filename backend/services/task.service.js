const taskModel = require("../models/task.model");


class TaskService {
  find = async () => {
    const tasks = await taskModel.find({});
    return tasks;
  };

  create = async (body) => {
    const task = new taskModel(body);
    const savedTask = await task.save();
    return savedTask;
  };

  update = async (id, body) => {
    const updatedTask = await taskModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    return updatedTask;
  };

  delete = async (id) => {
    const deletedTask = await taskModel.findByIdAndDelete(id);
    return deletedTask;
  };
}

module.exports = TaskService;