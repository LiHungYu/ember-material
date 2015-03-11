import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-button', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('should convert layout attributes on an md-button to attributes on the generated button', function(assert) {
  assert.expect(2);
  let component = this.subject();

  component.set('hide', true);
  component.set('hide-sm', true);
  this.render();

  assert.equal(component.$().prop('hide-sm'), true);
  assert.equal(component.$().prop('hide'), true);
});

test('should have only one ripple container when a custom ripple color is set', function(assert) {
  assert.expect(1);
  // TODO
});

test('should expect an aria-label if element has no text', function(assert) {
  assert.expect(1);
  // TODO
});

test('should be a button tag if href is not passed in, anchor if it is', function(assert) {
  assert.expect(2);
  let component = this.subject();

  component.set('href', undefined);
  this.render();
  assert.equal(component.$().prop('tagName'), 'BUTTON');

  Ember.run(() => component.set('href', 'http://example.com/'));
  this.render();
  assert.equal(component.$().prop('tagName'), 'A');
});

test('should not set tabindex when not disabled', function(assert) {
  assert.expect(1);
  let component = this.subject();

  component.set('disabled', false);
  component.set('href', 'http://example.com');
  this.render();
  assert.equal(component.$().attr('tabindex'), undefined);
});

test('should not set tabindex when used enabled, or without anchor attributes when disabled', function(assert) {
  assert.expect(2);
  let component = this.subject();

  component.set('disabled', false);
  component.set('href', 'http://example.com');
  this.render();
  assert.equal(component.$().attr('tabindex'), undefined);

  Ember.run(() => {
    component.set('disabled', true);
    component.set('href', undefined);
  });
  this.render();
  assert.equal(component.$().attr('tabindex'), undefined);

});

test('should set tabindex=-1 when used with href when disabled', function(assert) {
  assert.expect(1);
  let component = this.subject();

  component.set('disabled', true);
  component.set('href', 'http://example.com/');
  this.render();
  assert.equal(component.$().attr('tabindex'), -1);
});

test('should be a disabled button when disabled=true and no href', function(assert) {
  assert.expect(1);
  let component = this.subject();

  component.set('disabled', true);
  component.set('href', undefined);
  this.render();
  assert.equal(component.$().prop('disabled'), true);
});

test('should be a non-clickable link when disabled=true href', function(assert) {
  assert.expect(1);
  let component = this.subject();

  component.set('disabled', true);
  component.set('href', undefined);
  this.render();
  assert.equal(component.$().prop('disabled'), true);
});
