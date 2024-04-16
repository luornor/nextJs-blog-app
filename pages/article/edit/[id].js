import { useRouter } from 'next/router';
import { useState,useEffect} from 'react';
import styles from '../../../styles/Edit.module.css'

export default function EditPostPage () {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const { id } = router.query;
  console.log(id)

  useEffect(() => {
    if (id) {
      fetchPostData(id);
      document.title = `Editing Post: ${id}`
    }
  }, [id]);

  // Fetch the existing post data and set it as initial values
  const fetchPostData = async (id) => {
    const response = await fetch( `https://jsonplaceholder.typicode.com/posts/${id}`)

    const data = await response.json();
    console.log(data);
    setTitle(data.title);
    setBody(data.body);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let date = new Date().toUTCString();

    let updatedData = editPost(id,{ title, body,date });
    
    setTitle("");
    setBody("");
    setIsSubmitting(false);
    console.log(updatedData);
    
    router.push('/');
  };
   

  return (
    <>
     <div>
     <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label className={styles.label}>Title:</label>
        <input
          type="text"
          id="title"
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className={styles.label} >Body:</label>
        <textarea
          className={styles.input}
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <button type="submit" className={styles.button} disabled={isSubmitting}>
        {isSubmitting
          ? "Submitting..."
          : "Edit Post"}
      </button>
    </form>
    </div>
    </>
   
  );
};

async function editPost(id, article) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(article),
        headers: {
          "body-Type": "application/json; charset=UTF-8",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to edit the post");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error editing post:", error);
    return null;
  }
}
