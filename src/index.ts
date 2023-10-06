import { Assalariado } from "./model/Assalariado";
import { Comissionado } from "./model/Comissionado";
import { Horista } from "./model/Horista";

const a1 = new Assalariado (`ana maria`, `40028922`, 1989);
a1.setNome(``);
a1.setCpf(``);
a1.setSalario(2000);
console.log(`Nome: ${a1.getNome()} CPF: ${a1.getCpf()}`);
console.log(`Salario: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);

const c1 = new Comissionado (`Claudinho`,`997237654`, 4000, 0.10);
c1.setNome(``);
c1.setCpf(``);
c1.setTotalVendas(3500);
c1.setTaxaComissao(0.09);
console.log(`Nome: ${c1.getNome()}, CPF: ${c1.getCpf()}`);
console.log(`Salario: ${c1.getTaxaComissao()}`);
console.log(`Vencimento: ${c1.vencimento()}`);

const h1 = new Horista (`Breno`, `081408140814`, 2, 25);
h1.setNome(``);
h1.setCpf(``);
h1.setValorHora(4);
h1.setHorasTrabalhadas(50);
console.log(`Nome: ${h1.getNome()}`, `CPF: ${h1.getCpf()}`);
console.log(`Valor da Hora: ${h1.getValorHora()}`);
console.log(`Horas Trabalhadas: ${h1.getHorasTrabalhadas()}`);
