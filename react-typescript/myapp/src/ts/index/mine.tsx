import * as React from "react";
import {
  NavLink 
} from 'react-router-dom';
class Mine extends React.Component<{},{}> {
    
  public state = {
		count:1
	};
  public render(){
		
	 return(
		<div>
			我的界面
			<NavLink to="/detail">进入详情页</NavLink>
		</div>
	 )
 }
}

export default Mine;