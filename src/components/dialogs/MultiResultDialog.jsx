import React from "react";
import { Dialog, DialogContent, CardActions, Button } from "@material-ui/core";

export default function MultiReslutDialog(props) {
  const superheroes = [];
  props.result.tempHeros.map(hero => {

    if(hero.biography["full-name"].length > 1){
      let superhero = (
        <Button
          key={hero.id}
          size="small"
          style = {{marginRight: '5px'}}
          onClick={() => {
            props.handle(hero);
          }}
        >
          {hero.biography["full-name"]}
        </Button>
      );
      superheroes.push(superhero);
    }
    return null;
  });


  return (
    <Dialog
      open={true}
      style={{ padding: 60, overflow: "none", justifyContent: "flex" }}
    >
      <DialogContent>
        <div>
          <h3 className="h1-title-style">
            Multiple results found for '{props.search}', Please select the one
            you are looking for.
          </h3>
        </div>
      </DialogContent>
      <CardActions>{superheroes}</CardActions>
    </Dialog>
  );
}
