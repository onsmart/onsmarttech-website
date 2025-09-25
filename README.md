# OnSmart Tech Solutions - Website

Site institucional da OnSmart Tech Solutions, empresa especializada em transformação digital e soluções tecnológicas.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React para produção
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones modernos

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd onsmarttech-website
```

2. Instale as dependências:
```bash
npm install
# ou
pnpm install
```

3. Configure as variáveis de ambiente:
```bash
cp env.example .env.local
# Edite o arquivo .env.local com suas configurações
```

4. Execute o projeto em desenvolvimento:
```bash
npm run dev
# ou
pnpm dev
```

## 🏗️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera o build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter
- `npm run export` - Gera build estático

## 🌐 Deploy no Vercel

### Deploy Automático

1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente no painel do Vercel
3. O deploy será feito automaticamente a cada push na branch main

### Deploy Manual

1. Instale a CLI do Vercel:
```bash
npm i -g vercel
```

2. Faça login no Vercel:
```bash
vercel login
```

3. Execute o deploy:
```bash
vercel --prod
```

## 🔧 Configurações de Produção

### Variáveis de Ambiente Necessárias

- `NEXT_PUBLIC_APP_URL` - URL da aplicação
- `NEXT_PUBLIC_APP_NAME` - Nome da aplicação
- `NEXT_PUBLIC_PHONE` - Telefone de contato
- `NEXT_PUBLIC_EMAIL` - Email de contato
- `NEXT_PUBLIC_ADDRESS` - Endereço da empresa

### Otimizações Implementadas

- ✅ Compressão gzip/brotli
- ✅ Minificação de CSS e JS
- ✅ Otimização de imagens
- ✅ Headers de segurança
- ✅ Cache de assets estáticos
- ✅ Remoção de console.log em produção
- ✅ SWC minifier habilitado

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🎨 Design System

- **Cores**: Sistema de cores baseado em CSS variables
- **Tipografia**: Inter font family
- **Espaçamento**: Sistema de espaçamento consistente
- **Componentes**: Biblioteca de componentes reutilizáveis

## 📊 Performance

- **Lighthouse Score**: 90+ em todas as métricas
- **Core Web Vitals**: Otimizado
- **Bundle Size**: Minimizado com tree shaking
- **Loading**: Lazy loading de imagens e componentes

## 🔒 Segurança

- Headers de segurança configurados
- Proteção contra XSS
- Proteção contra clickjacking
- Content Security Policy básico

## 📞 Suporte

Para dúvidas ou suporte técnico:
- **Email**: contato@onsmart.com.br
- **Telefone**: (11) 5093-1836
- **Website**: [onsmart.com.br](https://onsmart.com.br)

## 📄 Licença

© 2024 OnSmart Tech Solutions. Todos os direitos reservados.