# Dependências de terceiros, servidas do próprio repositório

## Por que não vem mais de CDN

O `index.html` carregava o cliente Supabase assim:

```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"></script>
```

Três problemas, em ordem de gravidade:

1. **Faixa flutuante.** `@2` resolve para a última 2.x *no momento da
   requisição*. O código que roda no navegador do aluno podia mudar sem
   nenhum commit aqui — e sem nada no histórico explicando por quê, se
   alguma coisa quebrasse.
2. **Sem verificação de integridade.** Nenhum `integrity`. Um
   comprometimento do CDN executaria código arbitrário com acesso à
   sessão autenticada de todo mundo.
3. **Ponto único de falha externo.** jsDelivr fora do ar = site fora do
   ar, porque `js/supabase-client.js` chama `window.supabase.createClient`
   logo no boot.

Vendorizar resolve os três de uma vez, e ainda permite que o service
worker guarde o arquivo em cache — o app não abriria sem rede se este
script viesse de fora.

Nota: o próprio jsDelivr avisa, no cabeçalho do arquivo, que **não** se
deve usar SRI com URL de faixa flutuante — porque o conteúdo muda. Ou
seja, integridade e faixa flutuante são incompatíveis por construção.

## O que está aqui

| Arquivo | Versão | SHA-256 |
| --- | --- | --- |
| `supabase-2.112.1.min.js` | 2.112.1 | `6ce78333437820a2d6d4a1cd5f69fdfe7922a4e3d691766248c71682ee806228` |

Origem:
`https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.112.1/dist/umd/supabase.min.js`

## Como atualizar

Atualizar é um ato deliberado, não um efeito colateral. Passos:

```bash
# 1. Ver qual versão o "@2" resolve hoje
curl -s "https://data.jsdelivr.com/v1/packages/npm/@supabase/supabase-js/resolved?specifier=2"

# 2. Baixar a versão exata (troque X.Y.Z)
curl -o js/vendor/supabase-X.Y.Z.min.js \
  "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@X.Y.Z/dist/umd/supabase.min.js"

# 3. Registrar o hash nesta tabela
sha256sum js/vendor/supabase-X.Y.Z.min.js
```

Depois: aponte o `<script>` do `index.html` para o arquivo novo, apague o
antigo, e rode `node scripts/versionar.js`.

Confira o *changelog* do Supabase antes de subir — este arquivo é
carregado no boot de todos os usuários, e a autenticação depende dele.
Vale testar login, cadastro e uma resposta de questão (que exercita a
fila de escrita) antes de publicar.
