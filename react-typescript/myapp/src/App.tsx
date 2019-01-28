import * as React from "react";

// interface IState {
//   count: number;
// }
// interface HelloProps {
//   color: string;
//   size: string;
// }
export interface IProps {
  name: string;
  enthusiasmLevel?: number;
}
class App extends React.Component<IProps,{}> {
    
//   public state = {
// 		count:1
// 	};
  public render(){
		const { name, enthusiasmLevel } = this.props;
		console.log(name);
	 return(
		<div>11111111{name}---{enthusiasmLevel}</div>
	 )
 }
}

export default App;
  
