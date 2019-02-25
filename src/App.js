import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Select from './Select';
import Option from "./Option";

class App extends Component {
  render() {
    return (
    <div className="Container">
      <Select>
        <Option value="select">Dropdown</Option>
        <Option value="delete">Delete</Option>
        <option value="rename">Rename</option>
        <Option value="preview">Preview</Option>
        <Option value="close">Close</Option>
        <Option value="other">Separated link</Option>
      </Select>
    </div>
    );
  }
}

export default App;
