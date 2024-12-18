# Étape 1 : Construire l'application Angular
FROM node:18 AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers
COPY . .

# Construire l'application Angular
RUN npm run build --prod

# Étape 2 : Configurer Apache pour servir l'application Angular
FROM httpd:2.4

# Copier les fichiers Angular générés dans le répertoire Apache
COPY --from=builder /app/dist/la-ferme-des-mielles/usr/local/apache2/htdocs/

# Exposer le port 80 pour Apache
EXPOSE 80

# Démarrer Apache
CMD ["httpd-foreground"]
