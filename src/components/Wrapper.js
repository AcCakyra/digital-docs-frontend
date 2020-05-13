import * as React from "react";
import {NavLink, withRouter} from "react-router-dom";

import {
    Site,
    RouterContextProvider,
} from "tabler-react";


type Props = {|
    +children: React.Node,
|};

type subNavItem = {|
    +value: string,
    +to?: string,
    +icon?: string,
    +LinkComponent?: React.ElementType,
    +useExact?: boolean,
|};

type navItem = {|
    +value: string,
    +to?: string,
    +icon?: string,
    +active?: boolean,
    +LinkComponent?: React.ElementType,
    +subItems?: Array<subNavItem>,
    +useExact?: boolean,
|};

const navBarItems: Array<navItem> = [
    {
        value: "Проверить диплом",
        to: "/",
        icon: "home",
        LinkComponent: withRouter(NavLink),
        useExact: true,
    },
];

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
                navProps={{itemsObjects: navBarItems}}
                routerContextComponentType={withRouter(RouterContextProvider)}
                footerProps={{
                    copyright: (
                        <React.Fragment>
                            Copyright © 2020
                            {" "}
                            <a href="https://github.com/BlockTeam4Boys"
                               target="_blank">
                                BlockTeam4Boys
                            </a>{" "}
                            All rights reserved.
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