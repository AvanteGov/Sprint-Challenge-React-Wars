# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
React JS is a frame work that allows for construction of webpages based on dynamic data input. This eases the need for hardcoding webpages, and allows for the creation of massive architectures suitable to overwhleming amounts of data, with minimal code structuring. As an example, facebook does not hard code every instance of a comment, rather the funcitonal components are set up as a "frame"  for the dynamic data, and load the interface based on the data requested.  



1. What does it mean to think in react?
This statement describes a component-first approach to the construction of web applications, breaking down architecture to the simplist forms, and building interfaces that are maliable to the data they are receiving and presenting to users. 



1. Describe state.
State describes the way in which data is held within a web app for future use and manipulation. State contains two parts, the state itself and the function that is used to manipulate state.



1. Describe props.
Props allows for information to be passed between parent and child components down the node tree, so that interfaces may be generated based on one source of data. 



1. What are side effects, and how do you sync effects in a React component to state or prop changes?
Side effects are executable code that are based on events in the interface, or changes that are made. In order to sync these, one must make use of the second argument in the useEffect statement within a functional component. 