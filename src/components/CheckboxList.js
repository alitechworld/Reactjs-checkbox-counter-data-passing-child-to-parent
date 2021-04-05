import React from 'react';

class CheckboxList extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        checkboxes: [
          { value: "checkbox1", Checked: false },
          { value: "checkbox2", Checked: false },
          { value: "checkbox3", Checked: false },
          { value: "checkbox4", Checked: false },
          { value: "checkbox5", Checked: false }
        ]      
      }
    }
  
    handleCheckedCheckboxes = (event) => {
      let checkboxes = this.state.checkboxes
  
      checkboxes.forEach(checkbox => {
         if (checkbox.value === event.target.value)
         checkbox.Checked = event.target.checked
      })
      
      this.setState({checkboxes: checkboxes});

      this.props.sendData(checkboxes.filter(chk => chk.Checked).length);
    }

    render() {
      return (         
        <div>
            <h5><u>Select checkboxes to get selected count</u></h5>
            {
                this.state.checkboxes.map((checkbox, index) => {              
                    return (
                        <div key={index}>                   
                            <input 
                                type="checkbox"
                                value={checkbox.value} 
                                onClick={this.handleCheckedCheckboxes}                  
                                checked={checkbox.Checked} 
                                onChange={() => {}}
                            /> 
                            {checkbox.value}
                        </div>
                    )
                })
            }
        </div>
      );
    }
  }
    
export default CheckboxList;