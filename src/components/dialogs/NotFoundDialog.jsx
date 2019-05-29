import React from "react";
import { Dialog, DialogContent, CardActions, Button } from "@material-ui/core";

export default function NotFoundDialog(props) {
  return (
    <Dialog
      open={true}
      style={{ padding: 60, overflow: "none", justifyContent : "flex" }}
    >
      <DialogContent>
        <div>
          <h3 className="h1-title-style">
           No results found for '{props.name}'
          </h3>
        </div>
        <CardActions>
        <Button
        variant="contained"
        color="secondary"
        onClick={() => {
            props.handle();
        }}
      >
      OK
      </Button>
        </CardActions>
      </DialogContent>
    </Dialog>
  );
}
