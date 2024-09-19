export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />

      <label htmlFor="wd-description">Description</label>
      <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: - Your full name and section - Links to each of the lab
        assignments - Link to the Kanbas application - Links to all relevant
        source code repositories
      </textarea>
      <br />
      <br />

      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="assignments">Assignments</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="percentage">Percentage</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="online">Online</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label>Online Entry Options</label>
          </td>
          <td>
            <input type="checkbox" id="wd-text-entry" /> Text Entry <br />
            <input type="checkbox" id="wd-website-url" /> Website URL <br />
            <input type="checkbox" id="wd-media-recordings" /> Media Recordings{" "}
            <br />
            <input type="checkbox" id="wd-file-upload" /> File Upload
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign To</label>
          </td>
          <td>
            <select id="wd-assign-to">
              <option value="everyone">Everyone</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
          <td>
            <input id="wd-due-date" type="date" value="2024-05-13" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td>
            <input id="wd-available-from" type="date" value="2024-05-06" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-until">Until</label>
          </td>
          <td>
            <input id="wd-available-until" type="date" value="2024-05-20" />
          </td>
        </tr>
      </table>

      <button>Save</button>
      <button>Cancel</button>
    </div>
  );
}
