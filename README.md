# Save and Read Custom Data

This package contains custom nodes for Node-RED that allow saving and reading data in JSON files.

## Nodes

### custom-save-data

Saves specified data into a JSON file.

#### Configuration
- `folderPath`: Path to the folder where the file will be saved.
- `fileName`: Name of the file.
- `variables`: List of variables to be saved.

### custom-read-data

Reads data from a JSON file and injects it into the message.

#### Configuration
- `folderPath`: Path to the folder where the file is located.
- `fileName`: Name of the file.
- `variables`: List of variables to be read.

## Installation

```bash
npm install save-and-read-custom-data
