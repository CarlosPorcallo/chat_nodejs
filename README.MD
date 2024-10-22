# Curso NodeJS - Práctica 3: Chat

## Getting Started

Primero, hay que instalar las dependencias del proyecto:

```bash
npm install
```

Se crea un archivo dotenv `.env`usando el template de ejemplo:
```code
PORT_SOCKET=3000
PORT_SERVER=3001
HOST="localhost"
VERSION="v1"

MONGO_URI="<query string mongo>"
MONGO_DB="p4_chat"
MONGO_MSG_COLLECTION="mensajes"
MONGO_USR_COLLECTION="usuarios"
MONGO_TKN_COLLECTION="valid_tokens"
DEFAULT_USER_PASSWORD="password123"
TTL_JWT=1800 # 30 minutos
TTL_JWT_STR="30m" # 30 minutos
```

Una vez que se cumplen los requisitos se puede ejecutar el oproyecto:

```bash
npm run start
```

Abrir [http://localhost:3001/api/v1](http://localhost:3001/api/v1) con el navegador web para acceder a la documentación Swagger de la API del chat.

Abrir [http://localhost:3000](http://localhost:3000) con el navegador web para acceder al chat.