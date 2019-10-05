
import * as React from 'react';
import Modal from './ModalUnstyled';
import createTransitionStyle from '../utils/create-transition-style';

export type ModalProps = {
  /** div id where to render the react portal */
  modalRoot: string,
  /** react children (your component) */
  children?: React.Node,
};

type AnimationProps = {
  /** className applied to the container element */
  className?: string,
  /** css inline styles applied to the on state */
  onState: {},
  /** css inline styles applied to the off state */
  offState: {},
  /** completely replace all styles */
  replaceStyle: {},
  /** shallowly merge styles */
  style?: {},
  /** the speed of the transition */
  transitionSpeed: number,
  /** the transition timing function */
  transitionTiming:
    | 'ease'
    | 'linear'
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out'
    | 'step-start'
    | 'step-end',
};

type OtherProps = {
  /** react children (your component) */
  children?: React.Node,
  /** z-index of the modal when on */
  zIndexOn: number,
  /** z-index of the modal when off */
  zIndexOff: number,
  /** display status of the styled modal */
  status: 'on' | 'off',
};

type StyledProps = AnimationProps & OtherProps & ModalProps;

type StyledState = {
  zIndex: number,
  status: 'on' | 'off',
};

class StyledModal extends React.Component<StyledProps, StyledState> {
  static defaultProps = {
    style: {},
    replaceStyle: {
      background: 'rgba(255, 255, 255, 0.8)',
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
    modalRoot: 'modal-root',
  };

  state = {
    zIndex: this.props.zIndexOff,
    status: this.props.status,
  };

  // shallow merge
  style = () => ({
    ...createTransitionStyle(this.props),
    zIndex: this.state.zIndex,
    ...(this.state.status === 'on' ? this.props.onState : this.props.offState),
    ...this.props.replaceStyle,
    ...this.props.style,
  });

  /** This is for z-index out */
  zIndexOut = () => {
    this.setState({
      zIndex: this.props.zIndexOff,
    });
  };

  /** This is for z-index in */
  static getDerivedStateFromProps(props: StyledProps, state: StyledState) {
    if (props.status !== state.status) {
      if (props.status === 'on') {
        return {
          zIndex: props.zIndexOn,
          status: props.status,
        };
      } else return { status: props.status };
    } else return null;
  }

  /** Auto calculate transition time so zIndex is set after transisition */
  componentDidUpdate(prevProps: StyledProps) {
    if (prevProps.status === 'on' && this.props.status === 'off') {
      setTimeout(this.zIndexOut, this.props.transitionSpeed * 1000);
    }
  }

  render() {
    return (
      <Modal {...this.props}>
        <div style={this.style()} className={this.props.className}>
          {this.props.children}
        </div>
      </Modal>
    );
  }
}

export { Modal as UnstyledModal };
export default StyledModal;
