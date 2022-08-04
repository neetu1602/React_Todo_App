//this is complete
import React, { Component } from 'react'

class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props  
        
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit} style={{display: 'flex'}}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-info text-white">
                            <i className="fas fa-book" />
                            </div>
                        
                            </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Add Todo..."
                            value={item}
                            onChange={handleChange}
                            style={{flex: '10', padding: '5px'}}
                        />
                    
                    </div>
                    <button 
                        type="submit"
                        className={`btn btn-block mt-3 ${editItem ? 'btn-success' : 'btn-info'}`}
                        style={{flex: '1'}}
                   >
                        {editItem ? 'Edit task' : 'Add'}
                    </button>
                   
                    
                </form>
            </div>
        )
    }
}

export default TodoInput;
