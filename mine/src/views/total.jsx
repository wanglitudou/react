import React, { Component } from "react"
import * as router from 'react-router-dom'
const { BrowserRouter, Link, Route, NavLink } = router;
import '../css/style.css';

class Total extends Component {
    constructor() {
        super()
        this.tips = this.tips.bind(this)
    }
    tips() {
        console.log(this.refs)
    }
    render() {
        return (
            <div className="box">
                <header className="headers">
                    <span className="left">
                        <i className="iconfont">&#xe679;</i>
                    </span>
                    <span className="cent">基本信息</span>
                </header>
                <section className="sections">
                    <div className="list">
                        <div className="list_img">
                        
                       
                        <span className="list_bg">
                            <NavLink to="/produc">
                                <button className="begin" onClick={this.go_next}>开始</button>
                            </NavLink>

                        </span>
                        </div>

                    </div>

                </section>


            </div>
        )

    }
}

export default Total;