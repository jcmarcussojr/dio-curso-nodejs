import chalk from "chalk";

const promptSchemaSaveQRCode = [
  {
    name: "select",
    description: chalk.magenta.bold(
      "Deseja salvar o QR Code em um arquivo? (1 - Sim ou 2 - Não"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true,
  },
];

export default promptSchemaSaveQRCode;
