# Save and Read Custom Data

Este pacote contém nodes personalizados para o Node-RED que permitem salvar e ler dados em arquivos JSON.

## Nodes

### custom-save-data

Salva dados especificados em um arquivo JSON.

#### Configuração
- `folderPath`: Caminho para a pasta onde o arquivo será salvo.
- `fileName`: Nome do arquivo.
- `variables`: Lista de variáveis a serem salvas.

### custom-read-data

Lê dados de um arquivo JSON e os injeta na mensagem.

#### Configuração
- `folderPath`: Caminho para a pasta onde o arquivo está localizado.
- `fileName`: Nome do arquivo.
- `variables`: Lista de variáveis a serem lidas.

## Instalação

```bash
npm install save-and-read-custom-data
