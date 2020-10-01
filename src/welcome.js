import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class welcome extends Component {

    state = {
        hitung : 0,
        bungkus : 0
    }
    
    addHitung = () => {      
        if (this.state.hitung == "zero") {
            this.setState({
                hitung: 1,
                bungkus : 1
            })
        } else if (this.state.hitung >= 0) {
            this.setState({
                hitung: this.state.hitung +1,
                bungkus: this.state.hitung +1
                
            })
        } 
    }

    addHitung2 = () => { 
        if(this.state.hitung > 1) 
        this.setState({
            hitung: this.state.hitung-1,
            bungkus: this.state.hitung-1
        })
        else if (this.state.hitung == 1) {
            this.setState({
                hitung : "zero",
                bungkus: <button class="btn btn-warning">Yaah Jembot</button>
            })
        }
    }

    
    render() {
        return (
            <div>
                <h1> hitung 1 </h1>
                <h4>{this.state.bungkus}
                <button class="btn btn-primary" onClick={this.addHitung}> Hitung 1</button>
                <button class="btn btn-primary" onClick={this.addHitung2}> Hitung 2</button>
                </h4>
            </div>
        )
    }
}
