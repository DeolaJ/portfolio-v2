import React from 'react';
import { Section, SectionTitle, SectionTitleSub } from './partials/section';

const BlogPosts = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Create a Simple Cookie Consent Pop-up for your Website',
      link:
        'https://blog.formpl.us/how-to-create-a-simple-cookie-consent-pop-up-for-your-website-dad17a174b60?source=your_stories_page---------------------------',
    },
    {
      id: 2,
      title: 'Creating A Simple Collapsible Sidebar with JavaScript (No Framework Required)',
      link:
        'https://blog.formpl.us/creating-a-simple-collapsible-sidebar-with-javascript-no-framework-required-af9f8265d156?source=your_stories_page---------------------------',
    },
    {
      id: 3,
      title: 'How to create an Image Uploader using React and Cloudinary',
      link:
        'https://medium.com/frontend-digest/how-to-create-an-image-uploader-using-react-and-cloudinary-5f07959723c4?source=your_stories_page---------------------------',
    },
    {
      id: 4,
      title: 'Twin.macro Tutorial for Beginners: Styling with Tailwind CSS and Emotion in React',
      link:
        'https://blog.formpl.us/twin-macro-tutorial-for-beginners-styling-with-tailwind-css-and-emotion-in-react-5228c819d713?source=your_stories_page-------------------------------------',
    },
  ];

  return (
    <Section>
      <SectionTitle>Blog posts</SectionTitle>
      <SectionTitleSub>Published articles</SectionTitleSub>
      {posts.reverse().map((post) => (
        <article key={post.id}>
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2.5 mb-6 text-gray-700 border border-gray-500 border-solid rounded-md sm:p-6 hover:text-blue-600 hover:border-blue-600">
            <h4>{post.title}</h4>
          </a>
        </article>
      ))}
    </Section>
  );
};

export default BlogPosts;
