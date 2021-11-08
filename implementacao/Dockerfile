#Define a imagem a ser utilizada/baixada
FROM node:16

# Cria o diretório para trabalhar [defina pela sua preferência]
WORKDIR /home/app

# Copia e instala, primeiramente, as dependências dos packages. Se estiver em produção use "RUN npm ci --only=production"
COPY package*.json ./
RUN npm install

# Copia o resto dos arquivos, excluindo os detalhados no dockerignore
COPY . .

# Projeta a aplicação na porta definida abaixo
EXPOSE 3333

# Define o comando que starta a aplicação (especificado no package.json)
CMD [ "npm", "start" ]

# $docker build -t hrezend/challenge-coodesh2021 . (constroi/baixa a imagem)
# $docker images (checa todas as imagens)
# $docker run -p 3333:3333 -d hrezend/challenge-coodesh2021 (cria o container)
# $docker ps (checa todos os containers)
# $docker stop XXX (pausa um container)
# $docker rm XXX (remove um container)
# $docker system prune (remove todos os containers parados)
# $sudo chown $USER /var/run/docker.sock  (dar permissoes para usar o docker-compose)
# $docker-compe up (facilita o docker run)
# Mais informações: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/