'use strict'
import React from 'react';
import ReactDom from 'react-dom';
import './style/index.less';
import '../../commons';
class Search extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             Text:()=>{}
        }
    }
    
    render(){
        return <div className='body-div'>
                search
                <div className="body-div-img" onClick={()=>{
                    import ('./text.js').then((text)=>{
                        this.setState({
                            Text:text.default
                        })
                    })
                }}></div>
                刘道
                {this.state.Text()}
        </div>
    }
}

ReactDom.render(<Search/>,document.getElementById('root'))