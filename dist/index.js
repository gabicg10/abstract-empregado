"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Assalariado_1 = require("./model/Assalariado");
const a1 = new Assalariado_1.Assalariado(`ana maria`, `40028922`, 1989);
a1.setNome(``);
a1.setCpf(``);
a1.setSalario(2000);
console.log(`Nome: ${a1.getNome()} CPF: ${a1.getCpf()}`);
console.log(`Salario: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);
//# sourceMappingURL=index.js.map