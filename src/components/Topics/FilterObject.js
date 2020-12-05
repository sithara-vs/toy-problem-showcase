import React,{Component} from 'react';

export default class FilterObject extends Component {
    constructor(){
        super()
        this.state={
            family :[ 
                {
                    name : 'Sithara',
                    age : 29,
                    role: 'Mother'

        },
        {
            name : 'Sajish',
                    age : 34,
                    role: 'Father'


        },
        {
            name : 'Advaith',
                    age : 5,
                    role: 'Son'
        },
        {
            name: 'Aarnav',
            role: 'brother'
        },
        {
            name: 'Avyukth',
            role: 'brother'
        }


    ],
    userInput : '',
    filteredFamilies: []

        }
    }

    handleChange(val)
    {
        this.setState({userInput:val});
    }

    filterFamily(prop) {

        let family = this.state.family;
    let filteredFamily = [];

    for ( let i = 0; i < family.length; i++ ) {
      if ( family[i].hasOwnProperty(prop) ) {
        filteredFamily.push(family[i]);
      }
    }
 this.setState({filteredFamily : filteredFamily})

    }
    render(){
        return(
            
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.family, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.filterFamily(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredFamily, null, 10) } </span>
            </div>
        )
    }
}
