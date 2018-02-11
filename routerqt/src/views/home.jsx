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
     
                <h2 onClick={this.tips}>halou</h2>
                <Dialog ref="dialog"> </Dialog>

              </div>
    }
}

export default Home;