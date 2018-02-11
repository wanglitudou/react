import React,{Component} from "react"
import Dialog from "../component/dialog"
class Home extends Component{
    constructor(){
        super()
        this.tips=this.tips.bind(this)
    }
    tips(){
        console.log(this.refs)
        this.refs.dialog.show()
    }
    render(){
        return <div className="home">
              <div>6666</div>
               
              </div>
    }
}

export default Home;