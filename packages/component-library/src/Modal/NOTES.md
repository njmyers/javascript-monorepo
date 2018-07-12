### Modal

Modal creates ... a modal. It uses `ReactDOM.createPortal` so it renders your element outside of the HTML tree. However it is still controlled by whichever react parent component it is used in. By default Modal renders to the id 'modal-root'. Please be sure to add 'modal-root' to your HTML file or else nothing will be rendered by this component.

The default export from Modal is the styled modal. It contains background, transitions and all sorts of fun inline css. If you would like to use only the portal creation you can find it as a named export `UnstyledModal`.

```js
import { Modal, UnstyledModal } from 'njmyers-component-library';
```

#### Usage

Simply add your children and use the parent component to control the status as 'on' or 'off'.

```js
import React from 'react';
import { Modal } from 'njmyers-component-library';

class ModalParent extends React.Component {
  state = {
    status: 'on'
  }

  turnOffModal = () => {
    this.setState({
      status: 'off'
    })
  }

  componentDidMount() {
    setTimeout(this.turnOffModal, 4000)
  }

  render() {
    return (
      <Modal status={this.state.status} />
        <p>Annoying advertisement</p>
      </Modal>
    )
  }
}
```

In the above example, the 'annoying advertisement' will render itself in aside under the 'modal-root' id for 4 seconds and then will animate to its offState styles. When ModalParent unmounts the modal component will be removed from 'modal-root'.

<!-- STORY -->
