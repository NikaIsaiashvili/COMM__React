function Card(props) {
    return React.createElement("div", { className: "shopping-item" }, [
    React.createElement("h3", {}, props.title),
    React.createElement("img", {
        src: "https://source.unsplash.com/random/200x300",
        alt: props.alt,
}),
    React.createElement("div", { className: "description"}, [
        React.createElement("span", null, props.description[0]),
        React.createElement("span", null, props.description[1]),
]),
    React.createElement("div", {className: "badges"}, [
        React.createElement("span", { className: "badge-1"}, props.badges[0]),
        React.createElement("span", { className: "badge-2"}, props.badges[1]),
]),
    React.createElement("button", null, "Add To Card")

]);
}


export default Card;