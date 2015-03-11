import Ember from 'ember';
import FlexboxMixin from 'ember-material/mixins/flexbox';
let get = Ember.get, computed = Ember.computed, observer = Ember.observer;

/**
 * Button
 *
 * @description
 * `<md-button>` is a button component with optional ink ripples (default enabled).
 *
 * If you supply a `href` attribute, it will become an `<a>` element. Otherwise, it will
 * become a `<button>` element.
 *
 * As per the [material design spec](http://www.google.com/design/spec/style/color.html#color-ui-color-application)
 * the FAB button is in the accent color by default. The primary color palette may be used with
 * the `md-primary` class.
 *
 * @param {boolean=} md-no-ink If present, disable ripple ink effects.
 * @param {expression=} disabled En/Disable based on the expression
 * @param {string=} md-ripple-size Overrides the default ripple size logic. Options: `full`, `partial`, `auto`
 * @param {string=} aria-label Adds alternative text to button for accessibility, useful for icon buttons.
 * If no default text is found, a warning will be logged.
 *
 * @usage
 *  <md-button>
 *    Button
 *  </md-button>
 *  <md-button href="http://google.com" class="md-button-colored">
 *    I'm a link
 *  </md-button>
 *  <md-button disabled="true" class="md-colored">
 *    I'm a disabled button
 *  </md-button>
 */
export default Ember.Component.extend(FlexboxMixin, {
  // No dependent key because Ember doesn't rerender when tagName changes anyways.
  tagName: computed('href', function() {
    return get(this, 'href') ? 'a' : 'button';
  }),

  attributeBindings: [
    'tabindex',
    'disabled'
  ],

  tabindex: computed('disabled', 'href', function() {
    // For anchor elements, we have to set tabindex manually when the
    // element is disabled
    return get(this, 'disabled') && get(this, 'href') ? -1 : undefined;
  }),

  tagNameChanged: observer('tagName', function() {
    this.rerender();
  }),
});
