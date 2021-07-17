# React-Bootstrap-Timeline

![](https://i.ibb.co/Dpr0szV/timeline1.png)
![](https://i.ibb.co/QNX5hxW/timeline2.png)

# Getting Started

## Installation

`npm install react-bootstrap-timeline`



## Usage
### Import Bootstrap style to the project

```js
import 'bootstrap/dist/css/bootstrap.css';
```
**Bootstrap 4.6.0 has already installed.**
### The component can be used in following ways

 1. Nested childs

    ```ts
       <Timeline>
          <Card
            content={'This is the content of the react-bootstrap-timeline'}
            title={'react-bootstrap-timeline-Card-1'}
            isActive={false}
            datetime={'2021-07-17'}
          />
          <Card
            content={'This is the content of the react-bootstrap-timeline'}
            title={'react-bootstrap-timeline-Card-2'}
            isActive={true}
            datetime={'2021-07-17'}
          />
      </Timeline>
    ```
2. Using array
    ```ts
     let cards: CardProps[] = [
            {
              content:'This is the content of the react-bootstrap-timeline',
              title:'react-bootstrap-timeline-Card-1',
              isActive:true,
              datetime:'2021-07-17'
            },
            {
              content:'This is the content of the react-bootstrap-timeline',
              title:'react-bootstrap-timeline-Card-2',
              isActive:false,
              datetime:'2021-07-17'
            }
          ];
     <Timeline cards={cards}/>
    ```
3. Integration of both 
    ```ts
    let cards: CardProps[] = [
        {
          content:'This is the  content of the   react-bootstrap-timeline',
          title:'react-bootstrap-timeline-Card-1',
          isActive:true,
          datetime:'2021-07-17'
        }    
      ];
      <Timeline>
      <Card
        content={'This is the content of the react-bootstrap-timeline'}
        title={'react-bootstrap-timeline-Card-2'}
        isActive={false}
        datetime={'2021-07-17'}
      />
      </Timeline>
     ```
# Advance Setting       

 ```ts
let timelineSetting: Setting = {
  Alignment: TimelineAlignment.Right,//timeline alignment
  Size: BsSize.Medium,//bootstrap sizes
  PaddingY: BsPaddingY.Five,//padding between cards
};
```
Usage

```ts
<Timeline setting={timelineSetting}>
    <Card
    content={'This is the content of the react-bootstrap-timeline'}
    title={'react-bootstrap-timeline-Card-1'}
    isActive={false}
    datetime={'2021-07-17'}/>
    <Card
    content={'This is the content of the react-bootstrap-timeline'}
    title={'react-bootstrap-timeline-Card-2'}
    isActive={true}
    datetime={'2021-07-17'}/>
</Timeline>
``` 
    