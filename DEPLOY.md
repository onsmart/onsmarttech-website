# 🚀 Guia de Deploy - OnSmart Tech Website

Este guia contém todas as instruções necessárias para fazer o deploy do site da OnSmart Tech no Vercel.

## 📋 Pré-requisitos

- ✅ Conta no GitHub
- ✅ Conta no Vercel
- ✅ Projeto configurado localmente
- ✅ Todos os arquivos de configuração criados

## 🔧 Configurações Preparadas

### Arquivos Criados/Configurados:

1. **`.gitignore`** - Ignora arquivos desnecessários
2. **`vercel.json`** - Configurações específicas do Vercel
3. **`package.json`** - Atualizado com nome e scripts corretos
4. **`next.config.mjs`** - Otimizado para produção
5. **`env.example`** - Exemplo de variáveis de ambiente
6. **`README.md`** - Documentação completa do projeto

## 🌐 Deploy no Vercel

### Método 1: Deploy Automático (Recomendado)

1. **Conecte o Repositório**:
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Conecte sua conta do GitHub
   - Selecione o repositório `onsmarttech-website`

2. **Configure o Projeto**:
   - Framework: Next.js (detectado automaticamente)
   - Root Directory: `./` (padrão)
   - Build Command: `npm run build` (automático)
   - Output Directory: `.next` (automático)
   - Install Command: `npm install` (automático)

3. **Variáveis de Ambiente**:
   ```
   NEXT_PUBLIC_APP_URL=https://onsmarttech.vercel.app
   NEXT_PUBLIC_APP_NAME=OnSmart Tech Solutions
   NEXT_PUBLIC_PHONE=(11) 5093-1836
   NEXT_PUBLIC_EMAIL=contato@onsmart.com.br
   NEXT_PUBLIC_ADDRESS=São Paulo, SP
   ```

4. **Deploy**:
   - Clique em "Deploy"
   - Aguarde o build (2-3 minutos)
   - Acesse sua URL: `https://onsmarttech.vercel.app`

### Método 2: Deploy via CLI

1. **Instale a CLI do Vercel**:
   ```bash
   npm i -g vercel
   ```

2. **Login no Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

## ⚙️ Configurações Avançadas

### Domínio Personalizado

1. No painel do Vercel, vá em "Settings" > "Domains"
2. Adicione seu domínio personalizado
3. Configure os registros DNS conforme instruído

### Variáveis de Ambiente

Configure no painel do Vercel em "Settings" > "Environment Variables":

```env
# Obrigatórias
NEXT_PUBLIC_APP_URL=https://seu-dominio.com
NEXT_PUBLIC_APP_NAME=OnSmart Tech Solutions

# Opcionais
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=prj_xxxxxxxxxx
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/5511999999999
```

### Analytics

Para habilitar analytics do Vercel:
1. Vá em "Settings" > "Analytics"
2. Ative "Vercel Analytics"
3. A variável será configurada automaticamente

## 🔍 Verificações Pós-Deploy

### ✅ Checklist de Verificação

- [ ] Site carrega corretamente
- [ ] Todas as imagens estão funcionando
- [ ] Animações estão funcionando
- [ ] Menu mobile funciona
- [ ] Links de contato funcionam
- [ ] Site é responsivo em mobile
- [ ] Performance está boa (Lighthouse)
- [ ] SEO está configurado

### 🧪 Testes Recomendados

1. **Performance**:
   - Use o Lighthouse do Chrome DevTools
   - Score deve ser 90+ em todas as métricas

2. **Responsividade**:
   - Teste em diferentes tamanhos de tela
   - Verifique o menu mobile

3. **Funcionalidades**:
   - Teste todos os botões e links
   - Verifique as animações
   - Teste o scroll suave

## 🚨 Troubleshooting

### Problemas Comuns

**Build Falha**:
- Verifique se todas as dependências estão no `package.json`
- Confirme se não há erros de TypeScript
- Verifique os logs de build no Vercel

**Imagens Não Carregam**:
- Verifique se as imagens estão na pasta `public/`
- Confirme os caminhos das imagens no código

**Animações Não Funcionam**:
- Verifique se o Framer Motion está instalado
- Confirme se não há erros de JavaScript

**Site Não É Responsivo**:
- Verifique se o Tailwind CSS está configurado
- Confirme as classes de responsividade

### Logs de Debug

Para ver logs detalhados:
```bash
vercel logs [deployment-url]
```

## 📈 Otimizações Implementadas

### Performance
- ✅ Compressão gzip/brotli
- ✅ Minificação de CSS/JS
- ✅ Otimização de imagens
- ✅ Lazy loading
- ✅ Tree shaking

### Segurança
- ✅ Headers de segurança
- ✅ Proteção XSS
- ✅ Proteção clickjacking
- ✅ CSP básico

### SEO
- ✅ Meta tags otimizadas
- ✅ Structured data
- ✅ Sitemap automático
- ✅ Robots.txt

## 🔄 Deploy Contínuo

Após configurar o deploy automático:
- Cada push na branch `main` fará deploy automático
- Pull requests geram previews automáticos
- Deploys são versionados automaticamente

## 📞 Suporte

Em caso de problemas:
- **Email**: contato@onsmart.com.br
- **Telefone**: (11) 5093-1836
- **Documentação Vercel**: [vercel.com/docs](https://vercel.com/docs)

---

🎉 **Parabéns!** Seu site está no ar e pronto para receber visitantes!
