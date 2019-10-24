
import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { withRouter } from 'react-router';
// ---- Import Semantic UI React ---- //
import { Header, Icon, Image, Menu, Segment, Sidebar, Button } from 'semantic-ui-react'
// import { useBooleanKnob } from '@stardust-ui/docs-components'

class SideBar extends Component {
    // const[visible, setVisible] = useBooleanKnob({ name: 'visible' })
    state = {
        visable: false
    }

    render() {
        return (
            <div>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        icon='labeled'
                        inverted
                        onHide={() => this.setState({visable: false})}
                        vertical
                        visible={this.state.visable}
                        width='thin'
                    >
                        <Menu.Item as='a'>
                            <Icon name='home' />
                            Home
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='gamepad' />
                            Games
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='camera' />
                            Channels
                        </Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={this.state.visable}>
                        <Segment basic>
                            <Header as='p'>Application Content</Header>
                            <Image src='/images/wireframe/paragraph.png' />
                            <Button className="ui button" onClick={()=>{this.setState({visable: true})}}>
                                PUSH@!!!
                            </Button>
                        </Segment>
                    </Sidebar.Pusher>
            </div>

        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(SideBar));
