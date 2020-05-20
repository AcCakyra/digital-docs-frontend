import * as React from "react";
import {NavLink, withRouter} from "react-router-dom";

import {
    Site, RouterContextProvider, Grid,
} from "tabler-react";

type Props = {|
    +children: React.Node,
|};

const accountDropdownProps = {
    name: "Евгений Митикари",
    description: "Описание роли челика",
    options: [
        {icon: "log-out", value: "Выйти"},
    ],
};

class Wrapper extends React.Component<Props> {

    render(): React.Node {
        return (
            <Site.Wrapper
                headerProps={{
                    href: "/",
                    alt: "Digital docs",
                    imageURL: "./images/tusur_logo.png",
                    accountDropdown: accountDropdownProps,
                }}
                navProps={{
                    itemsObjects: [
                        {
                            value: "Проверить диплом",
                            to: "/",
                            icon: "check",
                            LinkComponent: withRouter(NavLink),
                            useExact: true,
                        },
                        {
                            value: "Мой ВУЗ",
                            to: "/admin",
                            icon: "home",
                            LinkComponent: withRouter(NavLink),
                            useExact: true,
                        },
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