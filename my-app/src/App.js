import React from 'react';
import logo from './logo.svg';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile'
import './App.css';

class App extends React.Component {
  state = {
    value: '美食',
  };
  searchBarStyle = {
    backgroundColor: 'white'
  }
  componentDidMount() {
    //this.autoFocusInst.focus();
  }
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  render() {
    return (<div>
      <SearchBar placeholder="Search" maxLength={8} 
        placeholder="Search"
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onChange={this.onChange}
      />
      <WhiteSpace />
    </div>);
  }
}

export default App;
