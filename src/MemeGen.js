import React, { Component } from 'react';
import './MemeGen.css';
import Memecard from './Memecard';




export default class MemeGen extends Component {

    

    constructor(props){
        super(props);
        this.state={
            top: '',
            bottom: '',
            img: '',
            memeinfo: []
        };
    }

    

    componentDidMount(){

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://api.imgflip.com/get_memes", requestOptions)
            .then(response => response.json())
            .then(result => {
                // const {memes} =result.data;
                this.setState({memeinfo: result.data.memes });
                console.log(this.state.memeinfo)
            })
            .catch(error => console.log('error', error));

    }
     
    

    render() {
       
        return(
            
            <div>
                {this.state.memeinfo.map((meme) => {
                    return(
                        <div>
                             <Memecard memes={meme}/>
                        </div>
                    )
                })
                }
            </div>
           
        )
              

           
        
    }
}
