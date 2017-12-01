import React from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

class MyForm extends React.Component {

  constructor(props) {
    super(props);

    const valuesInitial = this.props.fields.reduce((output, field) => {
      output[field.varName] = "";
      return output
    }, {});
    this.state = {
      validValues: false,
      values: valuesInitial
    }
  }

  handleChange = e => {
    const values = {...this.state.values, [e.target.name]: e.target.value};
    const anyEmptyFields = this.props.fields.map(field => !!values[field.varName]).includes(false);
    this.setState({
      validValues: !anyEmptyFields,
      values
    });
  }

  handleOnSubmit = e => {
    e.preventDefault();
    const anyEmptyFields = this.props.fields.map(field => !!this.state.values[field.varName]).includes(false);
    if (!anyEmptyFields) {
      this.props.onSubmit({...this.state.values, ...this.props.hiddenValues});
      const valuesReset = this.props.fields.reduce((output, field) => {
        output[field.varName] = "";
        return output
      }, {});
      this.setState({
        validValues: false,
        values: valuesReset
      });
    }
  }

  render() {
    const renderFields = this.props.fields.map((field, index) => (
      <FormControl
        componentClass={field.type ? field.type : 'input'}
        bsSize="small"
        key={index}
        type={field.varName === 'password' ? 'password' : 'text'}
        name={field.varName}
        value={this.state.values[field.varName]}
        placeholder={field.display}
        onChange={this.handleChange}
      />
    ))

    return (
      <form onSubmit={this.handleOnSubmit}>
        <FormGroup>
          {renderFields}
          <br/>
          <Button bsSize="small" type="submit" className="center-button text-center" disabled={!this.state.validValues}>
            {this.props.onSubmitText}
          </Button>
        </FormGroup>
      </form>
    )
  }
}

export default MyForm;
