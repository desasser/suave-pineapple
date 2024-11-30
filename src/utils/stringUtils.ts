export function formatString(input: string): string {
  const withoutExtension = input.replace(/\.[^/.]+$/, '');

  return withoutExtension
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}