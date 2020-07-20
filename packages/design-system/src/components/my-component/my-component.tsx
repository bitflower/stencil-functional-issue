import { Component, Prop, h, Host } from '@stencil/core';
import { format } from '../../utils/utils';
import { CoIcon } from '../../functional';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <Host>
        <div>Hello, World! I'm {this.getText()}</div>
        <div>
          This is a functional component consumed from within the Stencil
          package containing it:
        </div>
        <CoIcon name='ion-pencil' />
      </Host>
    );
  }
}
