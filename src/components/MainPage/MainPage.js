import React from "react";
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({

});

class MainPage extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <div>
                hi
            </div>
        )
    }
}

export default withStyles(styles)(MainPage);
