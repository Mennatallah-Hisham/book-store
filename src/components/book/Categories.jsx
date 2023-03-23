import React from "react";
const allCategories = [
  {
    id: 1,
    name: "algorithms",
  },
  {
    id:2,
    name:"data structures"

  },
  {
    id:3,
    name:"data base"

  },
  {
    id:4,
    name:"web development"

  },

  {
    id:5,
    name:"Cyber Security "

  },

  {
    id:6,
    name:"software design"

  },
  {
    id:7,
    name:"Software Architecture"

  },
  {
    id:8,
    name:"Design Patterns"

  },
  {
    id:9,
    name:"UI"

  },
  {
    id:10,
    name:"UX"

  },
  {
    id:11,
    name:"mobile development"

  },
];

const Categories = () => {
  return (
    <section className="container flex-1 m-5">
      {allCategories.map((cat) => (
        <button className=" btn btn--sm btn--sec" key={cat.id}>
          {cat.name}
        </button>
      ))}
    </section>
  );
};

export default Categories;
