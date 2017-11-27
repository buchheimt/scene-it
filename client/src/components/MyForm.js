import React from 'react';
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class MyForm extends React.Component {

  constructor() {
    super();

    this.state = {
    values: {}
    }
  }

  handleChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value
      }
    })
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({...this.state.values, ...this.props.hiddenValues});
  }

  render() {
    const renderFields = this.props.fields.map((field, index) => (
      <FormControl
        bsSize="small"
        key={index}
        type={field === 'password' ? 'password' : 'text'}
        name={field}
        value={this.state[field]}
        placeholder={field}
        onChange={this.handleChange}
      />
    ))

    return (
      <form onSubmit={this.handleOnSubmit}>
        <FormGroup>
          {renderFields}
          <Button bsSize="small" type="submit">
            {this.props.onSubmitText}
          </Button>
        </FormGroup>
      </form>
    )
  }
}

export default MyForm;
