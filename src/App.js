// import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import { Button } from 'reactstrap';
import TodoItem from "./component/TodoItem";
import tick from "./img/tick.png";

const all = 1;
const active = 2;
const completed = 3;
class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      hanhDong: all,
      listItem: [
        { title: "mua trung", trangthai: true },
        { title: "da banh", trangthai: false },
        { title: "O to", trangthai: false },
      ],
    };
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  hanhDongKhac(hanhDong) {
    if (hanhDong === all) {
      console.log(hanhDong);
      return this.setState({
        hanhDong: all,
      });
    }
    if (hanhDong === active) {
      console.log(hanhDong);
      return this.setState({
        hanhDong: active,
      });
    }
    if (hanhDong === completed) {
      return this.setState({
        hanhDong: completed,
      });
    }
  }
  onClickItem(item) {
    return (event) => {
      const isComplete = item.trangthai;
      console.log(isComplete);
      const { listItem } = this.state;
      const index = listItem.indexOf(item);

      this.setState({
        listItem: [
          ...listItem.slice(0, index),
          {
            ...item,
            trangthai: !isComplete,
          },
          ...listItem.slice(index + 1),
        ],
      });
    };
  }

  onKeyDown(event) {
    let text = event.target.value;
    if (event.keyCode === 13) {
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }
      this.setState({
        newItem: "",
        listItem: [
          {
            title: text,
            trangthai: false,
          },
          ...this.state.listItem,
        ],
      });
    }
  }
  onChange(event) {
    this.setState({
      newItem: event.target.value,
    });
  }
  tinhItem(hp){
    if(hp===all){
      console.log("all"+this.state.listItem.length);
      return this.state.listItem.length;
    }
    if(hp===active){
      let arr= this.state.listItem.filter(sp=>sp.trangthai===false);
      console.log("active"+arr.length);
      return arr.length;
    }
    if(hp===completed){
      let arr= this.state.listItem.filter(sp=>sp.trangthai===true);
      console.log("completed  "+arr.length);
      return arr.length;
    }
  }
  render() {
    let icon = tick;

    return (
      <div className="App">
        <div className="header">
          <img src={icon} width={30} alt="icon" />
          <input
            type="text"
            name="inputSP"
            placeholder="What need to be done?"
            value={this.state.newItem}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
          />
        </div>
        {this.state.listItem.length > 0 &&
          this.state.listItem.map((item, index) => (
            <TodoItem
              key={index}
              sp={item}
              hp={this.state.hanhDong}
              onClick={this.onClickItem(item)}
            />
          ))}
        <div className="footer">
          <span>{this.tinhItem(this.state.hanhDong)} item.elt</span>
          <span onClick={() => this.hanhDongKhac(all)}>All</span>
          <span onClick={() => this.hanhDongKhac(active)}>active</span>
          <span onClick={() => this.hanhDongKhac(completed)}>Completed</span>
        </div>
        <Button color="primary">primary</Button>{' '}
      <Button color="secondary">secondary</Button>{' '}
      </div>
    );
  }
}

export default App;
