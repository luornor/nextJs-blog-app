import React, { useState } from 'react';
import styles from '../../styles/Edit.module.css'

export default function CreatePostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    let date = new Date().toUTCString()

    let data = await PostData({title, body, date });
    console.log(data)
    setTitle('');
    setBody('');
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label className={styles.label}>Title:</label>
        <input
          type="text" className={styles.input}
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className={styles.label}>Body:</label>
        <textarea className={styles.input}
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <button type="submit" className={styles.button} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Create Post'}
      </button>
    </form>
  );
}


export async function PostData(article) {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(article),
          headers: {
              'Content-Type': 'application/json; charset=UTF-8',
          },
      });

      if (!response.ok) {
          throw new Error('Failed to create the post');
      }

      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error creating post:', error);
      return null;
  }
}