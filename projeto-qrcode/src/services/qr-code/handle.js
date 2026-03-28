import qr from "qrcode-terminal";
import chalk from "chalk";
import fs from 'fs';
import prompt from "prompt";
import promptSchemaSaveQRCode from "../../prompts-schema/prompt-schema-save-qrcode-file.js";

async function handle(err, result) {
  if (err) {
    console.log("error on application");
    return;
  }

  const isSmall = result.type == 2;

  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green("QR Code gerado com sucesso:\n"));
    console.log(qrcode);

    prompt.get(promptSchemaSaveQRCode, (saveError, saveResult) => {
      if (saveError) {
        console.error("Erro ao processar o salvamento do QR Code:", saveError);
        return;
      }

      //console.error("saveResult.select:", saveResult.select);

      if (saveResult.select == 1) {
        const fileName = 'qrcode.txt';
        fs.writeFile(fileName, qrcode, (writeError) => {
          if (writeError) {
            console.error("Error writing file:", writeError);
          } else {
            console.log(chalk.green(`QR Code salvo em ${fileName}`));
          }
        });
      }
    });
  });
}

export default handle;
