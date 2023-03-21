import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/NetSepio/website.git', // Update to point to your repository
  user: {
   name: 'Aditya Mishra', // update to use your name
   email: 'adimis.ai.001@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);