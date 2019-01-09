import React, {Component} from 'react';

class AudioPlayer extends Component{
	constructor(props) {
	    super(props);
	    this.state={

	    }
	}
	render(){
	 let {refAudio, srcAudio} = this.props;
		return(<div>

				<audio 
				onTimeUpdate={() => {}} 
				onCanPlay={() => {
					console.log(222)
				}} 
				ref={(ref) => {
					if(ref)ref.src = 'http://fs.w.kugou.com/201901081616/7b21dc800a58b8c65d8809d0d29a975b/G022/M06/12/03/9pMEAFWKLteAftb0AD8A_yIk33g406.mp3'
				}}
              	src={srcAudio} 
              	controls
              	onLoadedMetadata={() => {
              			console.log(111);
              	}}
              	/>
              	<div >播放</div>
              	<div>
	              	<div>
		              	<span>00:10</span>
		              	<div>播放进度条</div>
		              	<span>12:00</span>
	              	</div>
	              	<div>
	              		<span>图标</span>
	              		<span>音频进度条</span>
	              	</div>
              	</div>

              	{
              	//<a download  target="_blank" href='http://fs.w.kugou.com/201901081616/7b21dc800a58b8c65d8809d0d29a975b/G022/M06/12/03/9pMEAFWKLteAftb0AD8A_yIk33g406.mp3'> 下载 </a>
                }
			</div>);
	}
}

export default  AudioPlayer;

//module.exprots = AudioPlayer;