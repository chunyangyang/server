import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import SimpleSlider from './components/SimpleSlider';
import ModelList from './components/ModelList';
import InfoDisplayTab from './components/InfoDisplayTab';

const { Row, Col } = Grid;

export default class IndexPage extends Component {
  static displayName = 'IndexPage';

  static propTypes = {};

  static defaultProps = {};

  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <Row gutter="20" wrap>
        <Col l="16">
          <SimpleSlider />
          <InfoDisplayTab />
        </Col>
        <Col l="8">
          <ModelList />
        </Col>
      </Row>
    );
  }
}
