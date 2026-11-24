// Edit this file to change what appears on your site.
// Everything here is placeholder text: replace it with your own.

export const profile = {
  name: 'Your Name',
  role: 'Software developer',
  summary:
    'I build web applications and care about code that is secure, tested, and easy to maintain. Add one or two sentences here about what you are looking for.',
  email: 'you@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://www.linkedin.com/in/your-username',
}

export const projects = [
  {
    title: 'Login attempt logger',
    description:
      'A web app with password-protected pages and a database that records every login attempt, including failures, with automatic lockout after repeated failures. Describe what you learned or a problem you solved.',
    stack: ['Python', 'Flask', 'SQLite'],
    links: [{ label: 'Source code', url: 'https://github.com/your-username/login-logger' }],
  },
  {
    title: 'Cornerstone Christian Bookstore website',
    description: 'Redesign of a local bookstore\'s site, with live open/closed hours and a mobile-friendly layout. Describe what you changed and why.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: [{ label: 'Live site', url: `${import.meta.env.BASE_URL}cornerstone/index.html` }],
  },
]

export const about = [
  'Write a short paragraph about your background: school, past roles, or what got you into building software.',
  'Add a second paragraph about what you are working on now or what you are looking for in your next role.',
]

export const skills = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'SQL'] },
  { group: 'Frameworks and tools', items: ['React', 'Flask', 'Git', 'GitHub Actions'] },
]
