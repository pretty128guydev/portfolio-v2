/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/common/libs/prisma';

type Data = {
  status: boolean;
  data?: any;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const response = {
      "pageProps": {
          "projects": [
              {
                  "id": 8,
                  "title": "aulianza.id",
                  "slug": "aulianza-id",
                  "description": "Personal website was built originally from scratch using several powerful stacks.",
                  "image": "https://cloud.aulianza.com/public/images/projects/aulianza.id.webp",
                  "link_demo": "https://aulianza.id",
                  "link_github": "https://github.com/aulianza/aulianza.id",
                  "stacks": "[\"Next.js\", \"React.js\", \"TypeScript\", \"TailwindCSS\", \"Prisma\", \"Firebase\"]",
                  "is_show": true,
                  "updated_at": "2023-07-24T12:29:09.882Z",
                  "content": "## Introduction\n\nThis website was meticulously crafted from the ground up using Next.js, along with various complementary technologies. Its inception dates back to June 2023.\n\nOngoing enhancements, encompassing both functionality and content, are in the pipeline. This website stands as a treasured repository of my acquired knowledge, also serving as a platform for me to disseminate insights.\n\nFeel welcome to utilize this website as a point of reference, a wellspring of inspiration, or as a template, all in accordance with the provided license. The source code is at your disposal to suit your specific requirements.\n\nShould you find value in this resource, your consideration of leaving a rating is greatly appreciated. 😎👍🏻\n\nIf you have any questions, suggestions, input or anything else, don't hesitate to contact me🧑‍💻\n<br /><br />\n\n## Features\n\nOn this website there are several features that will continue to be updated and added in the future.\n\n### 🤖 ChatGPT AI\n\nYou can access this feature by opening the command palette [cmd+k], then typing whatever you want to search/ask for.\n\nNote:\n\nIf you're using Chat Completions engine model of ChatGPT, please concern about this:\n\nDue this site is using free cloud hosting services (Vercel) with certain limitations (Serverless Function Execution Timeout), sometimes an error will occur if the response from the open AI API is too long, but you can change it in the vercel.json file to upgrade memory and maxDuration to be bigger according to the capabilities of your vercel plan.\n\n### 💻 JavaScript Playground\n\nA no-fuss pure JavaScript playground with a live feedback loop.\n\n### 💬 Real-time Chat\n\nReal-Time Chat is powered by Firebase. Anyone can leave me a message in this website.\n\n### 🎧 Spotify\n\nDisplays song information being played on spotify in real time using the Spotify API and SWR.\n\n### 🕗 Wakatime\n\nData is retrieved using the Wakatime API and then displayed on the dashboard, built with Next.js API routes deployed as serverless functions.\n\n### 📝 Blogs\n\nThe CMS Blog on this website utilizes the API from the dev.to platform. The displayed articles are one-to-one with the articles published on my dev.to blog and are updated in real-time.\n\nThe data fetching technique used to retrieve articles from dev.to involves using Client-Side Rendering (CSR) for the blog list and Server-Side Rendering (SSR) for the blog details.\n\n### 🗳 Projects\n\nThe data projects on this blog are taken from the MySQL database connected through the Prisma Client. The database for this application is hosted on PlanetScale DB.\n\nThe data fetching method used to retrieve data projects is Incremental Static Regeneration (ISR) with 1 second revalidation and Server-Side Rendering (SSR) for the project details..\n<br /><br />\n\n## Performance\n\n### PageSpeed Insights\n\nReport URL: https://pagespeed.web.dev/analysis/https-aulianza-id/pk0y6xcz25?form_factor=desktop\n\n![image](https://github.com/aulianza/aulianza.id/assets/15605885/d87a6083-caf3-4b84-ba59-975c07193a9f)\n\n### GTmetrix\n\nReport URL: [https://pagespeed.web.dev/analysis/https-aulianza-id/pk0y6xcz25?form_factor=desktop](https://gtmetrix.com/reports/aulianza.id/REEiduoo/)\n\n![image](https://github.com/aulianza/aulianza.id/assets/15605885/953dc131-bf52-4ef6-913c-f6eb8fb6c6a7)\n<br /><br />\n\n## Getting Started\n\nIf you are interested in running this project on your local machine, you can do so in just 3 easy steps below. Additionally, remember to update the \".env.example\" file to \".env\" and replace the variables with your own in the \".env\" file.\n\n### 1. Clone this template using one of the three ways:\n\n1. Clone using git\n\n   ```bash\n   git clone https://github.com/aulianza/aulianza.id\n   ```\n\n2. Using `create-next-app`\n\n   ```bash\n   npx create-next-app -e https://github.com/aulianza/aulianza.id project-name\n   ```\n\n3. Using `degit`\n\n   ```bash\n   npx degit aulianza/aulianza.id YOUR_APP_NAME\n   ```\n\n4. Deploy to Vercel or Netlify, etc\n\n   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/aulianza/aulianza.id)\n   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/aulianza/aulianza.id)\n\n### 2. Install dependencies\n\nIt is encouraged to use **yarn** so the husky hooks can work properly.\n\n```bash\nyarn install\n```\n\n### 3. Run the development server\n\nYou can start the server using this command:\n\n```bash\nyarn dev\n```\n\nOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.\n<br /><br />\n\n## License\n\nLicensed under the [GPL-3.0 license](https://github.com/aulianza/aulianza.id/blob/master/LICENSE).",
                  "is_featured": true
              },
              {
                  "id": 12,
                  "title": "aulianza.com",
                  "slug": "aulianza-com",
                  "description": "Personal landing page built with Next.js 13 App Router, TypeScript and Tailwind CSS.",
                  "image": "https://cloud.aulianza.com/public/images/projects/aulianza.com.webp",
                  "link_demo": "https://aulianza.com",
                  "link_github": "https://github.com/aulianza/aulianza.com",
                  "stacks": "[\"Next.js\", \"React.js\", \"TypeScript\", \"TailwindCSS\"]",
                  "is_show": true,
                  "updated_at": "2023-07-23T12:29:09.882Z",
                  "content": "## Introduction\n\nThis website was built from scratch using Next.js 13 App Router and was first initialized in August 2023. It will undergo regular updates in the future.\n<br /><br />\n\n## Performance\n\n### PageSpeed Insights : Desktop\n\nReport URL: https://pagespeed.web.dev/analysis/https-aulianza-com/ucae0fj9zq?form_factor=desktop\n\n<img width=\"907\" alt=\"image\" src=\"https://github.com/aulianza/aulianza.com/assets/15605885/0f3c3141-d038-4b1e-9408-c2b98ffc533e\">\n\n### PageSpeed Insights : Mobile\n\nReport URL: https://pagespeed.web.dev/analysis/https-aulianza-com/rnlhdur5ou?form_factor=mobile\n\n<img width=\"901\" alt=\"image\" src=\"https://github.com/aulianza/aulianza.com/assets/15605885/2207ab4f-a34d-4ce2-8712-3a8120e3f4ba\">\n<br /><br />\n\n## Getting Started\n\nIf you are interested in running this project on your local machine, you can do so in just 3 easy steps below. Additionally, remember to update the \".env.example\" file to \".env\" and replace the variables with your own in the \".env\" file.\n\n### 1. Clone this template using one of the three ways:\n\n1. Clone using git\n\n   ```bash\n   git clone https://github.com/aulianza/aulianza.com\n   ```\n\n2. Using `create-next-app`\n\n   ```bash\n   npx create-next-app -e https://github.com/aulianza/aulianza.com project-name\n   ```\n\n3. Using `degit`\n\n   ```bash\n   npx degit aulianza/aulianza.com YOUR_APP_NAME\n   ```\n\n4. Deploy to Vercel or Netlify, etc\n\n   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/aulianza/aulianza.com)\n   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/aulianza/aulianza.com)\n\n### 2. Install dependencies\n\nIt is encouraged to use **pnpm** so the husky hooks can work properly.\n\n```bash\npnpm install\n```\n\n### 3. Run the development server\n\nYou can start the server using this command:\n\n```bash\npnpm dev\n```\n\nOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.\n<br /><br />\n\n## License\n\nLicensed under the [GPL-3.0 license](https://github.com/aulianza/aulianza.com/blob/master/LICENSE).",
                  "is_featured": true
              },
              {
                  "id": 11,
                  "title": "Pomoro",
                  "slug": "pomoro",
                  "description": "Simple Pomodoro and Todo List App built with Next.js, TS, Tailwind CSS and Zustand.",
                  "image": "https://cloud.aulianza.com/public/images/projects/pomoro.webp",
                  "link_demo": "https://pomoro.vercel.app/",
                  "link_github": "https://github.com/aulianza/pomoro",
                  "stacks": "[\"Next.js\", \"React.js\", \"TypeScript\", \"TailwindCSS\"]",
                  "is_show": true,
                  "updated_at": "2023-07-20T12:29:09.882Z",
                  "content": null,
                  "is_featured": true
              },
              {
                  "id": 9,
                  "title": "Next + Tailwind Starter Template",
                  "slug": "aulianza-next-tailwind-starter",
                  "description": "Next.js + TS + Tailwind CSS starter template packed with useful development features.",
                  "image": "https://cloud.aulianza.com/public/images/projects/aulianza-next-tailwind-starter-new.webp",
                  "link_demo": "https://next-tailwind-starter.aulianza.id",
                  "link_github": "https://github.com/aulianza/next-tailwind-starter",
                  "stacks": "[\"Next.js\", \"React.js\", \"TypeScript\", \"TailwindCSS\"]",
                  "is_show": true,
                  "updated_at": "2023-06-25T04:17:44.339Z",
                  "content": "## Introduction\n\nIntroducing a simple Next.js with Typescript and Tailwind CSS starter template. This custom-made template has been carefully designed to simplify complex configurations and time-consuming setups, allowing developers (me; especially) to focus on my work effortlessly.\n\nIf you find this amazing creation valuable, you're invited to use it for your own projects. I warmly welcome any helpful feedback or suggestions you may have. You can easily make your own version by copying or downloading this code repository and contribute your own fantastic ideas by submitting a Pull Request.\n\n## Features\n\nThis repository is packed with:\n\n- 🎉 Next.js 13.4\n- ⚛️ React 18\n- 🔰 TypeScript\n- 💠 Tailwind CSS 3\n- 🛢 Jest — Configured for unit testing\n- 🧿 Absolute Import and Path Alias — Import components using `@/` prefix\n- 📏 ESLint — Find and fix problems in the code, also will **auto sort** the imports\n- ✨ Prettier — Format your code consistently\n- 🐶 Husky & Lint Staged — Run scripts on your staged files before committed\n- 📌 Conventional Commit Lint — Make sure to follow conventional commit\n- ♻️ Snippets — A collection of most useful snippets\n- 🌚 Dark Mode & Light Mode - Switch theme just one click\n\n\n## Getting Started\n\n### 1. Clone this template using one of the three ways:\n\n1. Use this repository as template\n2. Using `create-next-app`\n\n   ```bash\n   npx create-next-app -e https://github.com/aulianza/next-tailwind-starter project-name\n   ```\n\n3. Using `degit`\n\n   ```bash\n   npx degit aulianza/next-tailwind-starter YOUR_APP_NAME\n   ```\n\n4. Deploy to Vercel or etc\n\n   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/aulianza/next-tailwind-starter)\n\n### 2. Install dependencies\n\nIt is encouraged to use **yarn** so the husky hooks can work properly.\n\n```bash\nyarn install\n```\n\n### 3. Run the development server\n\nYou can start the server using this command:\n\n```bash\nyarn dev\n```\n\nOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.\n\n### 4. Change defaults\n\nThere are some things you need to change including title, urls, favicons, etc. Don't forget to change the package name in package.json\n\n### 5. Commit Message Convention\n\nThis starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.\n\n\n## License\n\nLicensed under the [MIT license](https://github.com/aulianza/next-tailwind-starter/blob/master/LICENSE).",
                  "is_featured": true
              },
              {
                  "id": 13,
                  "title": "FlexCode Company Profile",
                  "slug": "flexcode-v1",
                  "description": "A company profile website of PT Flexcode Space Teknologi.",
                  "image": "https://cloud.aulianza.com/public/images/projects/flexcodev1.webp",
                  "link_demo": "https://flexcode.co.id",
                  "link_github": null,
                  "stacks": "[\"Next.js\", \"React.js\", \"TypeScript\", \"TailwindCSS\"]",
                  "is_show": true,
                  "updated_at": "2023-10-16T06:53:48.320Z",
                  "content": null,
                  "is_featured": false
              },
              {
                  "id": 10,
                  "title": "Vite + React Starter Template",
                  "slug": "vite-react-starter",
                  "description": "Vite + React + TypeScript + Tailwind CSS starter template.",
                  "image": "https://cloud.aulianza.com/public/images/projects/aulianza-vite-react-starter-new.webp",
                  "link_demo": "https://vite-react-starter.aulianza.id",
                  "link_github": "https://github.com/aulianza/vite-react-starter",
                  "stacks": "[\"Vite\", \"React.js\", \"TypeScript\", \"TailwindCSS\"]",
                  "is_show": true,
                  "updated_at": "2023-07-05T10:40:41.055Z",
                  "content": "## Introduction\n\nIntroducing a simple Vite with React + Typescript and Tailwind CSS starter template. This custom-made template has been carefully designed to simplify complex configurations and time-consuming setups, allowing developers (me; especially) to focus on my work effortlessly.\n\nIf you find this amazing creation valuable, you're invited to use it for your own projects. I warmly welcome any helpful feedback or suggestions you may have. You can easily make your own version by copying or downloading this code repository and contribute your own fantastic ideas by submitting a Pull Request.\n\n## Features\n\nThis repository is packed with:\n\n- ⚡️ Vite 4.3\n- ⚛️ React 18\n- 🔰 TypeScript\n- 💠 Tailwind CSS 3\n- 🛢 Jest — Configured for unit testing\n- 🧿 Absolute Import and Path Alias — Import components using `@/` prefix\n- 📏 ESLint — Find and fix problems in the code, also will **auto sort** the imports\n- ✨ Prettier — Format your code consistently\n- 🐶 Husky & Lint Staged — Run scripts on your staged files before committed\n- 📌 Conventional Commit Lint — Make sure to follow conventional commit\n- ♻️ Snippets — A collection of most useful snippets\n- 🌚 Dark Mode & Light Mode - Switch theme just one click\n\n\n## Getting Started\n\n### 1. Clone this template using one of the three ways:\n\n1. Use this repository as template\n2. Using `degit`\n\n   ```bash\n   npx degit aulianza/vite-react-starter YOUR_APP_NAME\n   ```\n\n3. Deploy to Vercel or etc\n\n   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/aulianza/vite-react-starter)\n\n### 2. Install dependencies\n\nIt is encouraged to use **pnpm** so the husky hooks can work properly.\n\n```bash\npnpm install\n```\n\n### 3. Run the development server\n\nYou can start the server using this command:\n\n```bash\npnpm dev\n```\n\nOpen [http://localhost:5173](http://localhost:5173) with your browser to see the result. You can start editing the page by modifying `src/App.tsx`.\n\n### 4. Change defaults\n\nThere are some things you need to change including title, urls, favicons, etc. Don't forget to change the package name in package.json\n\n### 5. Commit Message Convention\n\nThis starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.\n\n\n## License\n\nLicensed under the [MIT license](https://github.com/aulianza/vite-react-starter/blob/master/LICENSE).",
                  "is_featured": false
              },
              {
                  "id": 3,
                  "title": "Astri Yulianti Portfolio Site",
                  "slug": "astri-yulianti-site",
                  "description": "Personal portfolio, integrated with Google Spreadsheet. Design inspired by...",
                  "image": "https://cloud.aulianza.com/public/images/projects/49094a50-c17f-4fe3-8bd1-1aef1b1ddb40.webp",
                  "link_demo": "https://astriyulianti.my.id",
                  "link_github": null,
                  "stacks": "[\"Next.js\", \"React.js\", \"JavaScript\", \"TailwindCSS\"]",
                  "is_show": true,
                  "updated_at": "2023-06-05T09:01:04.871Z",
                  "content": null,
                  "is_featured": false
              },
              {
                  "id": 7,
                  "title": "PLN Log Dispatcher",
                  "slug": "pln-dispatcher",
                  "description": "Log platform developed for PT PLN (Persero) UP2B Central Java & DIY.",
                  "image": "https://cloud.aulianza.com/public/images/projects/Logsheet-Online-Dispatcher-Material-Design-React-Admin-Template.webp",
                  "link_demo": null,
                  "link_github": null,
                  "stacks": "[\"Next.js\", \"React.js\", \"TypeScript\", \"Material UI\"]",
                  "is_show": true,
                  "updated_at": "2023-06-03T16:29:10.889Z",
                  "content": null,
                  "is_featured": false
              },
              {
                  "id": 6,
                  "title": "Mitech Career Platfrom",
                  "slug": "mitech-career",
                  "description": "A platform where you can find job opportunities at Mitech company.",
                  "image": "https://cloud.aulianza.com/public/images/projects/Mitech-Careers.webp",
                  "link_demo": "https://career.mitech.co.id/",
                  "link_github": null,
                  "stacks": "[\"Laravel\", \"Bootstrap\", \"MySQL\", \"PHP\"]",
                  "is_show": true,
                  "updated_at": "2023-06-03T16:05:34.074Z",
                  "content": null,
                  "is_featured": false
              },
              {
                  "id": 5,
                  "title": "Mitech Company Profile",
                  "slug": "mitech-landing",
                  "description": "Official website of Mitech, PT Mandiri International Technology. ",
                  "image": "https://cloud.aulianza.com/public/images/projects/mitech.webp",
                  "link_demo": "https://mitech.co.id/",
                  "link_github": null,
                  "stacks": "[\"WordPress\", \"Bootstrap\", \"PHP\"]",
                  "is_show": true,
                  "updated_at": "2023-06-03T01:23:26.052Z",
                  "content": null,
                  "is_featured": false
              },
              {
                  "id": 4,
                  "title": "Aulianza Blog",
                  "slug": "aulianza-blog",
                  "description": "My personal blog, a directory of wonderful things.",
                  "image": "https://cloud.aulianza.com/public/images/projects/blog.webp",
                  "link_demo": "https://aulianza.com",
                  "link_github": null,
                  "stacks": "[\"WordPress\", \"Bootstrap\", \"PHP\"]",
                  "is_show": true,
                  "updated_at": "2023-06-01T01:12:12.795Z",
                  "content": null,
                  "is_featured": false
              },
              {
                  "id": 14,
                  "title": "eMerge Dashboard",
                  "slug": "emerge",
                  "description": "Indonesia-focused Angel Investment Network Dashboard.",
                  "image": "https://cloud.aulianza.com/public/images/projects/emerge.webp",
                  "link_demo": null,
                  "link_github": null,
                  "stacks": "[\"Laravel\", \"Bootstrap\", \"MySQL\", \"PHP\"]",
                  "is_show": true,
                  "updated_at": "2022-01-01T06:53:48.320Z",
                  "content": null,
                  "is_featured": false
              },
              {
                  "id": 2,
                  "title": "Linktree Clone",
                  "slug": "linktree-clone",
                  "description": "Linktree Clone built with React and Emotion Styled.",
                  "image": "https://cloud.aulianza.com/public/images/projects/linktree.webp",
                  "link_demo": "https://hello.aulianza.id",
                  "link_github": "https://github.com/aulianza/react-linktree-clone",
                  "stacks": "[\"JavaScript\", \"React.js\", \"TailwindCSS\"]",
                  "is_show": true,
                  "updated_at": "2021-01-01T03:28:44.234Z",
                  "content": null,
                  "is_featured": false
              },
              {
                  "id": 1,
                  "title": "Pokemon Web  App",
                  "slug": "pokemon-app",
                  "description": "A pokemon list app allows view and catch the Pokemon.",
                  "image": "https://cloud.aulianza.com/public/images/projects/pokemon.webp",
                  "link_demo": "https://aulianza-pokemon-app.vercel.app",
                  "link_github": "https://github.com/aulianza/pokemon-app",
                  "stacks": "[\"JavaScript\", \"React.js\", \"GraphQL\", \"Apollo\", \"Emotion\"]",
                  "is_show": true,
                  "updated_at": "2021-01-01T03:13:23.371Z",
                  "content": null,
                  "is_featured": false
              },
              {
                  "id": 15,
                  "title": "KPN Ticketing System",
                  "slug": "kpn-ticketing",
                  "description": "A modern and new generation helpdesk system of PT AMS Teknologi.",
                  "image": "https://cloud.aulianza.com/public/images/projects/kpnticketing.webp",
                  "link_demo": null,
                  "link_github": null,
                  "stacks": "[\"Nuxt.js\", \"Vue.js\", \"Bootstrap\"]",
                  "is_show": true,
                  "updated_at": "2020-01-01T06:53:48.320Z",
                  "content": null,
                  "is_featured": false
              },
              {
                  "id": 16,
                  "title": "UILIS Mobile App",
                  "slug": "uilis",
                  "description": "Syiah Kuala University OPAC and library lending application.",
                  "image": "https://cloud.aulianza.com/public/images/projects/uilis.webp",
                  "link_demo": null,
                  "link_github": null,
                  "stacks": "[\"Angular\"]",
                  "is_show": true,
                  "updated_at": "2019-01-01T03:13:23.371Z",
                  "content": null,
                  "is_featured": false
              },
              {
                  "id": 20,
                  "title": "geulisindonesia.com",
                  "slug": "geulisindonesia",
                  "description": "A company profile website of PT Geulis Travel Indonesia.",
                  "image": "https://cloud.aulianza.com/public/images/projects/geulisindonesia.webp",
                  "link_demo": null,
                  "link_github": null,
                  "stacks": "[\"WordPress\", \"Bootstrap\", \"PHP\"]",
                  "is_show": true,
                  "updated_at": "2017-01-01T03:13:23.371Z",
                  "content": null,
                  "is_featured": false
              },
              {
                  "id": 18,
                  "title": "elfdibandung.com",
                  "slug": "elfdibandung",
                  "description": "A company profile website of PT Geulis Travel Indonesia.",
                  "image": "https://cloud.aulianza.com/public/images/projects/elfdibandung.webp",
                  "link_demo": null,
                  "link_github": null,
                  "stacks": "[\"WordPress\", \"Bootstrap\", \"PHP\"]",
                  "is_show": true,
                  "updated_at": "2017-01-01T03:13:23.371Z",
                  "content": null,
                  "is_featured": false
              },
              {
                  "id": 19,
                  "title": "elfsebandung.com",
                  "slug": "elfsebandung",
                  "description": "A company profile website of PT Geulis Travel Indonesia.",
                  "image": "https://cloud.aulianza.com/public/images/projects/elfsebandung.webp",
                  "link_demo": null,
                  "link_github": null,
                  "stacks": "[\"WordPress\", \"Bootstrap\", \"PHP\"]",
                  "is_show": true,
                  "updated_at": "2017-01-01T03:13:23.371Z",
                  "content": null,
                  "is_featured": false
              },
              {
                  "id": 21,
                  "title": "athayaglobal.com",
                  "slug": "athayaglobal",
                  "description": "A company profile website of PT Athaya Global Indonesia.",
                  "image": "https://cloud.aulianza.com/public/images/projects/athayaglobal.webp",
                  "link_demo": null,
                  "link_github": null,
                  "stacks": "[\"WordPress\", \"Bootstrap\", \"PHP\"]",
                  "is_show": true,
                  "updated_at": "2017-01-01T03:13:23.371Z",
                  "content": null,
                  "is_featured": false
              },
              {
                  "id": 23,
                  "title": "dhahab.co.id",
                  "slug": "dhahab",
                  "description": "A company profile website of PT Dhahab Tour WIsata.",
                  "image": "https://cloud.aulianza.com/public/images/projects/dhahabtour.webp",
                  "link_demo": null,
                  "link_github": null,
                  "stacks": "[\"WordPress\", \"Bootstrap\", \"PHP\"]",
                  "is_show": true,
                  "updated_at": "2017-01-01T03:13:23.371Z",
                  "content": null,
                  "is_featured": false
              },
              {
                  "id": 17,
                  "title": "britishpropolis.com",
                  "slug": "british-propolis",
                  "description": "A landing page of British Propolis Indonesia Bee Pro products.",
                  "image": "https://cloud.aulianza.com/public/images/projects/britishpropolis.webp",
                  "link_demo": null,
                  "link_github": null,
                  "stacks": "[\"WordPress\", \"Bootstrap\", \"PHP\"]",
                  "is_show": true,
                  "updated_at": "2017-01-01T03:13:23.371Z",
                  "content": null,
                  "is_featured": false
              },
              {
                  "id": 24,
                  "title": "acehtouring.com",
                  "slug": "acehtouring",
                  "description": "A company profile website of PT Kuala Nanggroe Kita Tour & Travel.",
                  "image": "https://cloud.aulianza.com/public/images/projects/acehtouring.webp",
                  "link_demo": null,
                  "link_github": null,
                  "stacks": "[\"WordPress\", \"Bootstrap\", \"PHP\"]",
                  "is_show": true,
                  "updated_at": "2017-01-01T03:13:23.371Z",
                  "content": null,
                  "is_featured": false
              },
              {
                  "id": 22,
                  "title": "aichitrainingcenter.com",
                  "slug": "aichitrainingcenter",
                  "description": "A company profile website of AichiTraining Center.",
                  "image": "https://cloud.aulianza.com/public/images/projects/aichitrainingcenter.webp",
                  "link_demo": null,
                  "link_github": null,
                  "stacks": "[\"WordPress\", \"Bootstrap\", \"PHP\"]",
                  "is_show": true,
                  "updated_at": "2017-01-01T03:13:23.371Z",
                  "content": null,
                  "is_featured": false
              }
          ]
      },
      "__N_SSG": true
    }
    // const response = await prisma.projects.findMany();
    res.status(200).json({ status: true, data: response });
  } catch (error) {
    res.status(200).json({ status: false, error: error });
  }
}
