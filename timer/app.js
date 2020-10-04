class App extends React.Component {
    state = {
        time: 0,
        active: false
    }

    handleGoTime = () => {
        if(this.state.active === true) { 
            clearInterval(this.idInterval)
        } else {
       this.idInterval =  setInterval(() => this.addSecond() , 100 )
    }
    this.setState({
        active: !this.state.active
    })
}

    addSecond = () => {
        // const time = (time / 100).toFixed(2)
        this.setState({
            time: this.state.time + 1
        })
    }
    handleResetTime = () => {
        clearInterval(this.idInterval)
        this.setState({
            time:0
        })
    }

  

    render() {
        return(
            <React.Fragment>
                <div className="wrap">
                <h1>Timer!</h1>
                <p>{(this.state.time / 10).toFixed(2)}</p>
        <button onClick = {this.handleGoTime}>{this.state.active ? 'stop' : 'start'}</button>
                <button onClick = {this.handleResetTime}>Reset</button>
                {/* <button onClick = {this.handleStopTime}>stop</button> */}
       
        </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))