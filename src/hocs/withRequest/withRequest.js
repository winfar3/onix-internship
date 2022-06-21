import React from 'react';
import ThreeDots from 'react-loading-icons/dist/esm/components/three-dots';
import SendAxiosRequest from '../../hooks/SendAxiosRequest';

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
          <div className="loader">
            <ThreeDots stroke="#06bcee" fill="#06bcee" />
          </div>
        );
      }
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
