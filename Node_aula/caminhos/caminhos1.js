// "." => Significa que é na mesma pasta.
// ".." => Significa volta uma pasta.
// "../../" => Significa voltar duas pastas.
// "./folder/" => Significa entrar em uma pasta.
// "../out/" => Significa volta uma pasta e entra em outra.
// "./file.js" => Significa acessar um arquivo.
// "./folder/files.js" => Significa acessar um arquivbo dentro de uma pasta.
// "../folder/files.js" => Signifia voltar uma pasta, entrar em outra pasta e acessar um arquivo.
// "../../files.js" => Significa volar duas pastas e acessar um arquivo.


//import { sub } from "./functions/math/sub.js"
//import { sum } from "./functions/math/sum.js"
//import { fixedSum } from "./utils/fixed.js"

//console.log(sum(1, 5))
//console.log(sub(5, 1))
//console.log( fixedSum(23.987, 82.962))

import { exec } from "./commands/public/exerc.js";
exec("Israel");
