
import './App.css';
import {
    provideFASTDesignSystem,
    fastCard,
    fastButton,
    fastRadio,
    fastRadioGroup,
    radioStyles

} from '@microsoft/fast-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import { css } from '@microsoft/fast-element';
import React from 'react';

const { wrap } = provideReactWrapper(
    React,
    provideFASTDesignSystem()
);

export const FastCard = wrap(fastCard());
export const FastButton = wrap(fastButton())
export const FastRadio = wrap(fastRadio({
    styles: (ctx, def) => css`
      ${  radioStyles
      (ctx, def)}
      :host([aria-checked="true"]) .control {
        background: blue;
      }
      :host([aria-checked="true"]:not([disabled])) .control:hover {
        background: blue;
      }
    `,
}),)
export const FastRadioGroup = wrap(fastRadioGroup())


function App() {
  return (
    <div className="App">
        <h2>FAST React</h2>
        <hr/>
        <fast-radio-group value="mango" name="favorite-fruit">
            <fast-radio value="apple">Apple</fast-radio>
            <fast-radio value="mango">Mango</fast-radio>
            <fast-radio value="orange">Orange</fast-radio>
        </fast-radio-group>
    </div>
  );
}

export default App;
