// const Button = React.createClass({
//   render() {
//     return React.createElement('button', {}, 'Click me!');
//   }
// });

class Button extends React.Component {
  render() {
    return React.createElement('button', {}, 'Click me!');
  }
}


const ShoppingList = React.createClass({
  render() {
    return React.createElement('ul', {}, [
      React.createElement('li', {}, 'Bananas'),
      React.createElement('li', {}, 'Vanilla ice cream'),
      React.createElement('li', {}, 'Chocolate'),
    ]);
  }
});

const nestedButtons = React.createElement('div', {}, [
  React.createElement(Button),
  React.createElement(Button),
]);
