export const code = `
<html>
  <head>
    <title>HTML Sample</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <style type="text/css">
      h1 {
        color: #CCA3A3;
      }
    </style>
    <script type="text/javascript">
      alert("I am a sample... visit devChallengs.io for more projects");
    </script>
  </head>
  <body>
    <h1>Heading No.1</h1>
    <input disabled type="button" value="Click me" />
  </body>
</html>
`;

export const themeOptions = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
];

export const langOptions = [
  { label: "JavaScript", value: "jsx" },
  { label: "TypeScript", value: "tsx" },
  { label: "Go", value: "go" },
  { label: "Python", value: "python" },
  { label: "Java", value: "java" },
  { label: "Ruby", value: "ruby" },
  { label: "Swift", value: "swift" },
  { label: "C#", value: "csharp" },
  { label: "PHP", value: "php" },
  { label: "Rust", value: "r" },
  { label: "Kotlin", value: "kotlin" },
  { label: "HTML", value: "html" },
  { label: "CSS", value: "css" },
  { label: "Scala", value: "scala" },
  { label: "Perl", value: "perl" },
  { label: "Shell", value: "shell" },
  { label: "SQL", value: "sql" },
  { label: "Groovy", value: "groovy" },
  { label: "Lua", value: "lua" },
  { label: "R", value: "r" },
];

export function generateUniqueId() {
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).substr(2, 4); // Adjust length as needed
  const uniqueId = timestamp + randomString;

  return uniqueId.substr(0, 8);
}
