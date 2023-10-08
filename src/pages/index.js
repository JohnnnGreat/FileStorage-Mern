import { Inter } from "next/font/google";
import { useState } from "react";
import { Image } from "next/image";
import storage from "../firebaseConfig.js";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Home() {
  console.log(storage);
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const imageUrl = encodeURI(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBall_%2528association_football%2529&psig=AOvVaw1B91QciNg1GtqmQqASTa6S&ust=1696873664382000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKitjJWB54EDFQAAAAAdAAAAABAE"
  );

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      console.log("file not valid");
    } else {
      const storageRef = ref(storage, `/images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      setLoading(true);
      // const uploadTask = storage.ref(`/images/${file.name}`).put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          // update progress
          setPercent(percent);
        },
        (err) => {
          setLoading(false);
          setCompleted(true);
          console.log(err);
        },
        () => {
          setLoading(true);
          setCompleted(true);
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
            setUrl(url);
          });
        }
      );
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input type="file" accept="image/*" onChange={handleFile} />
          <input type="submit" />
          {loading && <p>Loading</p>}
          <p>{percent} "% done"</p>
        </form>
        {/* {completed && (
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/fileuploader-14e17.appspot.com/o/images%2Fray-so-export.png?alt=media&token=3f1f7cdb-e30f-41bb-a848-5a840cb5b605"
            width={400}
            height={400}
          />
        )} */}
      </div>
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBall_%2528association_football%2529&psig=AOvVaw1B91QciNg1GtqmQqASTa6S&ust=1696873664382000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKitjJWB54EDFQAAAAAdAAAAABAE" />
    </div>
  );
}
