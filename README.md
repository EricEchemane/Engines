# Engines

Scaffolds NextJs API Route handlers in NestJs-like structure with react-query integration. Generate controllers, validation, DTOs and hooks.

## Installation

1. Install dependencies

```
npm i next-api-decorators class-validator class-transformer path-to-regexp @tanstack/react-query
```

2. Setup your QueryClientProvider. See [@tanstack/react-query docs]()
3. Set `"experimentalDecorators": true,` in `tsconfig.json`

```json
{
	"compilerOptions": {
		"experimentalDecorators": true,
		...
	},
}
```

## Usage

### Create engine

Generates Data Transfer Objects (DTO), REST Endpoints inside /page/api folder
