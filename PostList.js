import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Precautions',
    summary: `
      Dengue fever is a serious mosquito-borne illness. Here are some precautions to help prevent it:
      1. Apply mosquito repellent regularly.
      2. Wear long-sleeved clothing and long pants.
      3. Use mosquito nets when sleeping.
      4. Eliminate standing water to prevent mosquito breeding.
      5. Keep windows and doors closed or use screens to keep mosquitoes out.
      6. If you experience symptoms, seek medical attention immediately.
    `, 
    
    image: 'images.jpeg',
  },
  {
    id: 2,
    title: 'Precautions',
    summary: `
    Dengue fever is a serious mosquito-borne illness. Here are some precautions to help prevent it:
    1. Apply mosquito repellent regularly.
    2. Wear long-sleeved clothing and long pants.
    3. Use mosquito nets when sleeping.
    4. Eliminate standing water to prevent mosquito breeding.
    5. Keep windows and doors closed or use screens to keep mosquitoes out.
    6. If you experience symptoms, seek medical attention immediately.
  `, 
    image: 'images (1).jpeg',
  },
];

function PostList() {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <img src={post.image} alt={post.title} style={{ width: '500pxpx', height: 'auto' }} />
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
          <Link to={`/post/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default PostList;

