export * from './logger.js';
export * from './scaffold.js';

export function totTitleCase(s: string) {
	const lower = s.toLowerCase();
	return lower.charAt(0).toUpperCase() + lower.slice(1);
}
