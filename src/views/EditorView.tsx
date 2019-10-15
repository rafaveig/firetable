import React, { Component } from "react";
import { GEditor, GBlock, GComponent } from "grapesjs-react";
import "grapesjs/dist/css/grapes.min.css";

class SimpleBlock extends GBlock {
  content = `<div class="simple-block"> This is a simple block </div>`;

  constructor() {
    super("simple-block", "Simple Block");
  }
}

class GEditorExample extends Component {
  render() {
    return (
      <GEditor
        id="editor"
        blocks={[new SimpleBlock()]}
        plugins={[
          (props: any) => {
            console.log(props);
          },
        ]}
        webpage={true}
      />
    );
  }
}

export default GEditorExample;
