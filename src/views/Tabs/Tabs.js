import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import MM from  './MM';
import Disburse from './Disburse';
export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              MM
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Disburse
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Receipt
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              ASN
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              Catalog
            </NavLink>
          </NavItem>
           <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => { this.toggle('6'); }}
            >
              Inventory
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
             <MM></MM>
            </Row>
          </TabPane>
          <TabPane tabId="2">
             <Row>
               <Disburse></Disburse>
             </Row>
          </TabPane>
          <TabPane tabId="3">
              <Col sm="12">
                <h4>Tab 3 Contents</h4>
              </Col>
          </TabPane>
           <TabPane tabId="4">
             <Col sm="12">
                <h4>Tab 4 Contents</h4>
              </Col>
          </TabPane>
            <TabPane tabId="5">
             <Col sm="12">
                <h4>Tab 5 Contents</h4>
              </Col>
          </TabPane>
            <TabPane tabId="6">
             <Col sm="12">
                <h4>Tab 6 Contents</h4>
              </Col>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}