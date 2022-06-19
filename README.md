# plantuml-helper

This package offers a simple way to invoke the plantuml rendering action straight from the editor. It uses the plantuml.jar which is embedded as part of the package and therefore requires that java be installed locally. 

To use: select a file that contains source code for a plantuml diagram in Atom and select "Render diagram" from the Package menu or use the sontrol-option-o shortcut. The script will generate a png file for the diagram (using the same file name) and place it in the same folder as the source file.