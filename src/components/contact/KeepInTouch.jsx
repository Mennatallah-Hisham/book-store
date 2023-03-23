import React from "react";

const KeepInTouch = () => {
  return (
    <div className="flex-col--s keep">
        <div>
        <h2 className="txt--sec">keep in touch</h2>
      <p className="txt--pri txt--sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odio
        recusandae doloribus dicta nisi labore 
      </p>
        </div>
      
      <ul className="flex-col--xs">
        <li>
          <div>
            <p className="txt--sec txt--m">visit us :</p>
            <p className="txt--sm txt--pri">Lorem ipsum dolor sit</p>
          </div>
        </li>
        <li>
          <div>
            <p className="txt--sec txt--m">Drop us :</p>
            <p className="txt--sm txt--pri">Lorem ipsum dolor sit</p>
          </div>
        </li>
        <li>
          <div>
            <p className="txt--sec txt--m">call us :</p>
            <p className="txt--sm txt--pri">+02 166-550-5561</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default KeepInTouch;
