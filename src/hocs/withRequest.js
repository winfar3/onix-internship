import React from 'react';
import Loader from '../components/Loader/Loader';
import SendAxiosRequest from '../helpers/SendAxiosRequest';

function withRequest(Component, apiUrl) {
  class WithRequest extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        requstedData: [],
        isPending: true,
      };
    }

    componentDidMount() {
      this.setState({ isPending: true });
      this.get();
    }
    
    get = () => {
      SendAxiosRequest(apiUrl)
        .then((data) => {
          this.setState({ requstedData: data, isPending: false });
        })
        .catch(() => this.setState({ requstedData: [], isPending: false }));
    };
    
    render() {
      const { requstedData, isPending } = this.state;
      if (isPending) {
        return (
          <Loader />
        );
      }
      if (requstedData.length === 0) {
        return <p className="fz-2">Sorry, cant find posts</p>;
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
