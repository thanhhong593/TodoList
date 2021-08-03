import classNames from "classnames";
import React, { Component } from "react";
import propTypes from "prop-types";

import "./TodoItem.css";
import checkImg from "../img/check.png";
import unCheckImg from "../img/uncheck.png";
class TodoItem extends Component {
  listSp(url,onClick) {
    if (this.props.hp === 1) {
      return <div className='TodoItem'>
            <img src={url} alt="check " onClick={onClick} />
            <p>{this.props.sp.title}</p>
          </div>;
    }
    if (this.props.hp === 2) {
      let tmp= [];
      let mang = this.props.sp;
      for (const key in mang) {
        console.log(key);
        if (mang.trangthai === false) {
          tmp.push(mang.title);
          console.log(tmp);
          return <div className='TodoItem'>
            <img src={url} alt="check " onClick={onClick} />
            <p>{tmp}</p>
          </div>;
        }
      }
    }
    if (this.props.hp === 3) {
      let mang = this.props.sp;
      let tmp= [];
      for (const i in mang) {
        console.log(i);
        if (mang.trangthai === true) {
          tmp.push(mang.title);
          console.log(tmp);
          
          return <div className='TodoItem'>
            <img src={url} alt="check " onClick={onClick} />
            <p>{tmp}</p>
          </div>;
        }
      }
    }
  }

  render() {
    const { sp, onClick } = this.props;
    let url = checkImg;
    if (!sp.trangthai) {
      url = unCheckImg;
    }
    return (
      <div
        className={classNames("TodoItem", {
          check: sp.trangthai,
        })}
      >
        
         {this.listSp(url,onClick)}
      </div>
    );
  }
}

TodoItem.propTypes = {
  sp: propTypes.shape({
    title: propTypes.string,
    trangthai: propTypes.bool,
  }),
  onClick: propTypes.func,
};
export default TodoItem;
