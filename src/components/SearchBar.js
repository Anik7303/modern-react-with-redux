import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: "" };
        this.searchRef = React.createRef(null);
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentDidMount() {
        this.searchRef.current.focus();
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
        this.setState({ term: "" });
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <input
                            ref={this.searchRef}
                            type="text"
                            placeholder="Search.."
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
