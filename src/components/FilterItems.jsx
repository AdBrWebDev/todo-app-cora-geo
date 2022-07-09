import React from 'react';

export class FilterItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'all'
        }
    }

    changeSelected = async (e) => {
        this.setState({selected: e.target.value}); 
        //console.log(e.target.value)
        const filter = await this.props.filterItems(this.state.selected);
        return filter;
        }

    render() {
        return(
            <div className="select is-primary w-25">
<select name="filter" onChange={this.changeSelected} id="filter">
  <option value="all">všetky</option>
  <option value="active">aktivne</option>
  <option value="done">Ukončené</option>
</select>
            </div>
        )
    }
}