import React, { Component } from 'react';
import Page from '../pages/Page';
import DataManagement from '../containers/DataManagement';

class DataManagementPage extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Data Management | Agoda React Learning Kit';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'Data Management' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <DataManagement {...this.props} />
      </Page>
    );
  }
}

export default DataManagementPage;

