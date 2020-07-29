# tu2bo-web-interface
TúTubo - Web Interface

## About
Tutubo Web Interface es la herramienta a través de la cual se puede monitorear a los diferentes servicios core y ver estadísticas relacionadas al negocio (tanto actuales como históricas). Ofrece también funcionalidades de moderador, para poder regular los videos y usuarios de la plataforma.

## Development

## Build y corrida

Para buildear y levantar la interfaz web hay que correr los siguientes comandos:

```
npm install
npm start
```

### Deployment

Una vez mergeado a master el deploy se hace de manera automática.

Si se quisiera deployar la versión de una branch específica antes de mergear a master se deberían seguir los siguientes pasos:

1. Loguearse a Heroku (prompt en browser): `heroku login`
2. Deployar desde una branch específica: `git push -f heroku <nombre_branch>:master`
