const TodoModel = require('../models/todo.model');

const createTodo = async (req, res, next) => {
    try {
        const createdModel = await TodoModel.create(req.body)
    res.status(201).json(createdModel)
    } catch(error) {
        next(error)
    }
    
}

const getTodos = async (req, res, next) => {
    try {
        const allTodos = await TodoModel.find({});
        res.status(200).json(allTodos);
    } catch (error) {
        console.error(error.message);
        next(error);
    }
};
const getTodoById = async (req, res, next) => {
    try { 
    const todoModel = await TodoModel.findById(req.params.todoId)
    if (todoModel) {
        res.status(200).json(todoModel)
    } else {
        res.status(404).send()
    }
} catch(error){
    next(error)
    }
}

const updateTodo = async (req, res, next) => {
  try {
    const updatedTodo = await TodoModel.findByIdAndUpdate(
      req.params.todoId,
      req.body,
      { new: true, useFindAndModify: false }
    );
    if (!updatedTodo) { 
      return res.status(404).send();
    }
    res.status(200).json(updatedTodo); 

  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(404).send();
    }
    next(error);
  }
};



module.exports = {
    createTodo,
    getTodos,
    getTodoById,
    updateTodo
};