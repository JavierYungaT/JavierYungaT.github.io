/**
 * Hash corto y estable (FNV-1a de 32 bits) para decorar cada entrada de
 * experiencia como si fuera un commit. Siempre devuelve 7 caracteres hex.
 */
export function commitHash(input: string): string {
  let hash = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(16).padStart(8, '0').slice(0, 7);
}
