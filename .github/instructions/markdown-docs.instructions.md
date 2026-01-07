---
applyTo: "**/*.md,.github/ISSUE_TEMPLATE/**"
---

# Markdown and Documentation Guidelines

## Markdown Formatting

### Consistency is Key
- Maintain consistent formatting throughout the document
- Use the same style for similar elements (headers, lists, code blocks)
- Check that all list items follow the same pattern

### Lists and Bullet Points
- Always use consistent punctuation (or lack thereof) across list items
- For key-value pairs in lists, always include a colon after the key:
  ```markdown
  ✅ Correct:
  - OS: [e.g. Windows, macOS, Linux]
  - Browser: [e.g. Chrome, Safari]
  - Version: [e.g. 22]
  
  ❌ Incorrect:
  - OS: [e.g. Windows, macOS, Linux]
  - Browser [e.g. Chrome, Safari]  ← Missing colon
  - Version [e.g. 22]                ← Missing colon
  ```

### Issue Templates
- Ensure examples in placeholders match the context:
  - Desktop OS: Windows, macOS, Linux (NOT iOS/Android)
  - Mobile OS: iOS, Android (NOT Windows/macOS/Linux)
- Use consistent formatting for all fields within a section
- Include colons after field names for key-value pairs
- Keep placeholder text clear and relevant

### Code Blocks
- Always specify the language for syntax highlighting
- Use consistent indentation (2 or 4 spaces, not mixed)
- Include explanatory comments for complex code examples

### Headers
- Use ATX-style headers (#, ##, ###) consistently
- Leave blank lines before and after headers
- Don't skip header levels (e.g., don't go from # to ###)

### Links
- Use descriptive link text, not "click here"
- Prefer reference-style links for repeated URLs
- Ensure all links are valid and accessible

## Documentation Best Practices

### README.md
- Keep project setup instructions up to date
- Include prerequisites clearly
- Provide working examples
- Maintain a clear structure: Overview → Setup → Usage → Contributing

### Comments
- Write comments for "why", not "what"
- Keep comments up to date with code changes
- Remove commented-out code before committing

### Commit Messages
- Use present tense ("Add feature" not "Added feature")
- Be concise but descriptive
- Reference issue numbers when applicable

## Common Mistakes to Catch

When reviewing markdown files, watch for:
1. Missing colons in key-value list items
2. Inconsistent formatting within the same section
3. Example values that don't match the field context
4. Broken or missing links
5. Inconsistent header styles
6. Missing language specifiers in code blocks
7. Trailing whitespace or inconsistent line endings
