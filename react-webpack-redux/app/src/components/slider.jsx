import React, {Component} from 'react';

class Slider extends Component{
	constructor(props) {
	    super(props);
	    this.state={
	    		clickFlag:false
		}
	}
	clickHappen=(e) => {
		this.setState({
			clickFlag:true
		})
	}
	clickCancel =(e) =>{
		this.setState({
			clickFlag:false
		})
	}
	moveProgess=(e) => {
		if(this.state.clickFlag){
			console.log(this.state.clickFlag);
			//console.log(e.clientX);
			//console.log(e.clientY);
		}
		
	};
	render(){
		return(
			<div className='sco-all'>
				<div className='sco-slider'></div>
				<div className='sco-active'  onMouseMove={this.moveProgess}  onMouseDown={this.clickHappen} onMouseUp={this.clickCancel}>
					<div className='sco-move' style = {{width:'100px'}}></div>
					<div className="sco-move-btn"></div>

				</div>
			</div>
		);
	}
}

export default Slider;