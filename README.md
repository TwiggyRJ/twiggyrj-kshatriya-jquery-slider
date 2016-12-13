# twiggyrj-kshatriya-jquery-slider
This is a basic carousel slider that was built in a day as a learning exercise to get better at JavaScript, jQuery and learn a bit of ES6.

This slider takes the following items when initialised:

| Option | Expected Value | What it is used for | Does it a default fallback |
| ------ | -------------- | ------------------- | -------------------------- |
| el | Carousel as an jQuery Object | Used to select the carousel item | No, this needs to be filled |
| sliderTrack | Carousel slider track as an jQuery Object | Used to select the carousel track | No, this needs to be filled |
| next | The element that will act as the next button | Will have an event bound to it | No, this needs to be filled |
| prev | The element that will act as the back button | Will have an event bound to it | No, this needs to be filledE |
| autoplay | Boolean TRUE/FALSE | Will decide if the carousel should autoplay | This set to FALSE if it is empty |
| autoplayCancel | Boolean TRUE/FALSE | Will decide if autoplay should stop once the controls have been interacted with | This set to TRUE if it is empty |
| autoplaySpeed | Time in MS e.g. 350ms is 0.35s | Will set how long a slide will show for before the carousel autoplays | This is set to 3000 if it is empty |
| speed | Time in MS e.g. 750ms is 0.75s | Will set the transition speed between each slide | This is set to 350 if it is empty |

This carousel includes a basic example in index.html
