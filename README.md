# WeatherApp
- react-native vector icons

## Whai i have learned
1. Setting up an app with expo.
2. Create and import a component.
3. Basic styling.

## Lists in react-native
1. FlatList
2. SectionList
3. VirtualizedList


| FlatList | SectionList |
| :-----: | :---------: |
| think  of this as a standard list | when you need a list broken up into sections |
| required props: Data and renderItem | required props: Sections and renderItem |
| data must be an array | data must be an array of objects |
| renderItem displays the list element to the user | RenderItem displays the list element to the user |
| 

## keyExtractor
- Used to extract a unique key for a given item at the specified index. Key is used for caching and as the react key to track item re-ordering. The default extractor checks item.key, then item.id, and then falls back to using the index, like React does.

### Requirements of keyExtractor
- must be a string
- each element must have its own unique ID
- the key can be added to the data or we can use the keyExtractor prop

## Images
### NB//
- network images must have a height set
- when sizing images you can use a height and width or you can use a heigt and width or you can use aspect ratio with the height and/or the width
- be mindful of storage sizes when you are using static images
- used `` pixabay.com `` website for free images

## ImageBackground
- A common feature request from developers familiar with the web is background-image. To handle this use case, you can use the ``` <ImageBackground> ``` component, which has the same props as ``` <Image> ```, and add whatever children to it you would like to layer on top of it.

## Props
- prop is short for property
- they are used to pass data from parent to child
- we can use props to customize our components
- promotes componet reusability

### NB//
- props are immutable so they can't be changed once the component is created
- we use unidirrectional data flow to pass the props from the parent to the child
- unidirectional data flow means the data can only move in one dirrection