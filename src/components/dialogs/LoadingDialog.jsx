import React from "react";
import { CircularProgress, Dialog, DialogContent } from "@material-ui/core";

export default function LoadingDialog() {
  return (
    <Dialog
      open={true}
      style={{ padding: 60, overflow: "none", justifyContent : "flex" }}
    >
      <DialogContent>
        <div>
          <h3 className="h1-title-style">
            Loading, Please Wait...
          </h3>
          <CircularProgress
          style = {{
              width: '25%',
              height: '25%',
              marginLeft : '35%'
          }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
