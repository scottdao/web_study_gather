'use strict'
import React from 'react';
import ReactDom from 'react-dom';
import './style/index.less';
import '../../commons'
// import Dog from'./imgs/dog.png';
class Search extends React.Component{
    render(){
        // debugger;
       // a = 0;
        return <div className='body-div'>
                search
                <div className="body-div-img"></div>
                刘道
                { 
                    // <img src={Dog} />
                }
        </div>
    }
}

ReactDom.render(<Search/>,document.getElementById('root'))