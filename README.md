# React Native Horizontal List Component

> A wrapper Component written around React Native's FlatList Component.

## Table of Contents

1. [Installation](#installation)
1. [Usage](#usage)
1. [Example](#general-star-example)

## Installation

1. install rn-horizontal-list and its dependeices
```sh
npm install rn-horizontal-list --save
```
or
```sh
yarn add rn-horizontal-list
```

### Horizontal List Example

```js
import HorizontalList from 'rn-horizontal-list';

const DATA = [
  {
    id: '3',
    category: "SCIENCE FICTION",
    title: "Blade Runner Future 2049.",
    image: { uri: "https://i.imgur.com/L68FtMA.jpg" },
    rating: 4.0,
  },
  {
    id: '4',
    category: "SUPERHERO ACTION",
    title: "Captain America Civil War.",
    image: { uri: "https://i.imgur.com/tAui2H7.jpg" },
    rating: 3.5,
  },
  {
    id: '5',
    category: "ROMANCE",
    title: "Beauty and the Beast.",
    image: { uri: "https://i.imgur.com/J5pgFyr.jpg" },
    rating: 2.5,
  },
  {
    id: '1',
    category: "advertisement",
    title: "Please subscribe to view more exclusive contents.",
    image: { uri: `https://loremflickr.com/320/240?random=${Math.random() * 1000}` }
  },
  {
    id: '2',
    category: "advertisement",
    title: "2 months for only Rm15.90 for offline movies.",
    image: { uri: `https://loremflickr.com/320/240?random=${Math.random() * 1000}` },
  },
  {
    id: '6',
    category: "DRAMA",
    title: "Shawshank Redemption.",
    image: { uri: "https://i.imgur.com/7YGXDbM.jpg" },
    rating: 3.0,
  },
];

class HorizontalListExample extends Component {

  onPressItem(item) {
    // do something with the item
  }

  render() {
    return (
        <HorizontalList
            data={DATA}
            title={'New releases'}
            onPress={this.onPressItem}
        />
    );
  }
}

export default HorizontalListExample
```