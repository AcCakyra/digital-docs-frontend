
import * as React from "react";

import {
    Page,
    Avatar,
    Icon,
    Grid,
    Card,
    Text,
    Table,
    Alert,
    Progress,
    colors,
    Dropdown,
    Button,
    StampCard,
    StatsCard,
    ProgressCard,
    Badge,
} from "tabler-react";

import Wrapper from "./Wrapper";

function Home() {
    return (
        <Wrapper>
            <Page.Content title="Dashboard">
                <Grid.Row cards={true}>
                    <Grid.Col width={6} sm={4} lg={2}>
                        <div>Example</div>
                    </Grid.Col>
                </Grid.Row>
            </Page.Content>
        </Wrapper>
    );
}

export default Home;