# Основа образа для сборки приложения
FROM node:14.17 as build

ARG NODE_AUTH_TOKEN

WORKDIR /app

ENV REACT_APP_SENTRY_DSN=<%REACT_APP_SENTRY_DSN-%>
ENV REACT_APP_GA_TRACKER_ID=<%REACT_APP_GA_TRACKER_ID-%>
ENV REACT_APP_GA_OPT_CONTAINER_ID=<%REACT_APP_GA_OPT_CONTAINER_ID-%>

# configuration file .npmrc will be created automatically in github.actions
RUN echo "@happynumbers:registry=https://verdaccio-uchi.runit.cc/" >> .npmrc
RUN echo "//verdaccio-uchi.runit.cc/:_authToken=${NODE_AUTH_TOKEN}" >> .npmrc

ADD package.json yarn.lock /app/
RUN yarn install --frozen-lockfile --ignore-scripts
RUN rm -f .npmrc
COPY . .
RUN yarn build
COPY . /app

# Основа образа для запуска приложения
FROM uchiru/spa-base:v0.9

# !!! Тут нужно прописать путь к приложению от корня
ENV BASE_PATH=/
# !!! Тут нужно прописать название приложения (обычно равно названию репы)
ENV APP_NAME=happynumbers-vitejs-react

# Копируем результат сборки в образ для запуска
COPY --from=build /app/build /var/www
