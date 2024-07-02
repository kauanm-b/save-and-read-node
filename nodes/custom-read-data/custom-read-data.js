const fs = require('fs');
const path = require('path');

module.exports = function (RED) {
    function CustomReadDataNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function (msg) {
            var filePath = path.join(config.folderPath, config.fileName);
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    node.error("Error reading data: " + err.message);
                    node.status({ fill: "red", shape: "ring", text: "error" });
                } else {
                    var parsedData = JSON.parse(data);
                    config.variables.split(',').forEach(variable => {
                        RED.util.setMessageProperty(msg, variable.trim(), parsedData[variable.trim()]);
                    });
                    node.status({ fill: "green", shape: "dot", text: "read" });
                    node.send(msg);
                }
            });
        });
    }
    RED.nodes.registerType("custom-read-data", CustomReadDataNode);
}
