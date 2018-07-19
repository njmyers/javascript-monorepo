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

## Props

| Prop Name          | Type                                                                                                                                                       | Required | Default Value                                                                                                                                                                                                                                                    | Description                                  |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------- |
| `children`         | `ReactNode`                                                                                                                                                | false    | -                                                                                                                                                                                                                                                                | _react children (your component)_            |
| `className`        | `string`                                                                                                                                                   | false    | -                                                                                                                                                                                                                                                                | _className applied to the container element_ |
| `modalRoot`        | `string`                                                                                                                                                   | false    | <code>'modal-root'</code>                                                                                                                                                                                                                                        | _div id where to render the react portal_    |
| `offState`         | <code>{}</code>                                                                                                                                            | false    | <code>{<br> opacity: 0,<br>}</code>                                                                                                                                                                                                                              | _css inline styles applied to the off state_ |
| `onState`          | <code>{}</code>                                                                                                                                            | false    | <code>{<br> opacity: 1,<br>}</code>                                                                                                                                                                                                                              | _css inline styles applied to the on state_  |
| `replaceStyle`     | <code>{}</code>                                                                                                                                            | false    | <code>{<br> background: 'rgba(255, 255, 255, 0.8)',<br> position: 'fixed',<br> width: '100%',<br> height: '100%',<br> top: 0,<br> left: 0,<br> bottom: 0,<br> right: 0,<br> display: 'flex',<br> justifyContent: 'center',<br> alignItems: 'center',<br>}</code> | _completely replace all styles_              |
| `status`           | <code>'on' &#124; 'off'</code>                                                                                                                             | false    | <code>'off'</code>                                                                                                                                                                                                                                               | _display status of the styled modal_         |
| `style`            | <code>{}</code>                                                                                                                                            | false    | <code>{}</code>                                                                                                                                                                                                                                                  | _shallowly merge styles_                     |
| `transitionSpeed`  | `number`                                                                                                                                                   | false    | <code>0.25</code>                                                                                                                                                                                                                                                | _the speed of the transition_                |
| `transitionTiming` | <code>&#124; 'ease'<br>&#124; 'linear'<br>&#124; 'ease-in'<br>&#124; 'ease-out'<br>&#124; 'ease-in-out'<br>&#124; 'step-start'<br>&#124; 'step-end'</code> | false    | <code>'ease'</code>                                                                                                                                                                                                                                              | _the transition timing function_             |
| `zIndexOff`        | `number`                                                                                                                                                   | false    | <code>-20</code>                                                                                                                                                                                                                                                 | _z-index of the modal when off_              |
| `zIndexOn`         | `number`                                                                                                                                                   | false    | <code>1</code>                                                                                                                                                                                                                                                   | _z-index of the modal when on_               |
