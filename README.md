# Portfólio — André Abrão

Portfólio estático de landing pages e desenvolvimento front-end, construído com HTML, CSS e JavaScript puro.

## Executar localmente

Você pode abrir `index.html` diretamente ou servir a pasta com qualquer servidor HTTP estático.

Exemplo com Python:

```bash
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## Publicar no GitHub

No Windows, execute `publicar-github.bat`. O script:

1. verifica se o Git está instalado;
2. inicializa o repositório, se necessário;
3. respeita o `.gitignore` para não enviar dependências e caches;
4. cria um commit;
5. envia a branch `main` para o GitHub.

O endereço padrão configurado é `https://github.com/andreabrao/portifolio.git`. Se ainda não houver um remoto `origin`, o script permite informar outro endereço.

Para o primeiro deploy, confirme em **Settings → Pages** do repositório que a publicação usa a branch `main` e a pasta `/ (root)`.
