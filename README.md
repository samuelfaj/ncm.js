# ncm.js
Checa se um NCM é valido para a receita federal com base na tabela em excel disponbilizada por eles no site http://www.nfe.fazenda.gov.br/

Versão da tabela: Tabela NCM 2022 com Utrib_Comércio Exterior_vigência  01042022- v 07.12.21.xlsx

Retirada de: http://www.nfe.fazenda.gov.br/portal/listaConteudo.aspx?tipoConteudo=/NJarYc9nus=

# Instalação

```
npm i ncm.js
```


# Uso
```js
const ncm_valid = require('ncm.js');
console.log(ncm_valid(`96180000`)); // True
```