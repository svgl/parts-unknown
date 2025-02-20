import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import DestinationsPage from "./components/DestinationsPage";
import BlogPage from "./components/BlogPage";
import ForumPage from "./components/ForumPage";
import PostPage from "./components/PostPage";
import ForumCountry from "./components/ForumCountry";
import FullBlogPost from "./components/FullBlogPost";
import CountryPage from "./components/CountryPage";
import ShopPage from "./components/ShopPage";
import ContinentsShopPage from "./components/ContinentsShopPage";
import ShopItemCard from "./components/ShopItemCard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Store from "./components/Store";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import NavbarComponent from "./components/NavbarComponent";
import CartProvider from "./components/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [countries, setCountries] = useState([]);
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");

  const client = new QueryClient();

  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  useEffect(() => {
    fetch("/api/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  // const { data, isLoading } = useQuery(["country"], () => {
  //   return Axios.get("/api/countries").then((res) => res.data);
  // });

  // function getBlogs() {
  //   return Axios.get("/api/blogs").then((res) => res.data);
  // }

  // const { data, isLoading: blogsLoading } = useQuery(["blogs"], () => getBlogs());

  const searchStoriesByName = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase())
  );

  const searchForumsByCountry = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  // useEffect(() => {
  //   fetch("/api/hello", {
  //     method: "GET",
  //     headers: {
  //       withCredentials: true,
  //     },
  //   })
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <QueryClientProvider client={client}>
      <CartProvider>
        {/* <div className="App">
          <h1>Page Count: {count}</h1>
        </div> */}
        <div style={{ minHeight: "100vh", background: "#1C1C1E" }}>
          {/* <NavBar user={user} setUser={setUser} /> */}
          <NavbarComponent user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route
              path="/stories"
              element={
                <BlogPage
                  blogs={searchStoriesByName}
                  setBlogs={setBlogs}
                  setSearch={setSearch}
                  user={user}
                />
              }
            />
            <Route
              path="/forum"
              element={
                <ForumCountry
                  countries={searchForumsByCountry}
                  setCountries={setCountries}
                  setSearch={setSearch}
                />
              }
            />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/countries/:id" element={<CountryPage />} />
            <Route path="/forums/:id" element={<ForumPage user={user} />} />
            <Route path="/posts/:id" element={<PostPage user={user} />} />
            <Route path="/blogs/:id" element={<FullBlogPost user={user} />} />
            <Route path="/continents/:id" element={<ContinentsShopPage />} />
            <Route path="/shop/:id" element={<ShopItemCard />} />
            <Route path="/store" element={<Store user={user} />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </div>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
