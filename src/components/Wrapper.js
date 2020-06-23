import * as React from "react";
import {NavLink, withRouter} from "react-router-dom";

import {
    Site, RouterContextProvider, Grid,
} from "tabler-react";
import AuthenticationService from "../services/AuthenticationService";

type Props = {|
    +children: React.Node,
|};

class Wrapper extends React.Component<Props> {

    logout = () => {
        return AuthenticationService.logout();
    }

    render(): React.Node {
        return (
            <Site.Wrapper
                headerProps={{
                    href: "/",
                    alt: "Digital docs",
                    imageURL: "./images/tusur_logo.png",
                    accountDropdown: {
                        name: this.props.email + " | " +  this.props.organization,
                        description: this.props.role,
                        options: [
                            {icon: "log-out", value: "Выйти", onClick: this.logout},
                        ],
                    },
                }}
                navProps={{
                    itemsObjects: [
                        {
                            value: "Кабинет",
                            to: "/",
                            icon: "home",
                            LinkComponent: withRouter(NavLink),
                            useExact: true,
                        },
                        {
                            value: "Документы",
                            to: "/document",
                            icon: "file",
                            LinkComponent: withRouter(NavLink),
                            useExact: true,
                        }
                    ]
                }}
                routerContextComponentType={withRouter(RouterContextProvider)}
                footerProps={{
                    copyright: (
                        <React.Fragment>
                            Copyright © {new Date().getFullYear()}
                            {" "}
                            All rights reserved.
                        </React.Fragment>
                    ),
                    nav: (
                        <React.Fragment>
                            <Grid.Col auto={true}>
                                Created by
                                {" "}
                                <a href="https://github.com/BlockTeam4Boys"
                                   rel="noopener noreferrer"
                                   target="_blank">
                                    BlockTeam4Boys
                                </a>
                            </Grid.Col>
                        </React.Fragment>
                    ),
                }}
            >
                {this.props.children}
            </Site.Wrapper>
        );
    }
}

export default Wrapper;