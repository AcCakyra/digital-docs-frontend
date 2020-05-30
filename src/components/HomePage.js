import * as React from "react";

import {
    Grid, Card, List, Page,
} from "tabler-react";

import Wrapper from "./Wrapper";
import UserService from "../services/UserService";

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
        if (!this.state.user || this.state.user.Role !== 'Admin') {
            return null;
        }

        return (
            <Wrapper>
                <Page.Content>
                    <Grid.Row cards={true}>
                        <Grid.Col width={12} sm={12} md={7} lg={7}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        ВУЗы партнеры
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <List.Group>
                                        <List.GroupItem action>
                                            ТПУ
                                        </List.GroupItem>
                                        <List.GroupItem action>ТГУ</List.GroupItem>
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
                                    ТУСУР
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
