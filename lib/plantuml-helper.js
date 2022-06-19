'use babel';

import PlantumlHelperView from './plantuml-helper-view';
import { CompositeDisposable } from 'atom'

export default {

  messageView: null,
  modalPanel: null,
  subscriptions: null,
  notification: null,

  activate(state) {

    this.messageView = new PlantumlHelperView(state.testingViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.messageView.getElement(),
      visible: false
    });

    this.subscriptions = new CompositeDisposable()

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'plantuml-helper:fetch': () => this.fetch()
    }))
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  serialize() {
    return {
      testingViewState: this.messageView.serialize()
    };
  },

  fetch() {


    var activeTextEditor = atom.workspace.getActiveTextEditor();

    if (activeTextEditor == null) {
      console.log(`Text editor is null!!!`);
      this.showMessage(`No file selected, please select a plantuml text file.`);
      return;
    }

    console.log(`Text editor is not null!!!`);

    var filePath = activeTextEditor.getPath()

    console.log(`file path: ${filePath}`);

    // Get the path to the jar

    var jarPath = `/../vendor/plantuml-1.2022.5.jar`;
    jarPath = __dirname + jarPath;

    var fullCommand = `java -jar ${jarPath} ${filePath}`;

    const { exec } = require("child_process");


    exec(fullCommand, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        this.showMessage(error.message);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        this.showMessage(stderr);
        return;
      }

      console.log(`output: ${stdout}`);


    });


  },

  showMessage(message) {


    this.notification = atom.notifications.addWarning(message, {
      dismissable: true,
      buttons: []
    })

  }

};