import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions";

const GoogleAuth = (props) => {
    const { isSignedIn, signIn, signOut } = props;
    const authRef = useRef(null);

    useEffect(() => {
        window.gapi.load("auth2", async () => {
            // scope should be changed to 'email profile', if profile information is needed
            await window.gapi.auth2.init({
                client_id: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
                scope: "email",
            });

            authRef.current = window.gapi.auth2.getAuthInstance();
            const onAuthStatusChanged = (status) => {
                if (status) {
                    signIn(authRef.current.currentUser.get().getId());
                } else {
                    signOut();
                }
            };

            onAuthStatusChanged(authRef.current.isSignedIn.get());
            authRef.current.isSignedIn.listen(onAuthStatusChanged);
        });
    }, [signIn, signOut]);

    const onSignInClick = () => {
        authRef.current.signIn();
    };

    const onSignOutClick = () => {
        authRef.current.signOut();
    };

    const renderAuthBtn = () => {
        switch (isSignedIn) {
            case false:
                return (
                    <div className="ui blue google button" onClick={onSignInClick}>
                        <i className="icon google" />
                        Sign in with Google
                    </div>
                );
            case true:
                return (
                    <div className="ui red google button" onClick={onSignOutClick}>
                        <i className="icon google" />
                        Sign Out
                    </div>
                );
            default:
                return null;
        }
    };

    return <div>{renderAuthBtn()}</div>;
};

const mapStateToProps = (state) => ({ isSignedIn: state.auth.isSignedIn });

const mapDispatchToProps = { signIn, signOut };

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
