import React from 'react';
import CheckboxList from './CheckboxList';

class CheckboxCheckedCount extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          checkedCount: "0"   
        }
    }

    getDataFromChild = (dataFromChild) => {
        this.setState({checkedCount: dataFromChild});
    }

    render() {
        return(
        <div>
            {/* Parent */}
            <h4>Total Checkbox Checked Count: {this.state.checkedCount}</h4> 
            <hr />
            {/* Child */}
            <CheckboxList sendData={this.getDataFromChild} />
        </div>
        );
    };
};

export default CheckboxCheckedCount;