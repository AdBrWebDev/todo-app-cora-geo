import React from 'react';

export class FilterItems extends React.Component {
    render() {
        return(
            <div>
                <label for="cars">Filtrovať</label>

<select name="filter" onChange={this.props.filterItems} id="filter">
  <option value="all">všetky</option>
  <option value="active">aktivne</option>
  <option value="done">Ukončené</option>
</select>
            </div>
        )
    }
}