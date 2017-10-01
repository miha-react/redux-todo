import React from 'react';
import List from '../components/List';
import {deleteTodo, toggleTodo, editTodo} from '../actions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
    return{
        todos: state
   }
}
// function mapDispatchToProps(dispatch) {
//     return{
//         onDelete: (id)=> dispatch(deleteTodo(id)),
//         onToggle: (id)=>dispatch(toggleTodo(id)),
//         onEdit: (id, title)=>dispatch(editTodo(id, title))
//
//     }
// }
const mapDispatchToProps = dispatch => bindActionCreators({
    onDelete: deleteTodo,
    onToggle: toggleTodo,
    onEdit: editTodo
}, dispatch);

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;

