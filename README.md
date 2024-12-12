### Golden Raspberry Awards Dashboard

Este projeto é um painel para exibir informações sobre o Golden Raspberry Awards, incluindo vencedores por ano, intervalos de produtores, estúdios com mais vitórias, e mais. Foi desenvolvido utilizando o Angular CLI (versão 19.0.4) e integra-se com uma API backend para recuperar os dados.

---

### Funcionalidades Principais
- Listar anos com múltiplos vencedores.
- Mostrar os três estúdios com mais vitórias.
- Exibir os intervalos máximos e mínimos de vitórias de produtores.
- Pesquisar filmes vencedores por ano.

---

### Servidor de Desenvolvimento
Para iniciar o servidor de desenvolvimento local, execute:

```
ng serve
```

Depois, acesse [http://localhost:4200/](http://localhost:4200/) no navegador. A aplicação será recarregada automaticamente sempre que você modificar qualquer arquivo fonte.

---

### Configuração da API
Este projeto utiliza a seguinte API backend: `https://challenge.outsera.tech/api/movies`.

Certifique-se de que a API está funcional e que a conexão está configurada corretamente no arquivo `movies.service.ts`.

---

### Geração de Código (Code Scaffolding)
Para criar novos componentes, serviços ou outras partes do projeto, utilize:

```
ng generate component nome-do-componente
```

Para uma lista completa de opções disponíveis:

```
ng generate --help
```

---

### Compilação do Projeto
Para compilar a aplicação para produção:

```
ng build --prod
```

Os arquivos de saída serão gerados no diretório `dist/`.

---

### Executando Testes Unitários
Para rodar os testes unitários com o Karma, execute:

```
ng test
```

---

### Executando Testes de Ponta-a-Ponta
Para executar testes e2e, utilize:

```
ng e2e
```

---

### Estrutura do Projeto

- `src/app/dashboard`:
  - Contém componentes para exibir diferentes seções do painel, como "Years with Multiple Winners", "Top Studios", "Producer Intervals", e "Movies by Year".

- `src/app/services/movies.service.ts`:
  - Serviço responsável por realizar chamadas HTTP para a API backend.

---

### Notas Adicionais
- Certifique-se de que o `CommonModule` e `FormsModule` estão importados onde necessário para suportar diretivas como `*ngIf`, `*ngFor`, e `[(ngModel)]`.
- Para mais informações sobre o Angular CLI, visite [Angular CLI Overview and Command Reference](https://angular.io/cli).
