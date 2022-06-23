import React from 'react';
import Loader from '../components/Loader/Loader';
import SendAxiosRequest from '../helpers/SendAxiosRequest';

function withRequest(Component, apiUrl) {
  class WithRequest extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        requstedData: [],
        isPanding: true,
      };
    }

    componentDidMount() {
      this.setState({ isPanding: true });
      this.get();
    }
    
    get = () => {
      SendAxiosRequest(apiUrl).then((data) => {
        this.setState({ requstedData: data, isPanding: false });
      });
    };
    
    render() {
      const { requstedData, isPanding } = this.state;
      if (isPanding) {
        return (
          <Loader />
        );
      }
      /* eslint-disable react/jsx-props-no-spreading */
      return <Component dataFromServer={requstedData} {...this.props} />;
    }
  }

  WithRequest.displayName = `WithRequest(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WithRequest;
}

export default withRequest;
