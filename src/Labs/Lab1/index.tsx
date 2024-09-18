export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <div id="wd-h-tag"> ... </div>
      <div id="wd-p-tag"> ... </div>
      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make pancakes: 1. Mix dry ingredients. 2. Add wet ingredients. 3.
        Stir to combine. 4. Heat a skillet or griddle. 5. Pour batter onto the
        skillet. 6. Cook until bubbly on top. 7. Flip and cook the other side.
        8. Serve and enjoy!
      </div>
      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make pancakes:
        <ol id="wd-pancakes">
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients.</li>
          <li>Stir to combine.</li>
          <li>Heat a skillet or griddle.</li>
          <li>Pour batter onto the skillet.</li>
          <li>Cook until bubbly on top.</li>
          <li>Flip and cook the other side.</li>
          <li>Serve and enjoy!</li>
        </ol>
        My favorite recipe:
        <ol id="wd-your-favorite-recipe">
          <li>Blanch the pork ribs and rinse.</li>
          <li>Boil fresh water and add ribs.</li> <li>Add corn and carrots.</li>
          <li>Simmer for 1-2 hours.</li> <li>Season with salt and serve.</li>
        </ol>
        <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
        <ul id="wd-my-books">
          <li>Dune</li>
          <li>Lord of the Rings</li>
          <li>Ender's Game</li>
          <li>Red Mars</li>
          <li>The Forever War</li>
        </ul>
        Your favorite books (in no particular order) Your favorite books (in no
        particular order)
        <ul id="wd-your-books">
          <li>1984</li>
          <li>To Kill a Mockingbird</li>
          <li>Brave New World</li>
          <li>The Catcher in the Rye</li>
          <li>The Great Gatsby</li>
        </ul>
      </div>
      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>React</td>
              <td>2/24/21</td>
              <td>88</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td>Node.js</td>
              <td>3/3/21</td>
              <td>92</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td>Express</td>
              <td>3/10/21</td>
              <td>87</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td>MongoDB</td>
              <td>3/17/21</td>
              <td>93</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td>APIs</td>
              <td>3/24/21</td>
              <td>89</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td>GraphQL</td>
              <td>3/31/21</td>
              <td>91</td>
            </tr>
            <tr>
              <td>Q10</td>
              <td>TypeScript</td>
              <td>4/7/21</td>
              <td>94</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90.4</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet:
        <br />
        <img
          id="wd-starship"
          width="400px"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        />
        <br />
        Loading a local image:
        <br />
        <img id="wd-teslabot" src="images\teslabot.jpg" height="200px" />
        <input type="text" placeholder="hint" title="tooltip" value="COMEDY" />
        <div id="wd-forms">
          <h4>Form Elements</h4>
          <form id="wd-text-fields">
            <h5>Text Fields</h5>
            <label htmlFor="wd-text-fields-username">Username:</label>
            <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
            <label htmlFor="wd-text-fields-password">Password:</label>
            <input
              type="password"
              id="wd-text-fields-password"
              value="123@#$asd"
            />{" "}
            <br />
            <label htmlFor="wd-text-fields-first-name">First name:</label>
            <input
              type="text"
              id="wd-text-fields-first-name"
              title="John"
            />{" "}
            <br />
            <label htmlFor="wd-text-fields-last-name">Last name:</label>
            <input
              type="text"
              id="wd-text-fields-last-name"
              placeholder="Doe"
              value="Wonderland"
              title="The last name"
            />{" "}
            <br />
            {/* Additional form elements for personal information */}
            <label htmlFor="wd-text-fields-email">Email:</label>
            <input
              type="email"
              id="wd-text-fields-email"
              placeholder="email@example.com"
              title="Enter your email"
            />{" "}
            <br />
            <label htmlFor="wd-text-fields-phone">Phone:</label>
            <input
              type="tel"
              id="wd-text-fields-phone"
              placeholder="(123) 456-7890"
              title="Enter your phone number"
            />{" "}
            <br />
            <label htmlFor="wd-text-fields-address">Address:</label>
            <input
              type="text"
              id="wd-text-fields-address"
              placeholder="123 Main St"
              title="Enter your address"
            />{" "}
            <br />
          </form>
        </div>
      </div>
      <h5 id="wd-radio-buttons">Radio buttons</h5>
      <label>Favorite movie genre:</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-comedy" />
      <label htmlFor="wd-radio-comedy">Comedy</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-drama" />
      <label htmlFor="wd-radio-drama">Drama</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-scifi" />
      <label htmlFor="wd-radio-scifi">Science Fiction</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
      <label htmlFor="wd-radio-fantasy">Fantasy</label>
      <h5 id="wd-buttons">Buttons</h5>
      <button
        id="wd-all-good"
        onClick={() => alert("Life is Good!")}
        type="button"
      >
        Hello World!
      </button>
      <h5>File upload</h5>
      <input type="checkbox" name="NAME2" value="OPTION1" checked />
      <input type="checkbox" name="NAME2" value="OPTION2" />
      <input type="checkbox" name="NAME2" value="OPTION3" checked />
      <h5 id="wd-checkboxes">Checkboxes</h5>
      <label>Favorite movie genre:</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
      <label htmlFor="wd-chkbox-comedy">Comedy</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
      <label htmlFor="wd-chkbox-drama">Drama</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
      <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
      <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
      <select>
        <option value="VAL1">Value 1</option>
        <option value="VAL2" selected>
          Value 2
        </option>
        <option value="VAL3">Value 3</option>
      </select>
      <select multiple>
        <option value="VAL1" selected>
          Value 1
        </option>
        <option value="VAL2">Value 2</option>
        <option value="VAL3" selected>
          Value 3
        </option>
      </select>
      <h4 id="wd-dropdowns">Dropdowns</h4>
      <h5>Select one</h5>
      <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label>
      <br />
      <select id="wd-select-one-genre">
        <option value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option selected value="SCIFI">
          Science Fiction
        </option>
        <option value="FANTASY">Fantasy</option>
      </select>
      <h5>Select many</h5>
      <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label>
      <br />
      <select id="wd-select-many-genre" multiple>
        <option selected value="COMEDY">
          Comedy
        </option>
        <option value="DRAMA">Drama</option>
        <option selected value="SCIFI">
          Science Fiction
        </option>
        <option value="FANTASY">Fantasy</option>
      </select>
      <h4>Other HTML field types</h4>
      <label htmlFor="wd-text-fields-email"> Email: </label>
      <input
        type="email"
        placeholder="jdoe@somewhere.com"
        id="wd-text-fields-email"
      />
      <br />
      <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
      <input
        type="number"
        id="wd-text-fields-salary-start"
        placeholder="1000"
        value="100000"
      />
      <br />
      <label htmlFor="wd-text-fields-rating"> Rating: </label>
      <input
        type="range"
        id="wd-text-fields-rating"
        placeholder="Doe"
        max="5"
        value="4"
      />
      <br />
      <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
      <input type="date" id="wd-text-fields-dob" value="2000-01-21" />
      <br />
      <a href="aa.com">American Airlines</a>
      <h4>Anchor tag</h4>
      Please
      <a id="wd-lipsum" href="https://www.lipsum.com">
        click here
      </a>
      to get dummy text
      <br />
    </div>
  );
}

export {};
