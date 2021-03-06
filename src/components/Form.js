import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
     state = {
        title: ''
    };
    handleSubmit=(event)=> {
        event.preventDefault();
        const title = this.state.title;
        if (title) {
            this.props.onAdd(title);
            this.setState({ title: '' });
        }
    };
    handleChange=(event)=> {
        const title = event.target.value;
        this.setState({ title });

    };

    render() {
        return (
            <form className="todo-add-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.title}
                    placeholder="What needs to be done?"
                    onChange={this.handleChange} />

                <button type="submit">Add Todo</button>
            </form>
        );
    }
}

Form.propTypes = {
    onAdd: PropTypes.func.isRequired
};
export default Form;
