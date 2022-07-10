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
        const filter = await this.props.filterItems(e.target.value);
        return filter;
        }

    render() {
        return(
            <select className="form-select w-25 mx-auto" value={this.state.selected} name="filter" onChange={this.changeSelected} id="filter">
                <option value="all">všetky</option>
                <option value="active">aktivne</option>
                <option value="done">Ukončené</option>
            </select>
        )
    }
}