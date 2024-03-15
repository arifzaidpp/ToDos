import './App.css';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import {BsCheckLg} from 'react-icons/bs';

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input
              type="text"
              
              placeholder="What's the task title?"
            />
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input
              type="text"
              placeholder="What's the task description?"
            />
          </div>
          <div className="todo-input-item">
            <button
              type="button"
              className="primaryBtn"
            >
              Add
            </button>
          </div>
        </div>

        <div className="btn-area">
          <button
            className={`secondaryBtn 'active'}`}
          >
            Todo
          </button>
          <button
            className={`secondaryBtn 'active'}`}
          >
            Completed
          </button>
        </div>

        <div className="todo-list">

          
                  <div className='edit__wrapper' >
                  <input placeholder='Updated Title' />
                  <textarea placeholder='Updated Title' />
                   <button
              type="button"
              className="primaryBtn"
            >
              Update
            </button>
              </div> 
                 
                  <div className="todo-list-item">
                    <div>
                      <h3>{}</h3>
                      <p>{}</p>
                    </div>
  
                    <div>
                      <AiOutlineDelete
                        className="icon"
                        title="Delete?"
                      />
                      <BsCheckLg
                        className="check-icon"
                        title="Complete?"
                      />
                      <AiOutlineEdit  className="check-icon"
                        title="Edit?" />
                    </div>
  
                  </div>

          
                <div className="todo-list-item" >
                  <div>
                    <h3>{}</h3>
                    <p>{}</p>
                    <p><small>Completed on: {}</small></p>
                  </div>

                  <div>
                    <AiOutlineDelete
                      className="icon"
                      title="Delete?"
                    />
                  </div>

                </div>

        </div>
      </div>
    </div>
  );
}

export default App;
