import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
    state = {
            editing: false
        };

    handleSubmit = (event) => {
        event.preventDefault();
        const title = this.refs.title.value;
        this.props.onEdit(this.props.id, title);
        this.setState({ editing: false });
    };

    handleDelete = () => {
        this.props.onDelete(this.props.id);
    };

    handleToggle = () => {
        this.props.onToggle(this.props.id);
    };

    handleEdit = () => {
        this.setState({ editing: true });
    };

    renderDisplay() {
      return (
            <div className='todo'>
                <input type="checkbox" checked={this.props.completed} onChange={this.handleToggle}/>
                <span className="todo-title">{this.props.title}</span>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>

            </div>
        );
    }

    renderForm() {
        return (
            <form className="todo-edit-form" onSubmit={this.handleSubmit}>
                <input type="text" ref={(title)=>this.title = title} defaultValue={this.props.title} />
                <button type="submit">Save</button>
            </form>
        );
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default Todo;