- [ ] Why would you use class component over function components (removing hooks from the question)?
##### Answer: in most cases this is due to legacy code that is dependent on the class component structur.

- [ ] Name three lifecycle methods and their purposes.
##### Answer:
* componentDidMount, which would be used for most one time run items such as a first API call at the start of an application.
* componentDidUpdate, would be used to deal with the need for run after that componentDidMount can not handle, but during that phase of the lyfe cycle you need to run things like an API call and so on
* componentWillUnmount, is largely killing things and memory clean up at the end to prevent memory leaks and the like

- [ ] What is the purpose of a custom hook?
##### Answer: To make use of the modularity hooks offer, such as one set of code to manage all forms regardless of number of fields, or other like logic that is similar across many things...

- [ ] Why is it important to test our apps?
##### Answer: Largely to verify they are working like they should, better to catch over sights in test than in live deployment...
