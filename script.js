const css = document.querySelector(".css");
const js = document.querySelector(".js");

//css to js
let cssjs = {};

css.onkeyup = function (evt) {
  //
  let val = evt.target.value;

  //parse the val.
  //replace ; with ,
  //after :some value; replace it with :string vale,if comma separeted
  //then maintain the comma
  // with or not , and : it is propety name
  //property name hypen separeted with capital letter;
  //property with its value;

  const pRe = /;?\s*?\w+-?[\w\s]*?:/g; //property name

  const vRe = /:\s*?\w+\s*?(,?\s*?\w+?(\(\w+\))?\s*?)*\s*?;/g; //value regular expression;

  let props = val.match(pRe);
  let vals = val.match(vRe);
  //remove white space and : from the property names
  if (props) {
    props = props.map((prop) => {
      //create span element
      let span = document.createElement("span");
      span.classList.add("prop");
      const re = /\w+(-\w*)?/g;
      if (prop.match(/-\w/)) {
        //
        span.innerHTML = prop
          .match(re)[0]
          .replace(/-\w/, prop.match(/-\w/)[0].split("")[1].toUpperCase());
        return prop
          .match(re)[0]
          .replace(/-\w/, prop.match(/-\w/)[0].split("")[1].toUpperCase()); //span;
      } else {
        //
        span.innerHTML = prop.match(re)[0];
        return prop.match(re)[0]; //span; //prop.match(re)[0];
      }
    });
    console.log(props.toString());
  }
  //remove white space and , from values.
  if (vals) {
    //
    let span = document.createElement("span");
    span.classList.add("val");
    vals = vals.map((val) => {
      const re = /\w+(\(\w+\))?/g;

      if (val.match(/,/)) {
        span.innerHTML = val.match(re).join(",");
        return val.match(re).join(","); //span;
      } else {
        span.innerHTML = val.match(re)[0];
        return val.match(re)[0]; //span;
      }
    });

    console.log(vals.toString());
  }
  if (props && vals) {
    //change props and vals to js
    let div = document.createElement("div");
    const semi = document.createElement("span");
    semi.innerHTML = " : ";
    const comma = document.createElement("span");
    comma.innerHTML = ",";
    // const tot = [];

    props.forEach((prop, i) => {
      //
      // div.appendChild(prop);
      // div.appendChild(semi);
      // div.appendChild(vals[i]);
      // div.appendChild(comma);
      // tot.push(div);
      cssjs[prop] = vals[i];
    }); //end
  }
};
console.log(JSON.stringify(cssjs));
