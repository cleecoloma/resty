# RESTy

1. **Phase 1: Component Based UI**
> Convert App child components from class based to function based components.
2. **Phase 2: useState() Hook**
> Retrieving User Input and Managing State.
3. **Phase 3: useEffect() Hook**
> Utilize useEffect hook to listen for changes on request.url or request.method or request.body and then make the Axios request if changes are detected.
3. **Phase 4: useReducer() Hook**
> Utilize useReducer hook to store and manage all application state.


## Installation

> Start with: `npm install`

## Usage

> Test: `npm test`

Request:
```text
method: GET || POST || PUT || DELETE
route: {ROUTE_GOES_HERE}

if POST OR PUT
body: {REQUEST_GOES_HERE}
```

Response:
> Response will be in JSON

## UML Diagram
![UML Diagram Class 26 Base](./public/images/RESTy%20base.png)
![UML Diagram Class 27 State](./public/images/RESTy%20state.png)
![UML Diagram Class 28 Effect Hook](./public/images/RESTy%20effect%20hook.png)
![UML Diagram Class 29 Reducer Hook](./public/images/RESTy%20reducer%20hook.png)


## PR link
[PR Link Class 26](https://github.com/cleecoloma/resty/pull/1)
[PR Link Class 27](https://github.com/cleecoloma/resty/pull/2)
[PR Link Class 28](https://github.com/cleecoloma/resty/pull/3)
[PR Link Class 29](https://github.com/cleecoloma/resty/pull/4)

## Contributors
* Chester Lee Coloma
* ChatGPT (used for most tests)