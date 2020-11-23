# testes-unitarios
Estudos de testes unitários utilizando JavaScript com Mocha e Chai para o Programa de Mentoria Sensedia.

#### Aprendizados
* Mocha - test framework
* Chai - assertions library  
* `npm install chai mocha --save-dev`
. --save-dev salva como devDependencies

* colocar no package.json, scritp de 'test' = 'mocha'
* roda com `npm run test  `

##### Testes Unitários
* geralmente é sinônimo de teste automatizado
* pode ser chamado de teste na memória. O que será testado é pequeno e interno (não faz integrações ou conexão com bd - caso precise, usar mocks)
* quando usar:
. tudo que tem inteligência (ex.: fórumulas, parseamentos, ifs, etc)
. aplicações grandes
* quando não usar:
. tudo que tem não inteligência (ex.: DAOs (só faz query))		
* vantagens:
. dá pra ter entendimento do código só vendo os testes
. escrito testes para todas as partes, quando alguma alteração quebrar a aplicação, será facilmente encontrado o problema
		
* desvantagens:
.  às vezes não dá pra avaliar todo caminho de execução
. não cobre erros de integração