import { Component, h } from '@stencil/core';
import { CoIcon } from 'design-system';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build
          entire apps all with web components using Stencil! Check out our docs
          on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <my-component
          first='Matthias'
          last='Max'
          style={{ border: '1px solid red' }}
        ></my-component>

        <div>
          Here the CoIcon functional component is consumed from the parent
          "app":
        </div>
        <div>
          <CoIcon name='ion-pencil' />
          <CoIcon name='ion-checkmark-circle-outline' />
        </div>

        <stencil-route-link url='/profile/stencil'>
          <button>Profile page</button>
        </stencil-route-link>
      </div>
    );
  }
}
