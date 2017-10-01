import React, {Component} from 'react';
import {addTodo} from '../actions';
import Form from '../components/Form';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

// function mapDispatchToProps(dispatch) {
//     return{
//         onAdd: title=>dispatch(addTodo(title))
//     }
// }
const mapDispatchToProps = dispatch =>bindActionCreators({
    onAdd: addTodo
}, dispatch);

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;

