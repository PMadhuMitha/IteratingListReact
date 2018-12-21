import React,{Component} from 'react';
import DropDownComponent from './DropDownComponent';

export default class DropDownParentComponent extends Component{

    constructor(props) {
        super(props);
      
        this.stateData={
            "USA":[
                {'value':'LA','id':'LA'},
                {'value':'Vegas','id':'Vegas'}
            ],
            "INDIA":[
                {'value':'chennai','id':'chennai'},
                {'value':'Kerala','id':'Kerala'}
            ]

        }
    
        this.countryData = [
            { value: 'USA', name: 'USA' },
            { value: 'INDIA', name: 'INDIA' }            
        ];
    }

    onCountrySelect=(ev)=>{

        let val= ev.target.value;
        this.selectStates(val);
    }

    onStateSelect=(val)=>{

        
        const stateData= this.stateData;
        this.setState=({
            stateData:stateData
        });
        console.log("yu seletced state");
            //         allowed=this.props.val;

//         const filtered = Object.keys(this.stateData)
//   .filter(key => allowed.includes(key))
//   .reduce((obj, key) => {
//     obj[key] = raw[key];
//     return obj;
//   }, {});
    }
    render(){

        return(
            <div>
                Country <DropDownComponent data={this.countryData} onselect={this.onCountrySelect}/>
                States  <DropDownComponent data={this.state.stateData} onselect={this.onStateSelect}/>
                </div>
        );}
}