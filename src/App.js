import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        value:'',
        list: [
            {
                id:'lzzdokozkdod',
                description: 'Manger son petit dejeuner',
                isDone: true,
                isArchived: false,
            },
            {
                id:'oazkdoakzd',
                description: 'Kiffer la vie',
                isDone: false,
                isArchived: false,
            }
        ],
      };
  }

  onRemoveItem = id => {
    this.setState(state => {
      const list = state.list.filter(item => item.id !== id);

      return {
        list,
      };
    });
  };

  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };

  onAddItem = () => {
    this.setState(state => {
        
        const charSet = [
            'A','B','C','D','E','F','G','H','J','K','M','N','P','Q',
            'R','S','T','U','V','W','X','Y','Z',
          ]  
        const numberSet = ['2', '3', '4', '5', '6', '7', '8', '9']
        function generateCode() {
            function randomItem(possibilities) {
              return possibilities[Math.trunc(Math.random() * possibilities.length)]
            }
            let codeTemp = ''
            for (let i = 0; i < 6; i++) {
              codeTemp += randomItem(charSet)
            }
            for (let i = 0; i < 2; i++) {
              codeTemp += randomItem(numberSet)
            }
            return codeTemp
          }
          
        function createCode() {
            const code = generateCode()
            if (state.list.filter(item => item.id === code).length > 0 ) {
                return createCode()
            } else {
                return code
            }
        }
        
     const element = {description:state.value, id:createCode(), isArchived:false, isDone:false}
    
     const list = [element, ...state.list];
      return {
        list,
        value: '',
      };
    });
  };

  render() {
    return (
      <div>
        <ul>
        {this.state.list.map(item => (
            <li key={item.id} id={item.id}>
               {item.description}.
              <button
                type="button"
                onClick={() => this.onRemoveItem(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <input
          type="text"
          value={this.state.value}
          onChange={this.onChangeValue}
        />
        <button
          type="button"
          onClick={this.onAddItem}
          disabled={!this.state.value}
        >
          Add
        </button>
      </div>
    );
  }
}


export default App;