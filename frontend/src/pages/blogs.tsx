import React from 'react';
import { createClient } from "next-sanity";
import { GetServerSideProps } from 'next';

interface Author {
  name: string;
  about: string;
  image: string; // Replace 'any' with the proper type, e.g., 'string'
}

interface serverProps {
  author: Author[];
}

const Blogs: React.FC<serverProps> = ({ author }) => {
  console.log(author);
  return (
    <div >
     <p className='font-bold'> blogs</p>
    </div>
  );
};

export default Blogs;

// export const getServerSideProps: GetServerSideProps<serverProps> = async (context) => {
//   const client = createClient({
//     projectId: "po1xl0z4",
//     dataset: "production",
//     useCdn: false,
//   });

//   const query = `*[_type == "author"]`;
//   const author: Author[] = await client.fetch(query);

//   return {
//     props: {
//       author, // Nested under 'props' key
//     },
//   };
// };
