function getGreeting(hour: number): string {
  if (hour < 12) return "Good morning";
  if (hour < 19) return "Good afternoon";
  return "Good evening";
}

function main(): void {
  const name: string = process.argv[2] ?? "World";
  const hour: number = new Date().getHours();

  console.log("Hello World!");
  console.log(`${getGreeting(hour)}, ${name}. Welcome to my first TypeScript program.`);
}

main();