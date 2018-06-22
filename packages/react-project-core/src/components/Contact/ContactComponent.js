import React, { Component } from 'react';
import './forms-default.sass';

class Contact extends Component {
  render() {
    return (
      <section className="contact" onSubmit={this.props.onSubmit}>
        <h1>Contact J. Walter Hawkes</h1>
        <form className="entry-form">
          <FormItem
            name="name"
            value={this.props.contact.name}
            placeholder="J. Walter"
            onChange={this.props.onChange}
            required="true"
          />
          <FormItem
            name="subject"
            value={this.props.contact.subject}
            placeholder="Music"
            onChange={this.props.onChange}
            required="true"
          />
          <FormItem
            name="email"
            type="email"
            value={this.props.contact.email}
            placeholder="jwalter@jwalter.com"
            onChange={this.props.onChange}
            required="true"
          />
          <textarea
            className="form-item"
            name="message"
            value={this.props.contact.message}
            onChange={this.props.onChange}
            required="true"
          />
          {this.props.contact.status ? (
            <p className="message">{this.props.contact.status}</p>
          ) : (
            undefined
          )}
          <FormSubmit value="&#xf1d8;" />
        </form>
      </section>
    );
  }
}

export default Contact;

class FormItem extends Component {
  constructor(props) {
    super(props);

    // declare defaults
    this.label = this.props.label || this.props.name;
    this.className = this.concatenateClassNames();
    this.type = this.props.type || 'text';
    this.required = this.props.required || false;
    this.placeholder = this.props.placeholder || undefined;
  }

  componentDidMount() {
    // console.log(this.className)
  }

  concatenateClassNames() {
    let inherited = this.props.className || '';
    if (inherited) return 'form-item ' + inherited;
    else return 'form-item';
  }

  render() {
    return (
      <div className={this.className}>
        <div>{this.label}:</div>
        <input
          type={this.type}
          value={this.props.value}
          name={this.props.name}
          onChange={this.props.onChange}
          required={this.required}
          placeholder={this.placeholder}
        />
      </div>
    );
  }
}

class FormSubmit extends Component {
  constructor(props) {
    super(props);

    this.value = this.props.value || 'save';
    this.type = this.props.type || 'submit';
    this.className = this.props.className || 'form-buttons';
  }

  render() {
    return (
      <div className={this.className}>
        <input type={this.type} value={this.value} />
      </div>
    );
  }
}
