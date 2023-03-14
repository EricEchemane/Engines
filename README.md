# Engines

Scaffolds NextJs API Route handlers in NestJs-like structure with react-query integration. Generate controllers, validation, DTOs and hooks.

## Installation

1. install globally in your system

```
npm i @echemane/engines
```

2. Install dependencies inside your current working directory

```
npm i next-api-decorators class-validator class-transformer path-to-regexp @tanstack/react-query
```

3. Setup your QueryClientProvider. See [@tanstack/react-query docs]()
4. Set `"experimentalDecorators": true,` in `tsconfig.json`

```json
{
	"compilerOptions": {
		"experimentalDecorators": true,
		...
	},
}
```

## Usage

### `engine create <name>`

Generates engine which consist of the following; Data Transfer Objects (DTO) and REST Endpoints inside /page/api folder. See example below.

```
engine create product
```

### Generate react-query hooks using `--hooks or -h` option

example:

```
engine create product -h
```

### `engine guard <name>`

Generates next-api-decorator guard.
example:

```
engine guard auth
```

This will generate `AuthGuard` inside src/engines/guards
