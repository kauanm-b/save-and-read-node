const fs = require('fs');
const path = require('path');

module.exports = function (RED) {
    function CustomSaveDataNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function (msg) {
            var dataToSave = {};
            config.variables.split(',').forEach(variable => {
                dataToSave[variable.trim()] = RED.util.getMessageProperty(msg, variable.trim());
            });

            var filePath = path.join(config.folderPath, config.fileName);
            fs.writeFile(filePath, JSON.stringify(dataToSave), 'utf8', function (err) {
                if (err) {
                    node.error("Error saving data: " + err.message);
                    node.status({ fill: "red", shape: "ring", text: "error" });
                } else {
                    node.status({ fill: "green", shape: "dot", text: "saved" });
                    node.send(msg);
                }
            });
        });
    }
    RED.nodes.registerType("custom-save-data", CustomSaveDataNode);
}
