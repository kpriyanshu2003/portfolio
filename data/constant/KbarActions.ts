export const actions = [
  {
    id: "blog",
    name: "Blog",
    shortcut: ["b"],
    keywords: "writing words",
    perform: () => {
      alert("b");
    },
  },
  {
    id: "contact",
    name: "Contact",
    shortcut: ["c"],
    keywords: "email",
    perform: () => {
      alert("c");
    },
  },
  {
    id: "about",
    name: "About",
    shortcut: ["ctrl", "c"],
    keywords: "eee",
    perform: () => {
      alert("ctrl c");
    },
  },
];
