# Getting Started with Lab900 UI

This guide explains how to setup your Angular project to begin using Lab900 UI.

## Install

Install via npm package manager.

```bash
npm install --save @lab900/ui
```

## How to use

The library isn't a single module but multiple standalone components.
If you want to use for example the Lab900Table you just import it in the component or module you need.

```ts
import { Lab900TableComponent } from '@lab900/ui';

@Component({
  selector: 'my-component',
  standalone: true,
  imports: [Lab900TableComponent],
})
export class myComponent {
  // ...
}
```

## Styling

Include the library stylesheet in your scss file.

```scss
@use '@lab900/ui/theming' as theme;

@include theme.lab900-ui(YOUR_MATERIAL_THEME);
```

The lab900-ui mixin expects a [Material theme of config](https://material.angular.io/guide/theming).
