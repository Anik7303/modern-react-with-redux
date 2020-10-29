import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    constructor(props) {
        super(props);
        this.onFromSubmit = this.onFromSubmit.bind(this);
        this.searchRef = React.createRef(null);
    }

    onFromSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
        this.setState({ term: "" });
    }

    componentDidMount() {
        this.searchRef.current.focus();
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFromSubmit}>
                    <div className="field">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                            ref={this.searchRef}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
