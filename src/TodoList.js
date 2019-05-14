import React, { Fragment } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as TodoActions from "./store/actions/todos";

const TodoList = ({ todos, addTodo, removeTodo }) => {
  return (
    <Fragment>
      <ul>
        {todos.map(todo => (
          <div>
            <li key={todo.id}>{todo.text}</li>
            <button onClick={() => removeTodo(todo.id)}>remover</button>
          </div>
        ))}
      </ul>
      <button onClick={() => addTodo("novo todo")}>Adicionar</button>
    </Fragment>
  );
};

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
