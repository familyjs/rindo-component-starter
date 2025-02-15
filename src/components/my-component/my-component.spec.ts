import { newSpecPage } from '@rindo/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });
    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="Rindo" middle="'Don't call me a framework'" last="JS"></my-component>`,
    });
    expect(root).toEqualHtml(`
      <my-component first="Rindo" middle="'Don't call me a framework'" last="JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Rindo 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
