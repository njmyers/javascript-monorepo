// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
  modalRoot: string,
  children?: React.Node,
};

type ModalState = {
  modalRoot: HTMLElement | null,
  aside: HTMLElement | null,
};

class Modal extends React.PureComponent<ModalProps, ModalState> {
  static defaultProps = {
    modalRoot: 'modal-root',
  };

  state = {
    modalRoot: null, // HTMLElement | null;
    aside: null,
  };

  componentDidMount() {
    this.setState((state) => ({
      modalRoot: document.getElementById(this.props.modalRoot),
      aside: document.createElement('aside'),
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.modalRoot && this.state.modalRoot && this.state.aside) {
      this.state.modalRoot.appendChild(this.state.aside);
    }
  }

  componentWillUnmount() {
    if (this.state.modalRoot)
      this.state.modalRoot.removeChild(this.state.aside);
  }

  /**
   * TODO consider rendering this.props.children if the portal is not availble
   * Better support for SSR?
   * @return {[type]} [description]
   */
  render() {
    return this.state.aside
      ? ReactDOM.createPortal(this.props.children, this.state.aside)
      : null;
  }
}

type StyledProps = {
  style: {},
  replaceStyle: {},
  onState: {},
  offState: {},
  className: string,
  children?: React.Node,
  transitionSpeed: number,
  transitionTiming:
    | 'ease'
    | 'linear'
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out'
    | 'step-start'
    | 'step-end',
  zIndexOn: number,
  zIndexOff: number,
  status: 'on' | 'off',
};

type StyledState = {
  zIndex: number,
};

class Styled extends React.Component<StyledProps, StyledState> {
  static defaultProps = {
    style: {
      background: 'rgba(255, 255, 255, 0.8)',
    },
    replaceStyle: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    offState: {
      opacity: 0,
    },
    onState: {
      opacity: 1,
    },
    zIndexOff: -20,
    zIndexOn: 1,
    transitionSpeed: 0.25,
    transitionTiming: 'ease',
    status: 'off',
  };

  state = {
    zIndex: this.props.zIndexOff,
  };

  getTransitionString = () => {
    const { onState } = this.props;
    const { transitionSpeed, transitionTiming } = this.props;

    return Object.keys(onState)
      .map((key: string) => `${transitionSpeed}s ${transitionTiming} ${key}`)
      .reduce((a, b) => `${a},${b}`);
  };

  transition = this.getTransitionString();

  // shallow merge
  style = () => ({
    zIndex: this.state.zIndex,
    transition: this.transition,
    ...(this.props.status === 'on' ? this.props.onState : this.props.offState),
    ...this.props.replaceStyle,
    ...this.props.style,
  });

  zIndexOut = () => {
    this.setState({
      zIndex: this.props.zIndexOff,
    });
  };

  static getDerivedStateFromProps(props, state) {
    if (props.status !== state.status && props.status === 'on')
      return { zIndex: props.zIndexOn };
    else return null;
  }

  /**
   * Auto calculate transition time so zIndex is set after transisition
   * @param  {[type]} prevProps [description]
   * @return {[type]}           [description]
   */
  componentDidUpdate(prevProps) {
    if (prevProps.status === 'on' && this.props.status === 'off') {
      setTimeout(this.zIndexOut, this.props.transitionSpeed * 1000);
    }
  }

  render() {
    return (
      <div style={this.style()} className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

class StyledModal extends React.PureComponent<StyledProps & ModalProps> {
  render() {
    return (
      <Modal {...this.props}>
        <Styled {...this.props}>{this.props.children}</Styled>
      </Modal>
    );
  }
}

export { Modal as UnstyledModal };
export default StyledModal;
