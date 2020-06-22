import * as React from "react";

import {
    Grid, Card, List, Page, Form,
} from "tabler-react";

import Wrapper from "./Wrapper";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
    }

    componentDidMount(): void {
        this.setState({
            user: JSON.parse(sessionStorage.user)
        })
    }

    render(): React.ReactNode {
        if (!this.state.user) {
            return null;
        }

        return (
            <Wrapper
                email={this.state.user.Email}
                role={this.state.user.Role}>
                <Page.Content>
                    <Grid.Row>
                        <Grid.Col width={12} sm={12} md={7} lg={7}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        ВУЗы партнеры
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <List.Group>
                                        {
                                            Object.values(this.state.user.AllowAccessTo)
                                                .map(function (org) {
                                                        return <List.GroupItem action>{org}</List.GroupItem>
                                                    }
                                                )
                                        }
                                    </List.Group>
                                </Card.Body>
                            </Card>
                        </Grid.Col>
                        <Grid.Col width={12} sm={12} md={5} lg={5}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        Мой ВУЗ
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    {this.state.user.OrganizationName}
                                </Card.Body>
                            </Card>
                        </Grid.Col>
                    </Grid.Row>
                </Page.Content>
            </Wrapper>
        )
    };
}

export default HomePage;
