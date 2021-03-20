Example of JSX

React.createElement(
"div",
{ className: "App" },
React.createElement(
"header",
{ className: "App-header" },
React.createElement("img", {
className: "App-logo",
src: logo,
alt: "logo",
}),
React.createElement('p',null, `Edit src/App.js and save to reload`),
React.createElement('a',{className:'App-link', href:"https://reactjs.org",target:"_blank", rel:"noopener noreferrer"}, 'Learn React')

    )
