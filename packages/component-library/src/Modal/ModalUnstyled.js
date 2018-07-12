// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import createTransitionStyle from '../utils/create-transition-style';

export type ModalProps = {
  /** div id where to render the react portal */
  modalRoot: string,
  /** react children (your component) */
  children?: React.Node,
};

type ModalState = {
  /** the ref to the root element where the portal is opened */
  modalRoot: HTMLElement | null,
  /** the ref to the root aside where the modal is created */
  aside: HTMLElement | null,
};

class Modal extends React.PureComponent<ModalProps, ModalState> {
  static defaultProps = {
    modalRoot: 'modal-root',
  };

  state = {
    modalRoot: null,
    aside: null,
  };

  componentDidMount() {
    this.setState((state) => ({
      modalRoot: document.getElementById(this.props.modalRoot),
      aside: document.createElement('aside'),
    }));
  }

  componentDidUpdate(prevProps: ModalProps, prevState: ModalState) {
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

export default Modal;
