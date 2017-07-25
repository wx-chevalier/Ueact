// @flow

import { createVNode } from '../../../src/vdom/node/createVNode';
import ReactiveComponent from '../../../src/mvvm/component/ReactiveComponent';

class Count extends ReactiveComponent {
  state = {
    count: 0
  };

  componentDidMount() {
    console.log('Mount Count');
  }

  handleClick = () => {
    this.state.count++;
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>点击自增</button>
        <div>
          {this.state.count}
        </div>
      </div>
    );
  }
}

/**
 * Description 响应式 HelloWorld
 */
export default class ReactiveHelloWorld extends ReactiveComponent {
  componentDidMount() {
    console.log('Mount ReactiveHelloWorld');
  }

  render() {
    return (
      <div>
        <div>HelloWorld</div>
        <Count />
      </div>
    );
  }
}
