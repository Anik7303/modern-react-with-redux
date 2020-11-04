import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import { StreamCreate, StreamDelete, StreamEdit, StreamList, StreamShow } from "./streams";
import Header from "./Header";

const App = () => {
    return (
        <Fragment>
            <Header />
            <div className="ui container">
                <Switch>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    <Route path="/streams/:id" exact component={StreamShow} />
                </Switch>
            </div>
        </Fragment>
    );
};

export default App;
