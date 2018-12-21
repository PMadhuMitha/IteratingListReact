import React,{Component} from 'react';

export default class DropDownComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            countryData:[],
            dropValue:""
            
    }

    
    }

   render(){


        var dropValue=this.countryData.map((json,i)=>{
            return <option value={json.value}>{json.name}</option>
        })
        return(
            <div>
                <select id="dropDown" >
                   {dropValue}
                   </select>
                </div>

        );
    }
}