import React, { useState } from "react";
import db from "../firebase";
import { TextField, Button, Grid } from "@material-ui/core";
const NewQuest = () => {
  const [Category, setCategory] = useState([]);
  const [detailspara, setdetailspara] = useState([]);
  const [picofquest, setpicofquest] = useState([]);
  const [title, settitle] = useState([]);
  // const [userid, setuserid] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    db.collection("Quests")
      .add({
        Category: Category,
        detailspara: detailspara,
        picofquest: picofquest,
        title: title,
        // userid: userid,
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    alert("Thanks for uploading a quest!");
  };
  return (
    <div>
      <Grid
        item
        container
        xs={12}
        sm={12}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <h2>Make a new quest!</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <label> Category</label>
              </td>
              <td>
                <TextField
                  id="Category"
                  label="Category"
                  value={Category}
                  onChange={event => {
                    setCategory(event.target.value);
                  }} />
              </td>
            </tr>
            <tr>
              <td>
                <label> Details paragaph</label>
              </td>
              <td>
                <TextField
                  id="detailspara"
                  label="detailspara"
                  value={detailspara}
                  onChange={event => {
                    setdetailspara(event.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label> url pic of quest </label>
              </td>
              <td>
                <TextField
                  id="picofquest"
                  label="picofquest"
                  value={picofquest}
                  onChange={event => {
                    setpicofquest(event.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label> title</label>
              </td>
              <td>
                <TextField
                  id="title"
                  label="title"
                  value={title}
                  onChange={event => {
                    settitle(event.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
      </Button>
      </Grid>
      <h1>hi</h1>
    </div>
  );
};
export default NewQuest;
