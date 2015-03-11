import Ember from 'ember';

/**
 * Flexbox Mixin
 *
 * @description
 * To be mixed into Components that should pass through Ember Material layout attributes
 */
export default Ember.Mixin.create({
  attributeBindings: [
    'layout-margin',
    'layout-padding',
    'layout-fill',
    'layout-wrap',
    'flex',
    'flex-sm',
    'flex-gt-sm',
    'flex-md',
    'flex-gt-md',
    'flex-lg',
    'flex-gt-lg',
    'flex-order',
    'flex-order-sm',
    'flex-order-gt-sm',
    'flex-order-md',
    'flex-order-gt-md',
    'flex-order-lg',
    'flex-order-gt-lg',
    'layout',
    'layout-sm',
    'layout-gt-sm',
    'layout-md',
    'layout-gt-md',
    'layout-lg',
    'layout-gt-lg',
    'layout-align',
    'layout-align-sm',
    'layout-align-gt-sm',
    'layout-align-md',
    'layout-align-gt-md',
    'layout-align-lg',
    'layout-align-gt-lg',
    'show',
    'show-sm',
    'show-gt-sm',
    'show-md',
    'show-gt-md',
    'show-lg',
    'show-gt-lg',
    'hide',
    'hide-sm',
    'hide-gt-sm',
    'hide-md',
    'hide-gt-md',
    'hide-lg',
    'hide-gt-lg'
  ]
});
