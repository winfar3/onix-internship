import React from 'react';
import SendAxiosRequest from '../../database/SendAxiosRequest';

function withRequest(Component, apiUrl) {
  class WithRequest extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        requstedData: [],
      };
    }

    componentDidMount() {
      this.get();
    }

    get = () => {
      SendAxiosRequest(apiUrl)
        .then((data) => this.setState({ requstedData: data }));
    };

    render() {
      const { requstedData } = this.state;
      /* eslint-disable react/jsx-props-no-spreading */
      return <Component dataFromServer={requstedData} {...this.porps} />;
    }
  }

  WithRequest.displayName = `WithRequest(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WithRequest;
}

export default withRequest;
