// 1 tapsyrma
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

function MainApp() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />} />

        <Route path="/profile/:username" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Welcome to Home Page</h1>;
}

function UserProfile() {
  const { username } = useParams();
  return <h1>Welcome, {username}!</h1>;
}
       
export default MainApp;


//2 tapsyrma
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Link,
} from "react-router-dom";

function Products() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to our store</h1>
      <p>Select a product:</p>
      <ul>
        <li>
          <Link to="/product/1">Product 1</Link>
        </li>
        <li>
          <Link to="/product/2">Product 2</Link>
        </li>
        <li>
          <Link to="/product/3">Product 3</Link>
        </li>
      </ul>
    </div>
  );
}

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (!product) return <h2>Product not found</h2>;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.title} width="200" />
    </div>
  );
}

export default Products;


//3 tapsyrma
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Link,
} from "react-router-dom";

function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>🏠 Home Page</h1>
      <p>Choose a product:</p>
      <ul>
        <li>
          <Link to="/product/1">Product 1</Link>
        </li>
        <li>
          <Link to="/product/2">Product 2</Link>
        </li>
        <li>
          <Link to="/product/3">Product 3</Link>
        </li>
      </ul>
    </div>
  );
}

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (!product) return <h2>Product not found</h2>;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.title} width="200" />
    </div>
  );
}



//4 tapsyrma
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

function BlogApp() { 
  return (
    <Router>
      <Routes>
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} /> 
      </Routes>
    </Router>
  );
}

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>📢 Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body.substring(0, 50)}...</p>
          <Link to={`/posts/${post.id}`}>Read More</Link> 
        </div>
      ))}
    </div>
  );
}

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  if (!post) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default BlogApp; 
