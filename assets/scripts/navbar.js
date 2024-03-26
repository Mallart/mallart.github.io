// generates the navigation bar

class Link
{
    name;
    href;

    constructor(_name, _href)
    {
        this.name = `${_name}`;
        this.href = `${_href}`;
    }
}

class NavBar
{
    links = [];
    node;

    constructor(links)
    {
        this.links = [...links];
    }

    // Renders the navbar
    Instantiate()
    {
        this.node = document.createElement("nav");
        this.node.classList.add("navbar");
        for(let i = 0; i < this.links.length; ++i)
        {
            let _link = document.createElement("a");
            _link.classList.add("link");
            _link.classList.add("text");
            _link.setAttribute("href", this.links[i].href);
            _link.textContent = this.links[i].name;
            this.node.appendChild(_link);
        }
        document.body.prepend(this.node);
        console.log("Instantiated navbar.");
    }
};

let defaultLinks = [
    new Link("Home", "./index.html#Home"),
    new Link("Projects", "./index.html#Projects"),
    new Link("Skills", "./index.html#Skills"),
    new Link("Documents", "./index.html#Documents"),
]

new NavBar(defaultLinks).Instantiate();
console.log("Instantiated navbar.");