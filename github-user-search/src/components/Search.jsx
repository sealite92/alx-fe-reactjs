// // src/components/Search.jsx
// import React, { useState } from "react";
// import { searchUsers } from "../services/githubService";

// function Search() {
//   const [username, setUsername] = useState("");
//   const [location, setLocation] = useState("");
//   const [minRepos, setMinRepos] = useState("");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(false);
//     setResults([]);

//     try {
//       const data = await searchUsers({ username, location, minRepos });
//       setResults(data.items);
//     } catch (err) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 max-w-3xl mx-auto">
//       <form
//         onSubmit={handleSearch}
//         className="bg-white p-6 rounded shadow-md space-y-4"
//       >
//         <input
//           className="w-full border p-2 rounded"
//           type="text"
//           placeholder="Username (optional)"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           className="w-full border p-2 rounded"
//           type="text"
//           placeholder="Location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//         <input
//           className="w-full border p-2 rounded"
//           type="number"
//           placeholder="Minimum Repositories"
//           value={minRepos}
//           onChange={(e) => setMinRepos(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//         >
//           Search
//         </button>
//       </form>

//       {loading && <p className="text-center mt-4">Loading...</p>}
//       {error && (
//         <p className="text-center text-red-500 mt-4">
//           Looks like we cant find the user
//         </p>
//       )}

//       <div className="mt-6 space-y-4">
//         {results.map((user) => (
//           <div
//             key={user.id}
//             className="p-4 border rounded flex items-center space-x-4"
//           >
//             <img
//               src={user.avatar_url}
//               alt={user.login}
//               className="w-16 h-16 rounded-full"
//             />
//             <div>
//               <h2 className="text-lg font-semibold">{user.login}</h2>
//               <a
//                 href={user.html_url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 underline"
//               >
//                 View Profile
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Search;

import { useState } from "react";
import { searchUsers } from "../services/githubService"; // Make sure to import the correct service

export default function Search() {
  const [username, setUsername] = useState(""); // For storing the username
  const [location, setLocation] = useState(""); // For storing the location
  const [minRepos, setMinRepos] = useState(""); // For storing the min repos count
  const [userData, setUserData] = useState(null); // To store user data
  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState(""); // For error handling

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await searchUsers({ username, location, minRepos });
      setUserData(data.items || []); // GitHub's search returns items
    } catch (err) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border"
        />
        <input
          type="number"
          placeholder="Minimum repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {userData && (
        <div>
          {userData.map((user) => (
            <div key={user.id} className="border p-4 mb-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16"
              />
              <h3>{user.login}</h3>
              <p>Location: {user.location || "N/A"}</p>
              <p>Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
