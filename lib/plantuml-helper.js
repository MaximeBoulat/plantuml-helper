'use babel';

import { CompositeDisposable } from 'atom'

export default {

  subscriptions: null,

  activate() {
    this.subscriptions = new CompositeDisposable()

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'plantuml-helper:fetch': () => this.fetch()
    }))
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  fetch() {

    
    const { exec } = require("child_process");

    exec("pwd", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }


        editor = atom.workspace.getActiveTextEditor()?.getPath()
        file = editor?.buffer?.file
        filepath = file?.path

        console.log(`file path: ${filepath}`);
    });


  }
};