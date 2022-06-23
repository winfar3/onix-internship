import React from 'react';

function withModal(Component) {
  class WithModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isVisible: false,
      };
    }

    handleVisibleModal = () => {
      this.setState(({ isVisible }) => ({ isVisible: !isVisible }));
    };

    render() {
      /* eslint-disable react/jsx-props-no-spreading */
      return <Component handleVisibleModal={this.handleVisibleModal} {...this.props} />;
    }
  }

  WithModal.displayName = `WithModal(${Component.displayName || Component.name || 'Component'})`;

  return WithModal;
}

export default withModal;
