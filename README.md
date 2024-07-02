Technologies Used:
React JS for building user interfaces - Typescript as programming language - Tailwind CSS for rapid styling - Axios for making HTTP requests to fetch data from API. - Vite PWA plugin for developing PWA.
I chose Tailwind CSS because it is very unopinionated.ie, It lets you take full control of UI styling.

Lets discuss about the 'src/components/'
"chat-header.tsx" : a file that exports almost a static react component division of the page containing ride name, start,destination and few buttons around the place.

"messages.tsx" : a file that exports a react component that serves as Boiler plates/Card wrappers/containers for the chats fetched from the api depending on whether the "chat.sender.self" is true or false (returns a message with blue wrapper if the chat.sender.self is true otherwise false).It also includes a "Verified icon" at the bottom of the profile picture if "chat.sender.is_kyc_verified" is true. This file also provides a component that renders Date-header (03 JUL,2024) on change in dates of messages. Unfortunately the data fetched from the response of api does not include varying dates through our pages. For that reason, it does not appear on the screen at all.Though, I have shown below how the Date-header would appear on date changes.

"chat-box.tsx" : a file that facilitates inverse infinite scrolling and hit the api for fetching older chats upon scroll bar reaching its maximum scroll along +y direction and mapping each chat to the message component.This component also make sures that the latest messages are stacked from the bottom of the chat divison.

"input-bar" : a file that exports a component that renders at the bottom of the view port containing input space,and functional buttons.

Lets discuss about the 'src/types.ts'
It exports frequently used interfaces/types for variables across the code base.

How PWA would appear on an android, ios, windows devices ?
![ipadPro](https://github.com/YashwantOstwal/-CoRiderAssignment/assets/140978232/64e1333d-b213-4bee-ad35-46aa80b63408)





